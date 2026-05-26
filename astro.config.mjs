import { defineConfig } from 'astro/config';

const isPagesPreview = process.env.DEPLOY_TARGET === 'pages';

export default defineConfig({
  site: isPagesPreview
    ? 'https://marcbasas.github.io'
    : 'https://www.pepboveinstallacions.com',
  base: isPagesPreview ? '/Pep_Bove_instalacions_web' : '/',
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
