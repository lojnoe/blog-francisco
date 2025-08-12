// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://localhost:4321', // o, en local, 'http://localhost:4321'
  integrations: [mdx()],
});