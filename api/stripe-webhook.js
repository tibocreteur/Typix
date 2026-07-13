const Stripe = require('stripe');
const { Resend } = require('resend');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on('data', (chunk) => chunks.push(chunk));
    readable.on('end', () => resolve(Buffer.concat(chunks)));
    readable.on('error', reject);
  });
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  let event;
  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details && session.customer_details.email;

    if (email) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM,
          to: email,
          subject: 'Ton téléchargement Typix',
          html: `
            <p>Merci pour ton achat !</p>
            <p>Télécharge Typix ici : <a href="${process.env.DOWNLOAD_URL}">${process.env.DOWNLOAD_URL}</a></p>
            <p>Besoin d'aide ? Réponds simplement à cet email.</p>
          `,
        });
      } catch (err) {
        console.error('Resend email failed:', err);
      }
    } else {
      console.error('checkout.session.completed had no customer email:', session.id);
    }
  }

  res.status(200).json({ received: true });
}

handler.config = { api: { bodyParser: false } };

module.exports = handler;
