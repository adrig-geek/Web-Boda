# Èlia & Adrián — Wedding Website

Static wedding website for Èlia & Adrián's wedding on **12 September 2027** at Can Ribas de Montbui, Bigues i Riells del Vallès.

## Features

- **Bilingual** — Catalan / Spanish toggle, persisted via `localStorage`
- **Live countdown** to the wedding date
- **RSVP form** with dynamic guest list (name, adult/child, dietary needs), submitted via Formspree
- **Programme / timeline** of the day's events
- **Guest information** cards (transport, accommodation, dress code)
- Smooth scroll animations and mobile-responsive layout with a hamburger menu

## Project structure

```
├── index.html          # Main page
├── css/
│   └── style.css       # All styles (design tokens, layout, responsive)
├── js/
│   └── main.js         # Translations, countdown, RSVP logic, animations
└── assets/
    └── images/
        ├── hero.jpg    # Hero background photo
        └── logo.png    # Nav logo
```

## Setup

No build step required — open `index.html` directly in a browser or serve with any static file server.

### RSVP form

The form submits to [Formspree](https://formspree.io). Replace `YOUR_FORM_ID` in `index.html` with your actual Formspree form ID:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" ...>
```

### Adding photos

Place your couple photos in `assets/images/` and replace the placeholder `<div>` elements in the **Our Story** section of `index.html` with `<img>` tags pointing to your files.

## Customisation

All text content is managed through the translations object in [js/main.js](js/main.js). Edit the `ca` and `es` keys to update copy in both languages without touching the HTML.

Design tokens (colours, fonts, spacing) are defined as CSS custom properties at the top of [css/style.css](css/style.css).
