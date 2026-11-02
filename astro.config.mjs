// @ts-check
import { defineConfig } from 'astro/config';

// Adresse der Seite. Wird beim Livegang durch die eigene Domain ersetzt.
// Daraus entstehen Canonical-Links, Vorschaubilder und die Sitemap-Adressen.
export default defineConfig({
  site: 'https://mario-wochner.de',
  trailingSlash: 'never',
  build: { format: 'file' },
});
