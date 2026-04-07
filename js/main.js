/* =====================================================
   Èlia & Adrián — Wedding Website
   main.js
   ===================================================== */

'use strict';

/* ── Translations ─────────────────────────────────── */
const translations = {
  ca: {
    // Nav
    'nav-story':    'La Nostra Història',
    'nav-details':  'Detalls',
    'nav-rsvp':     'RSVP',
    'nav-timeline': 'Programa',
    'nav-news':     'Novetats',
    'lang-btn':     'ES',

    // Hero
    'hero-eyebrow': 'Us convidem al nostre casament',
    'hero-date':    '12 de setembre de 2027',
    'hero-venue':   'Can Ribas de Montbui · Bigues i Riells',
    'countdown-days':    'Dies',
    'countdown-hours':   'Hores',
    'countdown-minutes': 'Minuts',
    'countdown-seconds': 'Segons',
    'scroll-cue':   'Descobreix',
    'countdown-past': 'Ja som casats!',

    // Our Story
    'story-label':    'La nostra història',
    'story-title':    'Com va començar tot',
    'story-p1': 'Aquí podeu escriure la vostra història: on us vàreu conèixer, quin va ser el primer moment especial, com va créixer l\'amor entre vosaltres.',
    'story-p2': 'Cada parella té una història única i especial. Compartiu els moments que us han portat fins aquí, i que faran que els vostres convidats se sentin part de la vostra aventura.',
    'story-p3': 'Gràcies per ser part del nostre dia més especial.',
    'story-photo-1': 'Foto 1',
    'story-photo-2': 'Foto 2',

    // Event Details
    'details-label':       'On i quan',
    'details-title':       'Els detalls de la celebració',
    'ceremony-label':      'Cerimònia',
    'ceremony-title':      'L\'Enllaç',
    'ceremony-time':       '13:00 h',
    'ceremony-address':    'Can Ribas de Montbui, Bigues i Riells del Vallès',
    'ceremony-note':       'Us preguem que estigueu al lloc a les 12:30 h',
    'reception-label':     'Celebració',
    'reception-title':     'El Banquet',
    'reception-time':      '14:00 h',
    'reception-address':   'Can Ribas de Montbui, Bigues i Riells del Vallès',
    'reception-note':      'Dinar, ball i molt més per celebrar!',
    'map-btn':             'Veure al mapa',

    // RSVP
    'rsvp-label':          'Confirmació',
    'rsvp-title':          'Confirmeu la vostra assistència',
    'rsvp-intro':          'Si us plau, confirmeu la vostra assistència abans del 12 de juny de 2027.',
    'rsvp-name-label':     'Nom i cognoms',
    'rsvp-name-ph':        'El vostre nom complet',
    'rsvp-att-label':      'Assistireu?',
    'rsvp-att-yes':        'Sí, hi aniré',
    'rsvp-att-no':         'No podré assistir',
    'rsvp-guests-label':   'Persones que assistiran',
    'rsvp-add-guest':      'Afegir persona',
    'rsvp-guest-name-ph':  'Nom complet',
    'rsvp-guest-adult':    'Adult',
    'rsvp-guest-child':    'Nen/a',
    'rsvp-dietary-label':  'Al·lèrgies o restriccions alimentàries',
    'rsvp-dietary-ph':     'Intoleràncies, al·lèrgies, vegetarià, etc.',
    'rsvp-message-label':  'Missatge per als nuvis',
    'rsvp-message-ph':     'Deixeu-nos un missatge!',
    'rsvp-submit':         'Confirmar assistència',
    'rsvp-success-title':  'Moltes gràcies!',
    'rsvp-success-text':   'Hem rebut la vostra confirmació. Us esperem!',

    // Timeline
    'timeline-label':      'El dia',
    'timeline-title':      'El programa',
    'tl-0-title':  'Obertura de portes',
    'tl-0-desc':   'Rebuda i benvinguda als convidats',
    'tl-1-title':  'Diem sí, vull!',
    'tl-1-desc':   'La cerimònia',
    'tl-2-title':  'Aperitiu',
    'tl-2-desc':   'Còctel al jardí',
    'tl-3-title':  'A dinar!',
    'tl-3-desc':   'Menú de celebració',
    'tl-4-title':  'A ballar!',
    'tl-4-desc':   'Música i ball fins a la matinada',

    // News
    'news-label':  'Novetats',
    'news-title':  'Informació per als convidats',
    'news-1-date':  'Febrer 2027',
    'news-1-title': 'Transport des de Barcelona',
    'news-1-body':  'Organitzem autobusos d\'anada i tornada des de Barcelona. Aviat us donarem més informació sobre horaris i punts de recollida.',
    'news-2-date':  'Gener 2027',
    'news-2-title': 'Allotjament recomanat',
    'news-2-body':  'Hem reservat blocs d\'habitacions en hotels propers. Poseu-vos en contacte amb nosaltres si necessiteu ajuda per trobar allotjament.',
    'news-3-date':  'Desembre 2026',
    'news-3-title': 'Codi de vestimenta',
    'news-3-body':  'L\'estil és elegant però còmode. Tingueu en compte que la celebració es farà en part a l\'aire lliure.',

    // Footer
    'footer-info': '12 de setembre de 2027 · Can Ribas de Montbui, Bigues i Riells',
  },

  es: {
    // Nav
    'nav-story':    'Nuestra Historia',
    'nav-details':  'Detalles',
    'nav-rsvp':     'RSVP',
    'nav-timeline': 'Programa',
    'nav-news':     'Novedades',
    'lang-btn':     'CA',

    // Hero
    'hero-eyebrow': 'Os invitamos a nuestra boda',
    'hero-date':    '12 de septiembre de 2027',
    'hero-venue':   'Can Ribas de Montbui · Bigues i Riells',
    'countdown-days':    'Días',
    'countdown-hours':   'Horas',
    'countdown-minutes': 'Minutos',
    'countdown-seconds': 'Segundos',
    'scroll-cue':   'Descubre',
    'countdown-past': '¡Ya estamos casados!',

    // Our Story
    'story-label':    'Nuestra historia',
    'story-title':    'Cómo empezó todo',
    'story-p1': 'Aquí podéis escribir vuestra historia: dónde os conocisteis, cuál fue el primer momento especial, cómo fue creciendo el amor entre vosotros.',
    'story-p2': 'Cada pareja tiene una historia única y especial. Compartid los momentos que os han traído hasta aquí, y que harán que vuestros invitados se sientan parte de vuestra aventura.',
    'story-p3': 'Gracias por ser parte de nuestro día más especial.',
    'story-photo-1': 'Foto 1',
    'story-photo-2': 'Foto 2',

    // Event Details
    'details-label':       'Dónde y cuándo',
    'details-title':       'Los detalles de la celebración',
    'ceremony-label':      'Ceremonia',
    'ceremony-title':      'El Enlace',
    'ceremony-time':       '13:00 h',
    'ceremony-address':    'Can Ribas de Montbui, Bigues i Riells del Vallès',
    'ceremony-note':       'Os pedimos que estéis en el lugar a las 12:30 h',
    'reception-label':     'Celebración',
    'reception-title':     'El Banquete',
    'reception-time':      '14:00 h',
    'reception-address':   'Can Ribas de Montbui, Bigues i Riells del Vallès',
    'reception-note':      '¡Comida, baile y mucho más para celebrar!',
    'map-btn':             'Ver en el mapa',

    // RSVP
    'rsvp-label':          'Confirmación',
    'rsvp-title':          'Confirmad vuestra asistencia',
    'rsvp-intro':          'Por favor, confirmad vuestra asistencia antes del 12 de junio de 2027.',
    'rsvp-name-label':     'Nombre y apellidos',
    'rsvp-name-ph':        'Vuestro nombre completo',
    'rsvp-att-label':      '¿Asistiréis?',
    'rsvp-att-yes':        'Sí, asistiré',
    'rsvp-att-no':         'No podré asistir',
    'rsvp-guests-label':   'Personas que asistirán',
    'rsvp-add-guest':      'Añadir persona',
    'rsvp-guest-name-ph':  'Nombre completo',
    'rsvp-guest-adult':    'Adulto',
    'rsvp-guest-child':    'Niño/a',
    'rsvp-dietary-label':  'Alergias o restricciones alimentarias',
    'rsvp-dietary-ph':     'Intolerancias, alergias, vegetariano, etc.',
    'rsvp-message-label':  'Mensaje para los novios',
    'rsvp-message-ph':     '¡Dejadnos un mensaje!',
    'rsvp-submit':         'Confirmar asistencia',
    'rsvp-success-title':  '¡Muchas gracias!',
    'rsvp-success-text':   'Hemos recibido vuestra confirmación. ¡Os esperamos!',

    // Timeline
    'timeline-label':      'El día',
    'timeline-title':      'El programa',
    'tl-0-title':  'Apertura de puertas',
    'tl-0-desc':   'Bienvenida a los invitados',
    'tl-1-title':  '¡Decimos sí, quiero!',
    'tl-1-desc':   'La ceremonia',
    'tl-2-title':  'Aperitivo',
    'tl-2-desc':   'Cóctel en el jardín',
    'tl-3-title':  '¡A comer!',
    'tl-3-desc':   'Menú de celebración',
    'tl-4-title':  '¡A bailar!',
    'tl-4-desc':   'Música y baile hasta la madrugada',

    // News
    'news-label':  'Novedades',
    'news-title':  'Información para los invitados',
    'news-1-date':  'Febrero 2027',
    'news-1-title': 'Transporte desde Barcelona',
    'news-1-body':  'Organizamos autobuses de ida y vuelta desde Barcelona. Pronto os daremos más información sobre horarios y puntos de recogida.',
    'news-2-date':  'Enero 2027',
    'news-2-title': 'Alojamiento recomendado',
    'news-2-body':  'Hemos reservado bloques de habitaciones en hoteles cercanos. Poneos en contacto con nosotros si necesitáis ayuda para encontrar alojamiento.',
    'news-3-date':  'Diciembre 2026',
    'news-3-title': 'Código de vestimenta',
    'news-3-body':  'El estilo es elegante pero cómodo. Tened en cuenta que la celebración se realizará en parte al aire libre.',

    // Footer
    'footer-info': '12 de septiembre de 2027 · Can Ribas de Montbui, Bigues i Riells',
  }
};

