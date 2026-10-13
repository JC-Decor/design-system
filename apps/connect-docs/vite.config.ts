import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import pkg from '../../packages/connect-ui/package.json' with { type: 'json' };

const ui = resolve(import.meta.dirname, '../../packages/connect-ui/src');
const illustrationsDir = resolve(import.meta.dirname, '../../packages/connect-ui/illustrations');

/**
 * Serve/copia os SVGs de packages/connect-ui/illustrations em `<base>illustrations/` — o docs usa os arquivos
 * locais (theme.other.illustrationBaseUrl) em vez do CDN, que só tem as versões já publicadas.
 */
function connectIllustrations(): Plugin {
  return {
    name: 'connect-illustrations',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = req.url?.match(/\/illustrations\/([a-z0-9-]+\.svg)(?:\?.*)?$/);
        if (!match || !readdirSync(illustrationsDir).includes(match[1])) return next();
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(readFileSync(resolve(illustrationsDir, match[1])));
      });
    },
    generateBundle() {
      for (const file of readdirSync(illustrationsDir).filter((f) => f.endsWith('.svg'))) {
        this.emitFile({ type: 'asset', fileName: `illustrations/${file}`, source: readFileSync(resolve(illustrationsDir, file)) });
      }
    },
  };
}

// Em dev/build o docs consome o código-fonte do @jcdecor/connect-ui (HMR instantâneo).
// Os imports nos exemplos continuam sendo exatamente os que o consumidor usa.
// GitHub Pages serve o site em /design-system/connect/ — o workflow define BASE_PATH. Local/dev: '/'.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base,
  plugins: [react(), connectIllustrations()],
  define: { __CONNECT_UI_VERSION__: JSON.stringify(pkg.version) },
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
