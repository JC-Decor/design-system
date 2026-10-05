import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const lib = resolve(import.meta.dirname, '../../packages/vue/src');

// Como o docs: consome o código-fonte do @jcdecor/vue (HMR), com os mesmos imports do consumidor.
// Publicado junto com o docs em <BASE_PATH>vue/ (GitHub Pages: /design-system/vue/).
const base = `${process.env.BASE_PATH ?? '/'}vue/`;

export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: [
      { find: /^@jcdecor\/vue\/styles\.css$/, replacement: resolve(import.meta.dirname, 'src/empty.css') },
      { find: /^@jcdecor\/vue\/chat$/, replacement: `${lib}/chat.ts` },
      { find: /^@jcdecor\/vue\/charts$/, replacement: `${lib}/charts.ts` },
      { find: /^@jcdecor\/vue\/brand$/, replacement: `${lib}/brand.ts` },
      { find: /^@jcdecor\/vue\/tokens$/, replacement: `${lib}/tokens.ts` },
      { find: /^@jcdecor\/vue$/, replacement: `${lib}/index.ts` },
    ],
    dedupe: ['vue', '@mantine-vue/core', '@mantine-vue/hooks'],
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