/* ── Language System ──────────────────────────────── */
let currentLang = localStorage.getItem('wedding-lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('wedding-lang', lang);

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (translations[lang][key] !== undefined) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Refresh dynamically generated guest row labels
  if (window._refreshGuestLabels) window._refreshGuestLabels();

  // Update lang toggle button appearance
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = translations[lang]['lang-btn'];
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

/* ── Countdown Timer ──────────────────────────────── */
function initCountdown() {
  const weddingDate = new Date('2027-09-12T12:30:00');
  const daysEl    = document.getElementById('cd-days');
  const hoursEl   = document.getElementById('cd-hours');
  const minsEl    = document.getElementById('cd-minutes');
  const secsEl    = document.getElementById('cd-seconds');
  const countdownEl = document.querySelector('.countdown');

  if (!daysEl) return;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function update() {
    const now  = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      // Wedding has passed
      if (countdownEl) {
        countdownEl.innerHTML = `<p class="countdown-past" data-i18n="countdown-past">${translations[currentLang]['countdown-past']}</p>`;
      }
      clearInterval(timer);
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent    = pad(days);
    hoursEl.textContent   = pad(hours);
    minsEl.textContent    = pad(minutes);
    secsEl.textContent    = pad(seconds);
  }

  update();
  const timer = setInterval(update, 1000);
}

/* ── Scroll Animations ────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ── Mobile Navigation ────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('nav-overlay');

  if (!hamburger || !overlay) return;

  function openNav() {
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    if (document.body.classList.contains('nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
}

/* ── RSVP Form ────────────────────────────────────── */
function initRSVPForm() {
  const form        = document.getElementById('rsvp-form');
  const successEl   = document.getElementById('rsvp-success');
  const guestsField = document.getElementById('guests-field');
  const guestRows   = document.getElementById('guest-rows');
  const addGuestBtn = document.getElementById('add-guest-btn');
  const submitBtn   = form?.querySelector('.submit-btn');

  if (!form) return;

  let guestCount = 0;

  function t(key) {
    return translations[currentLang][key] || key;
  }

  function addGuestRow() {
    guestCount++;
    const index = guestCount;
    const row = document.createElement('div');
    row.className = 'guest-row';
    row.dataset.index = index;

    row.innerHTML = `
      <div class="guest-row-top">
        <input
          type="text"
          name="guest_${index}_name"
          placeholder="${t('rsvp-guest-name-ph')}"
          required
        />
        <div class="guest-type-toggle">
          <label class="guest-type-option">
            <input type="radio" name="guest_${index}_type" value="adult" checked />
            <span class="guest-label-adult">${t('rsvp-guest-adult')}</span>
          </label>
          <label class="guest-type-option">
            <input type="radio" name="guest_${index}_type" value="child" />
            <span class="guest-label-child">${t('rsvp-guest-child')}</span>
          </label>
        </div>
        <button type="button" class="remove-guest-btn" aria-label="Eliminar">×</button>
      </div>
      <div class="guest-row-dietary">
        <input
          type="text"
          name="guest_${index}_dietary"
          placeholder="${t('rsvp-dietary-ph')}"
        />
      </div>
    `;

    row.querySelector('.remove-guest-btn').addEventListener('click', () => {
      row.remove();
      // If no rows left, add one back
      if (guestRows.children.length === 0) addGuestRow();
    });

    guestRows.appendChild(row);
  }

  function refreshGuestLabels() {
    // Update placeholder and type labels when language changes
    guestRows.querySelectorAll('.guest-row').forEach(row => {
      const nameInput = row.querySelector('.guest-row-top input[type="text"]');
      if (nameInput) nameInput.placeholder = t('rsvp-guest-name-ph');
      const dietaryInput = row.querySelector('.guest-row-dietary input[type="text"]');
      if (dietaryInput) dietaryInput.placeholder = t('rsvp-dietary-ph');
      const adultSpan = row.querySelector('.guest-label-adult');
      if (adultSpan) adultSpan.textContent = t('rsvp-guest-adult');
      const childSpan = row.querySelector('.guest-label-child');
      if (childSpan) childSpan.textContent = t('rsvp-guest-child');
    });
    const addSpan = addGuestBtn?.querySelector('[data-i18n="rsvp-add-guest"]');
    if (addSpan) addSpan.textContent = t('rsvp-add-guest');
  }

  // Expose so applyLanguage can call it
  window._refreshGuestLabels = refreshGuestLabels;

  // Show/hide guest list based on attendance
  form.querySelectorAll('input[name="attendance"]').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'yes') {
        guestsField?.classList.add('visible');
        if (guestRows.children.length === 0) addGuestRow();
      } else {
        guestsField?.classList.remove('visible');
      }
    });
  });

  // Add guest button
  addGuestBtn?.addEventListener('click', addGuestRow);

  // AJAX submission via Netlify Forms
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '...';
    }

    // Serialize guest rows into the hidden textarea before submitting
    const guestsTextarea = form.querySelector('textarea[name="guests"]');
    if (guestsTextarea) {
      const rows = [...guestRows.querySelectorAll('.guest-row')];
      if (rows.length) {
        guestsTextarea.value = rows.map((row, i) => {
          const name    = row.querySelector('input[type="text"]')?.value || '';
          const type    = row.querySelector('input[type="radio"]:checked')?.value || '';
          const dietary = row.querySelector('.guest-row-dietary input')?.value || '';
          return `${i + 1}. ${name} (${type})${dietary ? ' — ' + dietary : ''}`;
        }).join('\n');
      } else {
        guestsTextarea.value = '';
      }
    }

    try {
      const data = new URLSearchParams(new FormData(form)).toString();
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successEl) successEl.classList.add('visible');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = t('rsvp-submit');
      }
      alert(currentLang === 'ca'
        ? 'Hi ha hagut un error. Si us plau, torneu-ho a intentar.'
        : 'Ha habido un error. Por favor, intentadlo de nuevo.'
      );
    }
  });
}

/* ── Active Nav Link on Scroll ────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--color-text)';
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Init ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCountdown();
  initScrollAnimations();
  initMobileNav();
  initRSVPForm();
  initActiveNav();
});
