# Tibz Design — Design System

The brand system for **Tibz Design**, the creative studio of **Tibo Créteur** — a
France-based motion designer, 3D artist and graphic designer working across
motion design, 3D, print, character design, data viz and visual identity.

> *"Creative studio — Motion & design."*
> Three disciplines serving one thing: visuals that make their effect.

This project is the machine-readable + human-readable home for the brand: design
tokens, fonts, real visual assets, reusable React components, and a faithful
recreation of the portfolio website as a UI kit. Consuming projects link
`styles.css` and pull components from the compiled bundle.

---

## Sources

Everything here was reverse-engineered from the live portfolio codebase.

- **Codebase:** `Tibz_Design/` (static site — vanilla HTML/CSS/JS, `framer-motion`
  listed as the only dependency). Served at **https://www.tibzdesign.fr**.
  - Pages live in `docs/en/` and `docs/fr/` (the site is bilingual EN/FR).
  - Styles in `docs/public/css/` (`base.css`, `outils/*.css`, `pages/*.css`).
  - Copy strings in `docs/public/json/en.json` + `fr.json`.
  - Fonts in `docs/public/polices/`. Imagery + video in `docs/public/image|video/`.
- **Logo upload:** `uploads/logotestt.png` (the hand-drawn "Tibz" wordmark).
- **Socials:** Instagram `@tibo.crtr`, LinkedIn `tibo-creteur`, Behance `tibofromtibzdesign`.
- **Clients/partners seen in source:** Drime, Université Catholique de Lille,
  Toulon Provence Regatta / 12 MED Event, Syride, Hoyez, Myo Solutions.

> The reader is not assumed to have access to the above — paths are recorded so
> they can be re-opened if available.

---

## Content fundamentals — how Tibz writes

