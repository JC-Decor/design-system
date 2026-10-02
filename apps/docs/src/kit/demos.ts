import type { ComponentType } from 'react';

const components = import.meta.glob<{ default: ComponentType; meta?: DemoMeta }>('../demos/**/*.demo.tsx', { eager: true });
const sources = import.meta.glob<string>('../demos/**/*.demo.tsx', { eager: true, query: '?raw', import: 'default' });

export interface DemoMeta {
  /** Centraliza a prévia */
  centered?: boolean;
  /** Remove o padding da prévia (ex.: barras full-bleed) */
  withoutPadding?: boolean;
  /** Fundo da prévia: superfície (padrão) ou fundo da página */
  background?: 'surface' | 'page';
  maxWidth?: number;
}

export interface DemoEntry {
  id: string;
  Component: ComponentType;
  code: string;
  meta: DemoMeta;
}

const toId = (path: string) => path.replace('../demos/', '').replace('.demo.tsx', '');

export const demos: Record<string, DemoEntry> = Object.fromEntries(
  Object.entries(components).map(([path, mod]) => {
    const id = toId(path);
    return [id, { id, Component: mod.default, code: cleanSource(sources[path] ?? ''), meta: mod.meta ?? {} }];
  }),
);

/** Remove a linha `export const meta = {...};` (sempre em uma linha) e o import de DemoMeta do código exibido. */
function cleanSource(source: string) {
  return source
    .replace(/^export const meta\b[^\n]*\n\n?/m, '')
    .replace(/import type \{ DemoMeta \} from '[^']+';\n/, '')
    .trim();
}
