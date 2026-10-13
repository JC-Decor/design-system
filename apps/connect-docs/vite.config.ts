import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const ui = resolve(import.meta.dirname, '../../packages/connect-ui/src');

// Em dev/build o docs consome o código-fonte do @jcdecor/connect-ui (HMR instantâneo).
// Os imports nos exemplos continuam sendo exatamente os que o consumidor usa.
// GitHub Pages serve o site em /design-system/connect/ — o workflow define BASE_PATH. Local/dev: '/'.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@jcdecor\/connect-ui\/styles\.css$/, replacement: resolve(import.meta.dirname, 'src/empty.css') },
      { find: /^@jcdecor\/connect-ui\/tokens$/, replacement: `${ui}/tokens.ts` },
      { find: /^@jcdecor\/connect-ui$/, replacement: `${ui}/index.ts` },
    ],
    dedupe: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
