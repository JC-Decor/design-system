import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const ui = resolve(import.meta.dirname, '../../packages/ui/src');

// Em dev/build o docs consome o código-fonte do @jcdecor/ui (HMR instantâneo).
// Os imports nos exemplos continuam sendo exatamente os que o consumidor usa.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@jcdecor\/ui\/styles\.css$/, replacement: resolve(import.meta.dirname, 'src/empty.css') },
      { find: /^@jcdecor\/ui\/chat$/, replacement: `${ui}/chat.ts` },
      { find: /^@jcdecor\/ui\/charts$/, replacement: `${ui}/charts.ts` },
      { find: /^@jcdecor\/ui\/brand$/, replacement: `${ui}/brand.ts` },
      { find: /^@jcdecor\/ui\/tokens$/, replacement: `${ui}/tokens.ts` },
      { find: /^@jcdecor\/ui$/, replacement: `${ui}/index.ts` },
    ],
    dedupe: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
});
