# Èlia & Adrián — Wedding Website

Static wedding website for Èlia & Adrián's wedding on **12 September 2027** at Can Ribas de Montbui, Bigues i Riells del Vallès.

## Features

- **Bilingual** — Catalan / Spanish toggle, persisted via `localStorage`
- **Live countdown** to the wedding date
- **RSVP deadline badge** — pill showing days remaining to confirm, turns red in the final 14 days
- **RSVP form** — dynamic guest list (name, adult/child, dietary needs), submitted via Netlify Forms; child-guest notice shown automatically when a Niño/a is added
- **Excel-ready Netlify data** — guest fields re-indexed before submit, `guest_count` and `has_children` hidden fields, pipe-formatted guests summary
- **Save the date** — Google Calendar link and Apple/Outlook `.ics` download shown after RSVP acceptance
- **Programme / timeline** — horizontal timeline (desktop) with vertical fallback (mobile)
- **Guest info cards** — transport, accommodation and dress code, each with a styled note chip for secondary info
- **FAQ accordion** — collapsible Q&A for parking, kids, gifts and dietary needs
- **Active nav underline** — animated underline follows the current scroll section
- **Photo filmstrip** in the Our Story section — horizontal scroll with arrows, dot indicators and auto-rotate every 6 s (up to 10 photos)
- Smooth scroll animations and mobile-responsive layout with a hamburger menu

## Project structure

```
├── index.html              # Main page
│
├── css/
│   ├── tokens.css          # ★ Edit here to change colours, fonts & spacing
│   ├── base.css            # Reset, body, layout utilities, scroll animations
│   ├── nav.css             # Top navigation bar & mobile overlay
│   ├── hero.css            # Hero section, countdown, scroll cue, keyframes
│   ├── story.css           # "Our Story" text & photo filmstrip
│   ├── details.css         # Event detail cards & map button
│   ├── rsvp.css            # RSVP form, guest list, deadline badge, calendar buttons
│   ├── timeline.css        # Horizontal timeline (desktop) & vertical (mobile)
│   ├── info.css            # Info cards & FAQ accordion
│   └── footer.css          # Footer
│
├── js/
│   ├── content.js          # ★ Edit here to change all website text and photo list
│   ├── lang.js             # Language switching logic
│   ├── countdown.js        # Live wedding countdown timer
│   ├── calendar.js         # Google Calendar URL & .ics file builder
│   ├── rsvp.js             # RSVP form, guest rows & deadline badge
│   ├── ui.js               # Scroll animations, mobile nav, FAQ, filmstrip, timeline equalizer
│   └── main.js             # Entry point — calls all init functions on DOMContentLoaded
│
└── assets/
    └── images/
        ├── hero.jpg        # Hero background photo
        ├── logo.png        # Nav logo
        └── story/          # ★ Drop couple photos here (up to 10)
            ├── photo1.jpg
            ├── photo2.jpg
            └── ...
```

## Setup

No build step required — open `index.html` directly in a browser or deploy to Netlify.

## Customisation

### Copy & translations

All text is in **`js/content.js`** — the only file you need to edit to change any wording in either language. The object has two keys (`ca` for Catalan, `es` for Spanish), each containing every string used on the page.

### Colours & design tokens

All colours, fonts and spacing are CSS custom properties in **`css/tokens.css`**:

```css
:root {
  --color-bg:           #F6F8F3;
  --color-text:         #1A1C18;
  --color-accent:       #3D4A38;
  /* … */
}
```

Edit this file to retheme the entire site without touching any other CSS.

### Fonts

The site uses **Cormorant Garamond** (display headings), a script font via `--font-script` (couple's names in the hero), and **DM Sans** (body text), all loaded from Google Fonts. To change fonts, update the `--font-display`, `--font-script` and `--font-body` tokens in `css/tokens.css` and update the `<link>` in `index.html`.

### Event details (calendar)

The wedding date and location used for the Save the Date calendar links are defined in `buildGoogleCalendarUrl()` and `buildICSDataUri()` in **`js/calendar.js`**.

### FAQ content

FAQ questions and answers are defined as translation keys (`faq-1-q`, `faq-1-a`, etc.) in `js/content.js` and rendered in the accordion in `index.html`. Add or remove `<div class="faq-item">` blocks to change the FAQ list.

### Couple photos (filmstrip)

Photos in the Our Story section are managed entirely from `js/content.js` — no HTML to touch:

```js
const STORY_PHOTOS = [
  'assets/images/story/photo1.jpg',
  'assets/images/story/photo2.jpg',
  // 'assets/images/story/photo5.jpg',  ← uncomment to activate
];
```

1. Drop the image file into `assets/images/story/`
2. Add or uncomment its line in `STORY_PHOTOS`

The filmstrip (scroll, arrows, dots, auto-rotate) rebuilds itself from the list. Supports up to 10 photos.

## Netlify Forms

The RSVP form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend needed. Submissions appear in the Netlify dashboard under **Forms → rsvp**.

Before each submission, `js/rsvp.js` does the following automatically:

- **Re-indexes guest fields** sequentially (`guest_1_*`, `guest_2_*`, …) so deletions mid-form never leave gaps in the Netlify CSV export
- Sets **`guest_count`** (integer) and **`has_children`** (`Sí` / `No`) as hidden fields — useful as filter columns in Excel
- Builds a **pipe-separated `guests` summary** (shown in Netlify email notifications):

```text
Nombre                  | Tipo    | Dieta
------------------------+---------+----------------------
Joan Pérez              | Adulto  | -
Maria García            | Niño/a  | Sin gluten
```

## Deployment

The site deploys automatically to Netlify on every push to `main`. Development work is kept on the `dev` branch to avoid triggering unnecessary deploys.

### Script load order

The JS files are plain (non-module) scripts that share the global scope. The load order in `index.html` must be maintained:

```text
content.js  →  lang.js  →  countdown.js  →  calendar.js  →  rsvp.js  →  ui.js  →  main.js
```
