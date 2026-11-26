// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: change to the real domain before deploying
  site: 'https://www.novasack.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
