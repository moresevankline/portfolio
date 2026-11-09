import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo from /portfolio/.
export default defineConfig({
  site: 'https://moresevankline.github.io',
  base: '/portfolio',
});
