import type { APIRoute } from 'astro';

// Nutzungsvorbehalt nach § 44b UrhG (Entscheidung Mario, 31.10.2026):
// Gesperrt sind nur Crawler, die Inhalte für KI-Training sammeln.
// Suchmaschinen und KI-Suchdienste (z. B. OAI-SearchBot, Claude-SearchBot, PerplexityBot) dürfen die Seite weiter lesen.
const kiTraining = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'CCBot',
  'Bytespider',
];

export const GET: APIRoute = ({ site }) => {
  const sperren = kiTraining.map((bot) => `User-agent: ${bot}\nDisallow: /`).join('\n\n');
  const text = `${sperren}\n\nUser-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
