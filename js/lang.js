/* =====================================================
   Èlia & Adrián — Wedding Website
   lang.js  ·  Language switching (depends on content.js)
   ===================================================== */

'use strict';

let currentLang = localStorage.getItem('wedding-lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('wedding-lang', lang);

  document.documentElement.lang = lang;

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.setAttribute('aria-label', TRANSLATIONS[lang][key]);
    }
  });

  // Refresh any dynamically generated UI that caches translations
  if (window._refreshGuestLabels)  window._refreshGuestLabels();
  if (window._refreshDeadlineBadge) window._refreshDeadlineBadge();

  // Update the language toggle button label
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = TRANSLATIONS[lang]['lang-btn'];
    langBtn.setAttribute('aria-label',
      lang === 'ca' ? 'Canvia l\'idioma a Espanyol' : 'Cambiar idioma a Català'
    );
  }
}

function initLanguage() {
  applyLanguage(currentLang);

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLanguage(currentLang === 'ca' ? 'es' : 'ca');
  });
}
