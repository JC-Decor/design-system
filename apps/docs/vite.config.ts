import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const ui = resolve(import.meta.dirname, '../../packages/ui/src');
const vueLib = resolve(import.meta.dirname, '../../packages/vue/src');

// Em dev/build o docs consome o código-fonte do @jcdecor/ui (HMR instantâneo).
// Os imports nos exemplos continuam sendo exatamente os que o consumidor usa.
// GitHub Pages serve o site em /<repo>/ — o workflow define BASE_PATH=/design-system/. Local/dev: '/'.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base,
  // React para o site; Vue só para os exemplos `*.demo.vue` (montados dentro das páginas React)
  plugins: [react(), vue()],
  resolve: {
    alias: [
      { find: /^@jcdecor\/ui\/styles\.css$/, replacement: resolve(import.meta.dirname, 'src/empty.css') },
      { find: /^@jcdecor\/ui\/chat$/, replacement: `${ui}/chat.ts` },
      { find: /^@jcdecor\/ui\/charts$/, replacement: `${ui}/charts.ts` },
      { find: /^@jcdecor\/ui\/brand$/, replacement: `${ui}/brand.ts` },
      { find: /^@jcdecor\/ui\/tokens$/, replacement: `${ui}/tokens.ts` },
      { find: /^@jcdecor\/ui$/, replacement: `${ui}/index.ts` },
      { find: /^@jcdecor\/vue\/styles\.css$/, replacement: resolve(import.meta.dirname, 'src/empty.css') },
      { find: /^@jcdecor\/vue\/chat$/, replacement: `${vueLib}/chat.ts` },
      { find: /^@jcdecor\/vue\/charts$/, replacement: `${vueLib}/charts.ts` },
      { find: /^@jcdecor\/vue\/brand$/, replacement: `${vueLib}/brand.ts` },
      { find: /^@jcdecor\/vue\/tokens$/, replacement: `${vueLib}/tokens.ts` },
      { find: /^@jcdecor\/vue$/, replacement: `${vueLib}/index.ts` },
    ],
    dedupe: ['react', 'react-dom', '@mantine/core', '@mantine/hooks', 'vue', '@mantine-vue/core', '@mantine-vue/hooks'],
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
