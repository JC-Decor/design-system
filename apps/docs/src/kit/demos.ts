import type { ComponentType } from 'react';
import type { Component as VueComponent } from 'vue';

const components = import.meta.glob<{ default: ComponentType; meta?: DemoMeta }>('../demos/**/*.demo.tsx', { eager: true });
const sources = import.meta.glob<string>('../demos/**/*.demo.tsx', { eager: true, query: '?raw', import: 'default' });
// Versões Vue dos exemplos: `<nome>.demo.vue` ao lado do `.demo.tsx` (carregadas só quando o Vue é escolhido)
const vueComponents = import.meta.glob<{ default: VueComponent }>('../demos/**/*.demo.vue');
const vueSources = import.meta.glob<string>('../demos/**/*.demo.vue', { query: '?raw', import: 'default' });

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
  /** Exemplo Vue equivalente (import dinâmico do componente e do código-fonte) */
  vue?: () => Promise<{ Component: VueComponent; code: string }>;
}

const toId = (path: string) => path.replace('../demos/', '').replace(/\.demo\.(tsx|vue)$/, '');

const vueLoaders = Object.fromEntries(
  Object.keys(vueComponents).map((path) => [
    toId(path),
    async () => {
      const [mod, code] = await Promise.all([vueComponents[path](), vueSources[path]()]);
      return { Component: mod.default, code: cleanVueSource(code) };
    },
  ]),
);

export const demos: Record<string, DemoEntry> = Object.fromEntries(
  Object.entries(components).map(([path, mod]) => {
    const id = toId(path);
    return [id, { id, Component: mod.default, code: cleanSource(sources[path] ?? ''), meta: mod.meta ?? {}, vue: vueLoaders[id] }];
  }),
);

/** Remove a linha `export const meta = {...};` (sempre em uma linha) e o import de DemoMeta do código exibido. */
function cleanSource(source: string) {
  return source
    .replace(/^export const meta\b[^\n]*\n\n?/m, '')
    .replace(/import type \{ DemoMeta \} from '[^']+';\n/, '')
    .trim();
}

/** Mesma limpeza para `.vue`: o meta fica num `<script lang="ts">` separado, que não aparece no código exibido. */
function cleanVueSource(source: string) {
  return source.replace(/<script lang="ts">\s*export const meta[\s\S]*?<\/script>\s*/, '').trim();
}
