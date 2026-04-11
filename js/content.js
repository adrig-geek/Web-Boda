/* =====================================================
   Èlia & Adrián — Wedding Website
   content.js  ·  Edit this file to update all website text
   ===================================================== */

'use strict';

/* ── Translations ─────────────────────────────────── */
const TRANSLATIONS = {
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
    'countdown-past': 'Ja som casats!',

    // Our Story
    'story-label': 'La nostra història',
    'story-p1': 'Nuestra historia empezó hace 12 años, cuando apenas teníamos 16. Sobrevivir juntos a la adolescencia ya tiene mérito, pero crecer y descubrir el mundo de la mano ha sido, sin duda, la mejor de las aventuras. Por el camino nos hemos convertido en "los mivis", formando un equipo en el que nos complementamos de forma muy natural: Adri es la parte más reflexiva, quien aporta un poco de orden y tiene alma nocturna; mientras que Elia pone la chispa de la improvisación, se deja llevar más por el corazón y es la primera en aprovechar las mañanas. Al final, hemos encontrado nuestro propio equilibrio.',
    'story-p2': 'A lo largo de esta década, hemos construido un día a día a nuestra medida, donde no faltan las partidas a vida o muerte a los juegos de mesa, la buena música y nuestra gran tradición: hacer las maletas cada 4 de marzo para celebrar nuestro aniversario por ciudades como Roma, Londres o Lisboa. Y cuando toca disfrutar en casa, no hay nada que no mejore con nuestro plato estrella: unos buenos espaguetis "a la mivi" (nuestra particular versión de la carbonara).',
    'story-p3': 'Después de todo lo que hemos compartido y construido juntos en este tiempo, casarnos era la pieza que nos faltaba en el tablero. Puede que nuestra historia no sea el guion de una película de Hollywood, pero para nosotros es sencillamente perfecta. Ahora, "los mivis" estamos listos para la partida más importante de todas y nos morimos de ganas de celebrarlo con vosotros.',

    // Event Details
    'details-label':       'On i quan',
    'details-title':       'Els detalls de la celebració',
    'ceremony-label':      'Cerimònia',
    'ceremony-title':      'Diem Sí, ho vull!',
    'ceremony-time':       '13:00 h',
    'ceremony-address':    'Can Ribas de Montbui, Bigues i Riells del Vallès',
    'ceremony-note':       'Us preguem que estigueu al lloc a les <strong>12:30 h</strong>',
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
    'rsvp-cal-label':      'Afegeix-ho a la teva agenda',
    'rsvp-cal-google':     'Google Calendar',
    'rsvp-cal-apple':      'Apple / Outlook',

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

    // RSVP deadline badge
    'deadline-plural':   'Queden {n} dies per confirmar',
    'deadline-singular': 'Queda 1 dia per confirmar',
    'deadline-past':     'El termini de confirmació ha finalitzat',

    // Guest info cards
    'news-label':  'Info & FAQ',
    'news-title':  'Informació pràctica',
    'news-1-title': '¿Cómo llegar?',
    'news-1-body':  'En la Autovía C-17, salid en la Ametlla del Vallès (Salida 3) dirección Bigues i Riells y seguir indicaciones Can Ribas.',
    'news-2-title': '¿Dónde dormir?',
    'news-2-body':  'Existen muchos hoteles cerca de Can Ribas si queréis alojaros. Próximamente daremos más información sobre los que recomendamos 😊',
    'news-3-title': '¿Cómo vestir?',
    'news-3-body':  'Elegante, evitando el color blanco. Tened en cuenta que parte de la celebración será al aire libre.',

    // FAQ
    'faq-heading': 'Preguntes freqüents',
    'faq-1-q': '¿Hay aparcamiento en Can Ribas?',
    'faq-1-a': 'Sí, Can Ribas de Montbui disposa d\'aparcament gratuït per als convidats. Us recomanem arribar uns minuts abans per aparcar còmodament.',
    'faq-2-q': '¿Pueden asistir niños/as?',
    'faq-2-a': 'Sí, los niños son bienvenidos. Si venís con niños, indicadlo en el formulario RSVP para que podamos organizarlo.',
    'faq-3-q': 'Detalles y regalos',
    'faq-3-a': '<strong>Vuestra presencia es nuestro regalo más bonito</strong>, pero si queréis colaborar con nosotros para llenar de recuerdos nuestro viaje, podéis escribirnos:<br>Èlia - 657 499 431<br>Adri - 645 262 348',
    'faq-4-q': '¿Qué pasa si tengo alguna alergia o restricción alimentaria?',
    'faq-4-a': '¡No os preocupéis por nada! Para nosotros vuestra tranquilidad es fundamental, y la cocina de Can Ribas es muy profesional y cuidadosa con este tema. Solo tenéis que indicarlo en el formulario RSVP y el equipo preparará un menú seguro y adaptado para vosotros.',
    'news-1-note': '¿No tienes coche? ¡Contáctanos! Podemos ayudar a organizar alguna alternativa.',

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
    'countdown-past': '¡Ya estamos casados!',

    // Our Story
    'story-label': 'Nuestra historia',
    'story-p1': 'Nuestra historia empezó hace 12 años, cuando apenas teníamos 16. Sobrevivir juntos a la adolescencia ya tiene mérito, pero crecer y descubrir el mundo de la mano ha sido, sin duda, la mejor de las aventuras. Por el camino nos hemos convertido en "los mivis", formando un equipo en el que nos complementamos de forma muy natural: Adri es la parte más reflexiva, quien aporta un poco de orden y tiene alma nocturna; mientras que Elia pone la chispa de la improvisación, se deja llevar más por el corazón y es la primera en aprovechar las mañanas. Al final, hemos encontrado nuestro propio equilibrio.',
    'story-p2': 'A lo largo de esta década, hemos construido un día a día a nuestra medida, donde no faltan las partidas a vida o muerte a los juegos de mesa, la buena música y nuestra gran tradición: hacer las maletas cada 4 de marzo para celebrar nuestro aniversario por ciudades como Roma, Londres o Lisboa. Y cuando toca disfrutar en casa, no hay nada que no mejore con nuestro plato estrella: unos buenos espaguetis "a la mivi" (nuestra particular versión de la carbonara).',
    'story-p3': 'Después de todo lo que hemos compartido y construido juntos en este tiempo, casarnos era la pieza que nos faltaba en el tablero. Puede que nuestra historia no sea el guion de una película de Hollywood, pero para nosotros es sencillamente perfecta. Ahora, "los mivis" estamos listos para la partida más importante de todas y nos morimos de ganas de celebrarlo con vosotros.',

    // Event Details
    'details-label':       'Dónde y cuándo',
    'details-title':       'Los detalles de la celebración',
    'ceremony-label':      'Ceremonia',
    'ceremony-title':      'Decimos ¡Sí, quiero!',
    'ceremony-time':       '13:00 h',
    'ceremony-address':    'Can Ribas de Montbui, Bigues i Riells del Vallès',
    'ceremony-note':       'Os pedimos que estéis en el lugar a las <strong>12:30 h</strong>',
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
    'rsvp-cal-label':      'Añádelo a tu agenda',
    'rsvp-cal-google':     'Google Calendar',
    'rsvp-cal-apple':      'Apple / Outlook',

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

    // RSVP deadline badge
    'deadline-plural':   'Quedan {n} días para confirmar',
    'deadline-singular': 'Queda 1 día para confirmar',
    'deadline-past':     'El plazo de confirmación ha finalizado',

    // Guest info cards
    'news-label':  'Info & FAQ',
    'news-title':  'Información práctica',
    'news-1-title': '¿Cómo llegar?',
    'news-1-body':  'En la Autovía C-17, salid en la Ametlla del Vallès (Salida 3) dirección Bigues i Riells y seguir indicaciones Can Ribas.',
    'news-2-title': '¿Dónde dormir?',
    'news-2-body':  'Existen muchos hoteles cerca de Can Ribas si queréis alojaros. Próximamente daremos más información sobre los que recomendamos 😊',
    'news-3-title': '¿Cómo vestir?',
    'news-3-body':  'Elegante, evitando el color blanco. Tened en cuenta que parte de la celebración será al aire libre.',

    // FAQ
    'faq-heading': 'Preguntas frecuentes',
    'faq-1-q': '¿Hay aparcamiento en Can Ribas?',
    'faq-1-a': 'Sí, Can Ribas de Montbui dispone de aparcamiento gratuito para los invitados. Os recomendamos llegar unos minutos antes para aparcar cómodamente.',
    'faq-2-q': '¿Pueden asistir niños/as?',
    'faq-2-a': 'Sí, los niños son bienvenidos. Si venís con niños, indicadlo en el formulario RSVP para que podamos organizarlo.',
    'faq-3-q': 'Detalles y regalos',
    'faq-3-a': '<strong>Vuestra presencia es nuestro regalo más bonito</strong>, pero si queréis colaborar con nosotros para llenar de recuerdos nuestro viaje, podéis escribirnos:<br>Èlia - 657 499 431<br>Adri - 645 262 348',
    'faq-4-q': '¿Qué pasa si tengo alguna alergia o restricción alimentaria?',
    'faq-4-a': '¡No os preocupéis por nada! Para nosotros vuestra tranquilidad es fundamental, y la cocina de Can Ribas es muy profesional y cuidadosa con este tema. Solo tenéis que indicarlo en el formulario RSVP y el equipo preparará un menú seguro y adaptado para vosotros.',
    'news-1-note': '¿No tienes coche? ¡Contáctanos! Podemos ayudar a organizar alguna alternativa.',

    // Footer
    'footer-info': '12 de septiembre de 2027 · Can Ribas de Montbui, Bigues i Riells',
  }
};

/* ── Story photos ──────────────────────────────────────
 * ★ Add or remove filenames here (up to 10).
 *   Drop the image files into assets/images/story/
 *   The filmstrip builds itself from this list.
 * ─────────────────────────────────────────────────── */
const STORY_PHOTOS = [
  'assets/images/story/photo1.jpg',
  'assets/images/story/photo2.jpg',
  'assets/images/story/photo3.jpg',
  'assets/images/story/photo4.jpg',
  'assets/images/story/photo5.jpg',
  'assets/images/story/photo6.jpg',
  // 'assets/images/story/photo7.jpg',
  // 'assets/images/story/photo8.jpg',
  // 'assets/images/story/photo9.jpg',
  // 'assets/images/story/photo10.jpg',
];
