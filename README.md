# JC Decor — Design System

Monorepo (npm workspaces):

| Pasta | O que é |
| --- | --- |
| `packages/ui` | Biblioteca **`@jcdecor/ui`** (React: tema Mantine + componentes), publicada no npm |
| `packages/vue` | Biblioteca **`@jcdecor/vue`** (Vue 3: mesmo DS sobre o Mantine Vue), publicada no npm |
| `apps/docs` | Site de documentação (Vite + React Router) com seletor **React \| Vue**: exemplos ao vivo, código e playground nos dois frameworks |
| `apps/vue-playground` | Vitrine viva do `@jcdecor/vue`, publicada junto com o docs em `/vue/` |

## Desenvolvimento

```bash
npm install
npm run dev          # docs em http://localhost:5173, consumindo o código-fonte da lib (HMR)
npm run dev:vue      # playground Vue em http://localhost:5180/vue/ (também acessível pelo docs em /vue/)
npm test             # testes das duas libs (vitest)
npm run typecheck
npm run build        # build das libs (packages/*/dist) + docs com o playground Vue em apps/docs/dist/vue
```

### Onde mexer

- **Tokens** (cores, tipografia, spacing): `packages/ui/src/theme/tokens.ts` — fonte da verdade (paleta calibrada a partir do site jcdecor.com.br, rampas OKLCH; `colors.ts` gera as tuplas do Mantine). O teste `test/contrast.test.ts` garante WCAG AA dos pares texto/fundo — rode `npm test` ao mexer em cores.
- **Visual dos componentes Mantine**: `packages/ui/src/theme/theme.ts` + `overrides.module.css`.
- **Variantes de cor** (accent, outline, light/tags): `packages/ui/src/theme/variantColorResolver.ts`.
- **Componentes JC**: `packages/ui/src/components/<Nome>/`, chat em `src/chat/`, gráficos em `src/charts/`.
- **Vue (`packages/vue`)**: tokens, formatação, CSS modules, caminhos SVG da marca e utilitários do chat são **cópias geradas** de `packages/ui/src` (cabeçalho `@generated`). Edite sempre no `packages/ui` e rode `npm run sync -w @jcdecor/vue`; o teste `test/shared.test.ts` falha se as cópias ficarem desatualizadas. Tema, componentes, chat e gráficos têm implementação Vue própria com a mesma API (slots/eventos/v-model no lugar de ReactNode/callbacks).
- **Docs**: cada exemplo tem duas versões lado a lado — `<nome>.demo.tsx` (React) e `<nome>.demo.vue` (Vue); o seletor React | Vue no topo escolhe qual é montada e exibida. `npm run vue-coverage -w docs` lista exemplos ainda sem versão Vue. Cada exemplo é um arquivo `apps/docs/src/demos/<pasta>/<nome>.demo.tsx` (o código exibido é o próprio arquivo); páginas em `apps/docs/src/pages/`, menu em `apps/docs/src/nav.ts`.

## Publicando no npm

Requer acesso ao escopo `@jcdecor` no npm (crie a organização `jcdecor` em npmjs.com ou renomeie o pacote).

```bash
npm run changeset            # descreva a mudança
npx changeset version        # gera versão + CHANGELOG
npm login
npm run release              # build das duas libs + publish (changesets publica as que mudaram)
```

## Documentação (GitHub Pages)

A documentação é publicada em **https://jc-decor.github.io/design-system/** a cada push na `main`, pelo workflow
[`.github/workflows/docs.yml`](.github/workflows/docs.yml): roda testes e typecheck, gera o build com
`BASE_PATH=/design-system/` e publica no GitHub Pages. Para disparar manualmente, use **Actions → Docs (GitHub Pages) → Run workflow**.

Para testar o build de produção localmente com o mesmo caminho base:

```bash
BASE_PATH=/design-system/ npm run build -w docs
BASE_PATH=/design-system/ npm run preview -w docs   # → http://localhost:4173/design-system/
```

O build copia `index.html` para `404.html`, então links diretos (ex.: `/design-system/mantine/button`) funcionam mesmo sem rewrite no servidor.
