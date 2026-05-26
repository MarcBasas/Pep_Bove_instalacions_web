import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.pepboveinstallacions.com',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
