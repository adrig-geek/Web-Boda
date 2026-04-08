/* =====================================================
   Èlia & Adrián — Wedding Website
   calendar.js  ·  Google Calendar URL & .ics file helpers
   ===================================================== */

'use strict';

/**
 * Returns a pre-filled Google Calendar event URL.
 * @param {string} lang — 'ca' or 'es'
 */
function buildGoogleCalendarUrl(lang) {
  const title    = encodeURIComponent('Casament Èlia & Adrián');
  const location = encodeURIComponent('Can Ribas de Montbui, Bigues i Riells del Vallès');
  const details  = encodeURIComponent(
    lang === 'ca'
      ? 'Us esperem al nostre casament! · Cerimònia a les 13:00 h'
      : '¡Os esperamos en nuestra boda! · Ceremonia a las 13:00 h'
  );
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270912T110000Z/20270912T210000Z&details=${details}&location=${location}`;
}

/**
 * Returns a data: URI for a .ics file that Apple Calendar / Outlook can import.
 * @param {string} lang — 'ca' or 'es'
 */
function buildICSDataUri(lang) {
  const description = lang === 'ca'
    ? 'Us esperem al nostre casament! Cerimònia a les 13:00 h.'
    : '¡Os esperamos en nuestra boda! Ceremonia a las 13:00 h.';

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Elia & Adrian Wedding//EN',
    'BEGIN:VEVENT',
    'UID:casament-elia-adrian-2027@boda',
    'DTSTAMP:20260407T000000Z',
    'DTSTART:20270912T110000Z',
    'DTEND:20270912T210000Z',
    'SUMMARY:Casament Èlia & Adrián',
    `DESCRIPTION:${description}`,
    'LOCATION:Can Ribas de Montbui\\, Bigues i Riells del Vallès',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return 'data:text/calendar;charset=utf8,' + encodeURIComponent(ics);
}
