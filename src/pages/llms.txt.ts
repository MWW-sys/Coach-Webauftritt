// Kurzbeschreibung für KI-Systeme (llms.txt). Wird nach Freigabe der Texte präzisiert.
import type { APIRoute } from 'astro';
import { SITE, ORTSZEILE } from '../site.config';

export const GET: APIRoute = ({ site }) => {
  const url = (pfad: string) => new URL(pfad, site).href;
  const text = `# ${SITE.brand}

> Einzelcoaching für Menschen, die viel erreicht haben und trotzdem nachts wach liegen, und für Menschen, die ihre Muster in Beziehungen kennen und sie trotzdem nicht ändern. ${ORTSZEILE}

## Seiten

- [Startseite](${url('/')}): Ansatz, Arbeitsweise, Angebot und Preise, häufige Fragen, Kontakt
- [Meine Geschichte](${url('/meine-geschichte')}): Wie Mario Wochner selbst den Weg gegangen ist, über den er coacht

## Kontakt

- E-Mail: ${SITE.email}
- Telefon: ${SITE.phoneDisplay}
- Erstgespräch kostenlos
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
