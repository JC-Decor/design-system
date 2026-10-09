import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

const external = [
  ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.dependencies),
  'react/jsx-runtime',
];

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Classes estáveis e legíveis: jc-KpiCard-value-x1y2
      generateScopedName: (name, filename) => {
        const base = filename.split('/').pop()!.replace('.module.css', '');
        let hash = 0;
        for (const ch of filename + name) hash = (hash * 31 + ch.charCodeAt(0)) | 0;
        return `jc-${base}-${name}-${(hash >>> 0).toString(36).slice(0, 5)}`;
      },
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, 'src/index.ts'),
        chat: resolve(import.meta.dirname, 'src/chat.ts'),
        charts: resolve(import.meta.dirname, 'src/charts.ts'),
        brand: resolve(import.meta.dirname, 'src/brand.ts'),
        tokens: resolve(import.meta.dirname, 'src/tokens.ts'),
      },
      formats: ['es'],
      cssFileName: 'styles',
    },
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      external: (id) => external.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: { banner: (chunk) => (chunk.fileName.endsWith('.js') ? "'use client';" : '') },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
});
