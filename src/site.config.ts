// Zentrale Angaben, die auf mehreren Seiten und in den strukturierten Daten vorkommen.
// Hier ändern, nicht in den einzelnen Seiten.

// Vorschau-Build (PUBLIC_VORSCHAU=1) zeigt Lücken in eckigen Klammern. Die Live-Seite blendet sie aus.
export const VORSCHAU = import.meta.env.PUBLIC_VORSCHAU === '1';
// Erst auf true setzen, wenn der Text der Unterseite „Meine Geschichte“ freigegeben ist.
export const GESCHICHTE_FERTIG = true; // freigegeben von Mario am 31.10.2026
export const GESCHICHTE_SICHTBAR = VORSCHAU || GESCHICHTE_FERTIG;

// Beschreibung für Google, entschieden von Mario am 31.10.2026 (Website-Texte, Abschnitt 9)
export const BESCHREIBUNG = 'Warum landest du immer wieder an derselben Stelle? Coaching für wiederkehrende Muster im Job, in der Familie und in der Liebe. Berlin, Bielefeld, online.';

export const SITE = {
  name: 'Mario Wochner',
  brand: 'Mario Wochner · Coaching aus Erfahrung',
  email: 'mario.wochner@t-online.de',
  phone: '+4915563417899',
  phoneDisplay: '0155 63417899',
  orte: ['Berlin', 'Bielefeld', 'Hannover', 'Wolfsburg'],
  // Link zur Terminbuchung, sobald das Werkzeug feststeht (offene Entscheidung im Projektstand)
  bookingUrl: '',
  social: {
    linkedin: '',
    instagram: 'https://www.instagram.com/mario_on_offroad/',
  },
  preise: {
    einzel: 120,
    zweier: 220,
    dreier: 300,
  },
};

// Zeile im Fußbereich: sichtbarer, ehrlicher Ortsbezug für Suchmaschinen
export const ORTSZEILE = `Coaching in ${SITE.orte.slice(0, -1).join(', ')} und ${SITE.orte.at(-1)} sowie online.`;
