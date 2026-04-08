/* =====================================================
   Èlia & Adrián — Wedding Website
   main.js  ·  Entry point — calls all init functions
              (all logic lives in the files below)

   Load order in index.html:
     content.js  → translations
     lang.js     → language switching
     countdown.js → countdown timer
     calendar.js  → Google Calendar / .ics helpers
     rsvp.js      → RSVP form & deadline badge
     ui.js        → scroll, nav, FAQ, timeline
     main.js      → this file (init)
   ===================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCountdown();
  initDeadlineBadge();
  initScrollAnimations();
  initMobileNav();
  initRSVPForm();
  initActiveNav();
  initFAQ();
  equalizeTimelineSlots();
  window.addEventListener('resize', equalizeTimelineSlots);
});
