// @ts-check
import { defineConfig } from 'astro/config';

// Adresse der Seite, seit 02.11.2026 die eigene Domain.
// Daraus entstehen Canonical-Links, Vorschaubilder und die Sitemap-Adressen.
export default defineConfig({
  site: 'https://mario-wochner.de',
  trailingSlash: 'never',
  build: { format: 'file' },
});
