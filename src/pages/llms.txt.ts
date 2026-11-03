// Kurzbeschreibung für KI-Systeme (llms.txt), mit der von Mario entschiedenen Beschreibung.
import type { APIRoute } from 'astro';
import { SITE, ORTSZEILE, BESCHREIBUNG, GESCHICHTE_SICHTBAR, STIMMEN_OEFFENTLICH } from '../site.config';

export const GET: APIRoute = ({ site }) => {
  const url = (pfad: string) => new URL(pfad, site).href;
  const text = `# ${SITE.brand}

> ${BESCHREIBUNG} ${ORTSZEILE}

## Seiten

- [Startseite](${url('/')}): Ansatz, Arbeitsweise, Angebot und Preise, häufige Fragen, Kontakt
${GESCHICHTE_SICHTBAR ? `- [Meine Geschichte](${url('/meine-geschichte')}): Warum fühle ich mich leer, obwohl ich alles habe?\n` : ''}${STIMMEN_OEFFENTLICH ? `- [Was andere über mich sagen](${url('/was-andere-ueber-mich-sagen')}): Was Kolleginnen und Kollegen über mich als Coach sagen\n` : ''}
## Kontakt

- E-Mail: ${SITE.email}
- Telefon: ${SITE.phoneDisplay}
- Erstgespräch kostenlos
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
