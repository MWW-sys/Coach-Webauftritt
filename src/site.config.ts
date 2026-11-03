// Zentrale Angaben, die auf mehreren Seiten und in den strukturierten Daten vorkommen.
// Hier ändern, nicht in den einzelnen Seiten.

// Vorschau-Build (PUBLIC_VORSCHAU=1) zeigt Lücken in eckigen Klammern. Die Live-Seite blendet sie aus.
export const VORSCHAU = import.meta.env.PUBLIC_VORSCHAU === '1';
// Erst auf true setzen, wenn der Text der Unterseite „Meine Geschichte“ freigegeben ist.
export const GESCHICHTE_FERTIG = true; // freigegeben von Mario am 31.10.2026
export const GESCHICHTE_SICHTBAR = VORSCHAU || GESCHICHTE_FERTIG;

// „Was andere über mich sagen“ (Mario, 02.11.2026): Die Seite ist über ihren Link erreichbar, damit Mario die
// Zustimmung der fünf einholen kann. Sie steht nicht bei Google und nicht in der Sitemap. Ob und wann sie ins Menü
// kommt, entscheidet Mario; dann hier auf true setzen.
export const STIMMEN_OEFFENTLICH = true;

// IHK-Zertifikat (Mario, 01.11.2026): Bis zum 6.11.2026 steht an beiden Stellen „ab 6.11.“ dabei.
// Am 6.11. führt Mario den vorbereiteten Pull Request zusammen, der hier false durch true ersetzt.
export const ZERTIFIKAT_ERHALTEN = false;
export const ZERTIFIKAT_KOPF = 'IHK-zertifizierter systemischer Coach' + (ZERTIFIKAT_ERHALTEN ? '' : ' (ab\u00a06.11.)');

// Beschreibung für Google, neuer Leitsatz, freigegeben von Mario am 02.11.2026 (Textwerkstatt)
export const BESCHREIBUNG = 'Landest du immer wieder an derselben Stelle? Coaching für wiederkehrende Muster im Job, in der Familie und in der Liebe. Berlin, Bielefeld, online.';

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
    linkedin: 'https://www.linkedin.com/in/mario-wochner-412860373/',
    instagram: 'https://www.instagram.com/mario_on_offroad/',
  },
  // Preise, freigegeben von Mario am 02.11.2026 (Textwerkstatt)
  preise: {
    einzel: { '60 Minuten': 80, '90 Minuten': 120, '2 × 90 Minuten': 220, '3 × 90 Minuten': 300 },
    paar: { '60 Minuten': 110, '90 Minuten': 160, '2 × 90 Minuten': 300, '3 × 90 Minuten': 420 },
  },
};

// Zeile im Fußbereich: sichtbarer, ehrlicher Ortsbezug für Suchmaschinen
export const ORTSZEILE = `Coaching in ${SITE.orte.slice(0, -1).join(', ')} und ${SITE.orte.at(-1)} sowie online.`;
