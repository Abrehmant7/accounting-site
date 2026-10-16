// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'PUBLIC_');
const site = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL || 'https://example.com';
const origin = new URL(site);

if (origin.protocol !== 'https:' || origin.pathname !== '/' || origin.search || origin.hash) {
  throw new Error('PUBLIC_SITE_URL must be an HTTPS origin, e.g. https://yourfirm.com');
}

export default defineConfig({
  site: origin.origin,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/404') })],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  vite: {
    plugins: [tailwindcss()],
    // Keep even small scripts external so the strict production CSP can run them.
    build: { assetsInlineLimit: 0 },
  },
  devToolbar: { enabled: false },
});
