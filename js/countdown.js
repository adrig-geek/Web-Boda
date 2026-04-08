/* =====================================================
   Èlia & Adrián — Wedding Website
   countdown.js  ·  Live countdown to the wedding date
   ===================================================== */

'use strict';

function initCountdown() {
  const weddingDate = new Date('2027-09-12T12:30:00');
  const daysEl      = document.getElementById('cd-days');
  const hoursEl     = document.getElementById('cd-hours');
  const minsEl      = document.getElementById('cd-minutes');
  const secsEl      = document.getElementById('cd-seconds');
  const countdownEl = document.querySelector('.countdown');

  if (!daysEl) return;

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function update() {
    const now  = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      if (countdownEl) {
        countdownEl.innerHTML = `<p class="countdown-past" data-i18n="countdown-past">${TRANSLATIONS[currentLang]['countdown-past']}</p>`;
      }
      clearInterval(timer);
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent  = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent  = pad(minutes);
    secsEl.textContent  = pad(seconds);
  }

  update();
  const timer = setInterval(update, 1000);
}
