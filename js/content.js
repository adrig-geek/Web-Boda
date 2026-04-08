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
    'story-label':    'La nostra història',
    'story-title':    'Com va començar tot',
    'story-p1': 'Aquí podeu escriure la vostra història: on us vàreu conèixer, quin va ser el primer moment especial, com va créixer l\'amor entre vosaltres.',
    'story-p2': 'Cada parella té una història única i especial. Compartiu els moments que us han portat fins aquí, i que faran que els vostres convidats se sentin part de la vostra aventura.',
    'story-p3': 'Gràcies per ser part del nostre dia més especial.',

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
    'news-1-title': 'Transport des de Barcelona',
    'news-1-body':  'Organitzem autobusos d\'anada i tornada des de Barcelona. Aviat us donarem més informació sobre horaris i punts de recollida.',
    'news-2-title': 'Allotjament recomanat',
    'news-2-body':  'Hem reservat blocs d\'habitacions en hotels propers. Poseu-vos en contacte amb nosaltres si necessiteu ajuda per trobar allotjament.',
    'news-3-title': 'Codi de vestimenta',
    'news-3-body':  'L\'estil és elegant però còmode. Tingueu en compte que la celebració es farà en part a l\'aire lliure.',
    'info-transport-chip': 'Anada i tornada inclosa',
    'info-hotel-chip':     'Preu especial per a convidats',
    'info-dress-chip':     'Elegant · Còmode · Exterior',

    // FAQ
    'faq-heading': 'Preguntes freqüents',
    'faq-1-q': 'Hi ha aparcament al lloc?',
    'faq-1-a': 'Sí, Can Ribas de Montbui disposa d\'aparcament gratuït per als convidats. Us recomanem arribar uns minuts abans per aparcar còmodament.',
    'faq-2-q': 'Els nens hi poden assistir?',
    'faq-2-a': 'Sí, els nens són benvinguts. Si veniu amb infants, indiqueu-ho al formulari RSVP per poder organitzar-nos millor.',
    'faq-3-q': 'Quina és la llista de noces?',
    'faq-3-a': 'La vostra presència ja és el millor regal. Si voleu fer-nos un obsequi, tenim una llista de noces — contacteu-nos i us enviarem els detalls.',
    'faq-4-q': 'Hi ha restriccions alimentàries?',
    'faq-4-a': 'Indiqueu qualsevol al·lèrgia o restricció alimentària al formulari RSVP i el cuiner en tindrà cura.',

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
    'story-label':    'Nuestra historia',
    'story-title':    'Cómo empezó todo',
    'story-p1': 'Aquí podéis escribir vuestra historia: dónde os conocisteis, cuál fue el primer momento especial, cómo fue creciendo el amor entre vosotros.',
    'story-p2': 'Cada pareja tiene una historia única y especial. Compartid los momentos que os han traído hasta aquí, y que harán que vuestros invitados se sientan parte de vuestra aventura.',
    'story-p3': 'Gracias por ser parte de nuestro día más especial.',

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
    'news-1-title': 'Transporte desde Barcelona',
    'news-1-body':  'Organizamos autobuses de ida y vuelta desde Barcelona. Pronto os daremos más información sobre horarios y puntos de recogida.',
    'news-2-title': 'Alojamiento recomendado',
    'news-2-body':  'Hemos reservado bloques de habitaciones en hoteles cercanos. Poneos en contacto con nosotros si necesitáis ayuda para encontrar alojamiento.',
    'news-3-title': 'Código de vestimenta',
    'news-3-body':  'El estilo es elegante pero cómodo. Tened en cuenta que la celebración se realizará en parte al aire libre.',
    'info-transport-chip': 'Ida y vuelta incluida',
    'info-hotel-chip':     'Precio especial para invitados',
    'info-dress-chip':     'Elegante · Cómodo · Exterior',

    // FAQ
    'faq-heading': 'Preguntas frecuentes',
    'faq-1-q': '¿Hay aparcamiento en el lugar?',
    'faq-1-a': 'Sí, Can Ribas de Montbui dispone de aparcamiento gratuito para los invitados. Os recomendamos llegar unos minutos antes para aparcar cómodamente.',
    'faq-2-q': '¿Pueden asistir los niños?',
    'faq-2-a': 'Sí, los niños son bienvenidos. Si venís con niños, indicadlo en el formulario RSVP para que podamos organizarnos mejor.',
    'faq-3-q': '¿Cuál es la lista de bodas?',
    'faq-3-a': 'Vuestra presencia ya es el mejor regalo. Si queréis hacernos un obsequio, tenemos lista de bodas — contactadnos y os enviaremos los detalles.',
    'faq-4-q': '¿Hay restricciones alimentarias?',
    'faq-4-a': 'Indicad cualquier alergia o restricción alimentaria en el formulario RSVP y el cocinero lo tendrá en cuenta.',

    // Footer
    'footer-info': '12 de septiembre de 2027 · Can Ribas de Montbui, Bigues i Riells',
  }
};
