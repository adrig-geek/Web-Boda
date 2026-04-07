# Èlia & Adrián — Wedding Website

Static wedding website for Èlia & Adrián's wedding on **12 September 2027** at Can Ribas de Montbui, Bigues i Riells del Vallès.

## Features

- **Bilingual** — Catalan / Spanish toggle, persisted via `localStorage`
- **Live countdown** to the wedding date
- **RSVP deadline badge** — pill showing days remaining to confirm, turns red in the final 14 days
- **RSVP form** — dynamic guest list (name, adult/child, dietary needs), submitted via Netlify Forms
- **Save the date** — Google Calendar link and Apple/Outlook `.ics` download shown after RSVP acceptance
- **Programme / timeline** of the day's events
- **Guest info cards** — transport, accommodation and dress code with icons and detail chips
- **FAQ accordion** — collapsible Q&A for parking, kids, gifts and dietary needs
- **Active nav underline** — animated underline follows the current scroll section
- Smooth scroll animations and mobile-responsive layout with a hamburger menu

## Project structure

```
├── index.html          # Main page
├── css/
│   └── style.css       # All styles (design tokens, layout, responsive)
├── js/
│   └── main.js         # Translations, countdown, RSVP logic, calendar helpers, FAQ
└── assets/
    └── images/
        ├── hero.jpg    # Hero background photo
        └── logo.png    # Nav logo
```

## Setup

No build step required — open `index.html` directly in a browser or deploy to Netlify.

### Netlify Forms

The RSVP form uses [Netlify Forms](https://docs.netlify.com/forms/setup/) — no backend needed. Submissions appear in the Netlify dashboard under **Forms → rsvp**. The form is detected automatically at deploy time via the `netlify` attribute and `name="rsvp"`.

Guest details (name, adult/child, dietary info) are serialised into a single `guests` field before submission so they appear cleanly in the dashboard.

### Adding photos

Place your couple photos in `assets/images/` and replace the placeholder `<div>` elements in the **Our Story** section of [index.html](index.html) with `<img>` tags pointing to your files.

## Customisation

### Copy & translations

All text is managed in the `translations` object in [js/main.js](js/main.js). Edit the `ca` (Catalan) and `es` (Spanish) keys to update any copy in both languages without touching the HTML.

### Colours & design tokens

All colours, fonts and spacing are CSS custom properties at the top of [css/style.css](css/style.css):

```css
:root {
  --color-bg:           #F6F8F3;
  --color-text:         #1A1C18;
  --color-accent:       #3D4A38;
  /* … */
}
```

### Event details (calendar)

The wedding date and location used for the Save the Date calendar links are defined in `buildGoogleCalendarUrl()` and `buildICSDataUri()` in [js/main.js](js/main.js). Update them if the date or venue changes.

### FAQ content

FAQ questions and answers are defined as translation keys (`faq-1-q`, `faq-1-a`, etc.) in [js/main.js](js/main.js) and rendered in the accordion in [index.html](index.html). Add or remove `<div class="faq-item">` blocks to change the FAQ list.

## Deployment

The site is deployed automatically to Netlify on every push to `main`. Work in progress is kept on the `dev` branch to avoid triggering unnecessary deploys.