- **Voice:** first-person and personal ("I work with clients who…"), occasionally
  sliding to a confident studio "we" in section blurbs ("What **we** know how to do
  and do well"). Warm, direct, a little cocky in a charming way:
  *"If you're after someone who really gets involved — you're in the right place."*
- **Bilingual:** every string exists in EN and FR. French is the primary culture;
  some poetic French is kept even in EN (project epigraphs).
- **Casing:** UI labels, badges, nav, buttons and meta are **UPPERCASE**
  (`CONTACT`, `START A PROJECT`, `3D`, `PERSONAL WORK`). Headlines are sentence case.
- **Punchy fragments + bold spans.** Body copy leans on short declaratives and
  **bolds the key phrases** inline (`<strong>motion graphic percutant</strong>`).
- **Epigraphs.** Project pages open with an italic quote — sometimes a designer,
  sometimes the studio's own line: *"Design is thinking about the future with the
  lightness of a breath."*
- **Emoji:** used sparingly and playfully in micro-moments only — `🚀` in the
  about/build credit, `💾 Copied` on a copy-to-clipboard toast. Never in headlines
  or formal copy. Keyboard easter eggs exist (press `m`, `i`, `l`).
- **Numbers:** stat blocks use a number + tiny superscript unit (`6` `ans`,
  `10` `+`). Keep them few and real; no invented metrics.

---

## Visual foundations

**Canvas & ink.** The whole brand sits on warm paper `#f9f9f4` with **pure black**
ink. A slightly darker greige `#ebebe6` is the only "card" fill. There is almost
no grey-on-grey; contrast is high and confident. Dark sections invert to black
with paper text.

**Colour as a coding system.** Beyond the neutrals there is **one signature green**
`#9bee68` (text selection, the `NEW` badge, the primary CTA, the availability dot,
hover accents) paired with deep forest `#1b3a1d` for text on green. Then each
creative **discipline owns a hue**, always shipped with a deep "ink" partner for
legible text-on-colour:
3D = amber `#e7a026`, Print = red `#e84343`, Motion = magenta `#ae319e`,
Characters = teal `#43a09b`, UI/UX = blue `#537aef`, Visual identity = pink
`#e726cd`, Award = cream `#fff5cc`. Hues appear as badges and as the 3px "stick"
under skill titles.

**Type.** Monospace does almost everything: **IBM Plex Mono**, with tight
`-0.02em` tracking, generous `1.7` line-height, justified body with hyphenation,
and lots of uppercase labels. The *one* deliberate identity contrast is an
**italic serif** — **DM Serif Display** — used for the discipline marquee and
project epigraphs (a soft, editorial counterpoint to the mono). These two faces
*are* the identity. Erica One, Gruno and Inter are **not** brand faces — they are
typefaces chosen inside specific projects; their files stay in `assets/fonts/`
for reuse but are deliberately kept out of the identity token closure.

**Imagery.** Real renders and photography, shown large and cinematic with a slight
`brightness(85%)` dim that lifts to 100% on hover. Project tiles scale up `1.08`
on hover behind a bottom **scrim gradient** (`rgba(0,0,0,.8) → transparent`) that
carries an uppercase title + client. A full-bleed **showreel video** is the
homepage hero. Character/illustration work runs warm (cream + navy line art).

**Shape language.** Soft but specific corners: tiles `15px`, panels/cards `10px`,
buttons `7px`, pills `50px`. The signature move is a **"snapped" corner** — icon
buttons round every corner *except* bottom-left (`3px`), framed by a **thick 2–3px
black outline** that turns forest-green on hover (the icon un-rotates from −45°/45°
to 0° at the same time).

**Borders over shadows.** The brand is essentially **flat** — it relies on thick
black outlines, hairline dividers `#e1e1da`, and scrims rather than drop shadows.
Elevation tokens exist but are used sparingly.

**Motion.** Quick and clean: `0.2–0.3s ease-in-out` for hovers/presses, `0.7s` for
the navbar show/hide and underline sweeps. Patterns: a sliding left-origin
**underline** on ghost links; **infinite marquees** (disciplines + partner logos,
paused on hover); a **pulsing green dot** for availability; AOS-style fade-up /
zoom-in reveals on scroll; a gentle bouncing down-arrow on the hero.

**Hover / press.** Hover = brighten image, fill or invert button, green border,
underline sweep. The primary button flips **green → black with white text** on
hover. Press/active states are subtle (no heavy shrink).

**Transparency & blur.** Used lightly — scrim gradients on imagery and partner-
marquee edge masks. No glassmorphism, no heavy backdrop blur.

---

## Iconography

- **Primary set: Font Awesome 6 (Free).** The site loads
  `font-awesome/6.0.0-beta3` (we pin `6.4.0` here). Solid icons dominate:
  `fa-arrow-right` (the recurring rotated arrow in IconButton/skill cards),
  `fa-pen-nib`, `fa-user`, `fa-compass-drafting`, `fa-location-dot`, plus brand
  glyphs `fa-unity`, `fa-instagram`, `fa-linkedin-in`, `fa-behance`.
  → Load Font Awesome 6 on any page that uses `IconButton` / `SkillCard` / footer.
- **Bespoke SVGs** from the source live in `assets/icons/`: `fleche.svg` (arrow),
  `oeil.svg` (eye), `medaille.svg` (award medal), plus `behance.svg`.
  (`logoinsta.png` for Instagram; the LinkedIn SVG used a legacy ISO-8859-1
  encoding that wouldn't sanitize — use the Font Awesome `fa-linkedin-in` glyph.)
- **Unicode** is used as iconography too: the `→` arrow appended to CTAs, the `·`
  middot separating marquee items, and a CSS ＋/✕ cross for the FAQ toggle.
- **Emoji** appear only as occasional playful accents (see Content fundamentals).
- We do **not** hand-draw icons. Prefer the Font Awesome class, then a copied SVG,
  then a Unicode glyph.

---

## Brand assets (`assets/`)

- `logo/tibz-wordmark.png` — the hand-drawn "Tibz" wordmark (primary logo, black).
- `logo/tibz-favicon.png` — the wordmark on a paper square, used as the favicon
  (the brand uses the wordmark everywhere; there is no separate green app mark).
- `logo/regard.png` — halftone "glasses" graphic (a project-specific visual).
- `partners/*.png` — Drime, Catho Lille, Toulon Regatta, Syride, Hoyez, Myo.
- `projects/*` — cover/gallery imagery (Syride, Liúzhì console, Axion, Regatta,
  Omodaka, Mouvaplan, a character turnaround, robot, walk cycle).
- `video/showreel.webm` — homepage hero reel.
- `fonts/` — project faces kept for reuse (EricaOne, GrunoTrial, Inter). These
  are **not** identity fonts. The identity faces (IBM Plex Mono + DM Serif
  Display) load from Google Fonts.

> ⚠ **Font licence flag:** `GrunoTrial.otf` is a **TRIAL** font (a project face,
> not identity). Replace with a licensed copy before any commercial use.

---

## Tokens (`tokens/`, entry `styles.css`)

`styles.css` only `@import`s the token layers — link **that one file**:

- `tokens/fonts.css` — Google imports for the two identity faces: IBM Plex Mono
  and DM Serif Display.
- `tokens/colors.css` — neutrals, signature green, the discipline palette, and
  semantic aliases (`--bg`, `--surface-card`, `--text-body`, `--selection`, …).
- `tokens/typography.css` — families, weights, tracking/leading, type scale.
- `tokens/spacing.css` — spacing scale, layout gutters, radii (incl. `--radius-clip`),
  borders (`--stroke`), motion (`--ease`, `--dur*`).

Prefer the semantic aliases in product code; reach for base tokens for one-offs.

---

## Components (`components/`)

Reusable React primitives. Import from the compiled bundle —
`const { Button } = window.TibzDesignSystem_f71353` — never script-src the `.jsx`.

| Component | Group | What it is |
|---|---|---|
| `Button` | core | Primary (green→black) / secondary (outline) / ghost (underline) action |
| `Badge` | core | Discipline-coded pill (NEW / 3D / PRINT / UI/UX / …) |
| `IconButton` | core | Outlined square w/ snapped corner + rotating FA glyph |
| `Tag` | core | Thin outlined capability chip, green hover fill |
| `ProjectCard` | cards | Portfolio image tile — hover badges, scrim title |
| `SkillCard` | cards | Greige capability panel w/ coloured discipline stick |
| `StatBlock` | cards | Oversized mono metric + superscript unit |
| `Navbar` | layout | Fixed top bar — wordmark, Contact, EN/FR, burger |
| `Marquee` | layout | Italic-serif infinite ticker w/ middots |
| `FaqItem` | layout | ＋/✕ accordion row |

Each directory carries a `<Name>.d.ts` (props contract), `<Name>.prompt.md`
(usage), and one `@dsCard` HTML demoing states. **Starting points:** `Button`,
`Navbar`, `ProjectCard`.

---

## UI kit (`ui_kits/`)

- **`ui_kits/tibz-site/`** — a faithful, click-through recreation of the portfolio
  website. `index.html` boots a small state router across three screens:
  - `Home.jsx` — showreel hero, About + stats + marquee + CTA, projects grid,
    Skills, partner marquee, FAQ.
  - `ProjectPage.jsx` — a case study (Syride): hero + badges, meta row, epigraph,
    presentation, gallery.
  - `ContactPage.jsx` — the project-enquiry form + contact details.
  - `App.jsx` wires the Navbar/Footer chrome and routing; `_primitives.jsx` is an
    **auto-generated faithful copy** of the component source so the kit also renders
    fully standalone (it prefers the real `_ds_bundle.js` when present, e.g. inside
    the Design System tab). Don't hand-edit `_primitives.jsx` — regenerate it from
    `/components` if a primitive changes.

---

## Root manifest

```
styles.css            ← link THIS (token entry point)
tokens/               colors · typography · spacing · fonts
guidelines/           foundation @dsCard specimen cards (Type/Colors/Spacing/Brand)
components/           core · cards · layout  (+ .d.ts / .prompt.md / .card.html)
ui_kits/tibz-site/    portfolio website recreation
assets/               logo · partners · projects · icons · fonts · video
readme.md             this file
SKILL.md              Agent-Skill front-matter for portable use
```

*"May this creation awaken your inspiration."* — Tibz Design
