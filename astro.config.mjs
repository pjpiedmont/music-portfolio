// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.parkerpiedmont.com',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.parkerpiedmont.com/test',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ]
});