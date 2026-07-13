// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages at https://berlingalvan.github.io/portfolio-website
// When switching to the custom domain: change `site` to the domain, remove `base`,
// and update the Sitemap URL in public/robots.txt.
export default defineConfig({
  site: 'https://berlingalvan.github.io',
  base: '/portfolio-website',
  integrations: [sitemap()],
});
