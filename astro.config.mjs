import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { config } from './src/config.ts';

// Preview builds (SHOW_DRAFTS=true) must never be indexed, so no sitemap there.
const previewMode = process.env.SHOW_DRAFTS === 'true';

export default defineConfig({
  site: config.domain,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: previewMode
    ? []
    : [sitemap({ filter: (page) => !/\/thanks\/?$/.test(page) })],
  vite: { plugins: [tailwindcss()] },
  markdown: { shikiConfig: { theme: 'github-light' } },
});
