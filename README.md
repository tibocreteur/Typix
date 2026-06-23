# Typix — Page de vente

Page de vente du plugin **Typix** (effet After Effects), prête à héberger sur **GitHub Pages**.

## Mise en ligne (GitHub Pages)

1. Crée un dépôt GitHub et pousse tout le contenu de ce dossier :
   ```
   git init
   git add .
   git commit -m "Typix landing"
   git branch -M main
   git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Build and deployment**
   - *Source* : **Deploy from a branch**
   - *Branch* : **main** / dossier **/ (root)** → **Save**
3. Attends ~1 min. Le site est en ligne sur `https://<ton-compte>.github.io/<ton-repo>/`.

### Domaine perso (tibzdesign.fr)
- **Settings → Pages → Custom domain** : entre `tibzdesign.fr` → Save.
- Chez ton registrar (DNS), ajoute les enregistrements GitHub Pages :
  - 4 `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - (sous-domaine `www` → un `CNAME` vers `<ton-compte>.github.io`)
- Coche **Enforce HTTPS** une fois le certificat émis.

## Fichiers
- `index.html` — la page (copie de `Typix - Page de vente.dc.html`, garde le `.dc.html` pour rééditer).
- `support.js`, `_ds/` — runtime + design system (ne pas supprimer).
- `assets/` — logos, vidéos de démo.
- `.nojekyll` — **indispensable** : sans lui GitHub ignore le dossier `_ds/` (préfixe `_`).

## ⚠ Avant la vente
- Branche le **lien Lemon Squeezy** : remplace `#inclus` par ton URL produit (panneau Tweaks `buyUrl`, ou cherche `buyUrl` dans le code).
- Complète les **mentions légales** (SIRET, hébergeur) déjà pré-remplies.
- **Vidéos lourdes** : GitHub limite à 100 Mo/fichier et conseille < 1 Go/dépôt. Si l'ensemble est trop lourd ou lent, héberge les `.mp4` ailleurs (Cloudflare R2, Bunny.net) et mets les URLs à la place des chemins `assets/…`.
