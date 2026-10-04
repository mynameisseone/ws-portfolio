// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://mynameisseone.github.io/ws-portfolio/
  site: 'https://mynameisseone.github.io',
  base: '/ws-portfolio',
  integrations: [sitemap()],
});
