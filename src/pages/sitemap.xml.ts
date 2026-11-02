// Sitemap ohne Zusatzpaket. Die Adresse kommt aus astro.config.mjs (site).
import type { APIRoute } from 'astro';
import { GESCHICHTE_SICHTBAR, STIMMEN_OEFFENTLICH } from '../site.config';

const seiten = ['/', ...(GESCHICHTE_SICHTBAR ? ['/meine-geschichte'] : []), ...(STIMMEN_OEFFENTLICH ? ['/was-andere-ueber-mich-sagen'] : []), '/impressum', '/datenschutz'];

export const GET: APIRoute = ({ site }) => {
  const urls = seiten
    .map((pfad) => `  <url><loc>${new URL(pfad, site).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
