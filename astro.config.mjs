import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nanyanen87.github.io',
  base: '/personal-branding-site-test',
  integrations: [react(), tailwind()],
});
