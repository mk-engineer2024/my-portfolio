import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mk-engineer2024.github.io',
  base: '/my-portfolio/',
  integrations: [react(), tailwind()],
});
