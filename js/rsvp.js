/* =====================================================
   Èlia & Adrián — Wedding Website
   rsvp.js  ·  RSVP form, guest rows & deadline badge
              (depends on lang.js and calendar.js)
   ===================================================== */

'use strict';

/* ── RSVP form ────────────────────────────────────── */
function initRSVPForm() {
  const form        = document.getElementById('rsvp-form');
  const successEl   = document.getElementById('rsvp-success');
  const calendarEl  = document.getElementById('rsvp-calendar');
  const calGoogle   = document.getElementById('cal-google');
  const calIcs      = document.getElementById('cal-ics');
  const guestsField = document.getElementById('guests-field');
  const guestRows   = document.getElementById('guest-rows');
  const addGuestBtn = document.getElementById('add-guest-btn');
  const submitBtn   = form?.querySelector('.submit-btn');
  const childNotice = document.getElementById('child-notice');

  if (!form) return;

  let guestCount = 0;
  let attending  = false;

  /* ── Show notice if any guest is marked as child ─── */
  function checkChildNotice() {
    if (!childNotice) return;
    const hasChild = guestRows.querySelector('input[type="radio"][value="child"]:checked') !== null;
    childNotice.classList.toggle('hidden', !hasChild);
  }

  function t(key) {
    return TRANSLATIONS[currentLang][key] || key;
  }

  /* ── Guest row creation ─────────────────────────── */
  function addGuestRow() {
    guestCount++;
    const index = guestCount;
    const row   = document.createElement('div');
    row.className    = 'guest-row';
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

    row.querySelectorAll('input[type="radio"]').forEach(r => {
      r.addEventListener('change', checkChildNotice);
    });

    row.querySelector('.remove-guest-btn').addEventListener('click', () => {
      row.remove();
      if (guestRows.children.length === 0) addGuestRow();
      checkChildNotice();
    });

    guestRows.appendChild(row);
  }

  /* ── Re-translate dynamic guest rows on lang change */
  function refreshGuestLabels() {
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

  // Expose hook so applyLanguage (lang.js) can call it
  window._refreshGuestLabels = refreshGuestLabels;

  /* ── Show/hide guest list on attendance change ──── */
  form.querySelectorAll('input[name="attendance"]').forEach(radio => {
    radio.addEventListener('change', () => {
      attending = radio.value === 'yes';
      if (attending) {
        guestsField?.classList.add('visible');
        if (guestRows.children.length === 0) addGuestRow();
      } else {
        guestsField?.classList.remove('visible');
      }
    });
  });

  addGuestBtn?.addEventListener('click', addGuestRow);

  /* ── AJAX submission to Netlify Forms ───────────── */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled    = true;
      submitBtn.textContent = '...';
    }

    // Re-index guest fields sequentially (fixes gaps from mid-form deletions)
    const rows = [...guestRows.querySelectorAll('.guest-row')];
    rows.forEach((row, i) => {
      const n = i + 1;
      const nameInput    = row.querySelector('input[type="text"]');
      const typeRadios   = row.querySelectorAll('input[type="radio"]');
      const dietaryInput = row.querySelector('.guest-row-dietary input');
      if (nameInput)    nameInput.name    = `guest_${n}_name`;
      typeRadios.forEach(r => r.name     = `guest_${n}_type`);
      if (dietaryInput) dietaryInput.name = `guest_${n}_dietary`;
    });

    // Set guest_count and has_children hidden fields
    const countField    = document.getElementById('guest-count-field');
    const childrenField = document.getElementById('has-children-field');
    if (countField)    countField.value    = rows.length;
    if (childrenField) childrenField.value =
      rows.some(r => r.querySelector('input[value="child"]:checked')) ? 'Sí' : 'No';

    // Serialise guests into a readable pipe-separated table for Netlify email
    const guestsTextarea = form.querySelector('textarea[name="guests"]');
    if (guestsTextarea) {
      if (rows.length) {
        const header  = 'Nombre                  | Tipo    | Dieta';
        const divider = '-'.repeat(24) + '+' + '-'.repeat(9) + '+' + '-'.repeat(22);
        const lines   = rows.map(row => {
          const name    = (row.querySelector('input[type="text"]')?.value || '').padEnd(23);
          const isChild = row.querySelector('input[value="child"]:checked') !== null;
          const type    = (isChild ? 'Niño/a' : 'Adulto').padEnd(7);
          const dietary = row.querySelector('.guest-row-dietary input')?.value || '-';
          return `${name} | ${type} | ${dietary}`;
        });
        guestsTextarea.value = [header, divider, ...lines].join('\n');
      } else {
        guestsTextarea.value = '';
      }
    }

    try {
      const data = new URLSearchParams(new FormData(form)).toString();
      const response = await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    data,
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successEl) successEl.classList.add('visible');
        if (attending && calendarEl && calGoogle && calIcs) {
          calGoogle.href = buildGoogleCalendarUrl(currentLang);
          calIcs.href    = buildICSDataUri(currentLang);
          calendarEl.classList.remove('hidden');
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.disabled    = false;
        submitBtn.textContent = t('rsvp-submit');
      }
      alert(currentLang === 'ca'
        ? 'Hi ha hagut un error. Si us plau, torneu-ho a intentar.'
        : 'Ha habido un error. Por favor, intentadlo de nuevo.'
      );
    }
  });
}

/* ── RSVP deadline badge ──────────────────────────── */
function initDeadlineBadge() {
  const badge = document.getElementById('rsvp-deadline-badge');
  if (!badge) return;

  const deadline = new Date('2027-06-12T23:59:59');

  function update() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      badge.textContent = TRANSLATIONS[currentLang]['deadline-past'] || '';
      badge.className   = 'rsvp-deadline-badge rsvp-deadline-urgent';
      return;
    }
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const key  = days === 1 ? 'deadline-singular' : 'deadline-plural';
    const tpl  = TRANSLATIONS[currentLang][key] || '';
    badge.textContent = tpl.replace('{n}', days);
    badge.className   = days <= 14
      ? 'rsvp-deadline-badge rsvp-deadline-urgent'
      : 'rsvp-deadline-badge';
  }

  update();
  setInterval(update, 60000);
  window._refreshDeadlineBadge = update;
}
