// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  // The site's own URL: og:url and the canonical are absolute (without it, og:url was http://localhost:4321/).
  site: 'https://ideagen.djmetzle.io',
  integrations: [vue()]
});