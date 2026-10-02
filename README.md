# JC Decor — Design System

Monorepo (npm workspaces):

| Pasta | O que é |
| --- | --- |
| `packages/ui` | Biblioteca **`@jcdecor/ui`** (tema Mantine + componentes), publicada no npm |
| `apps/docs` | Site de documentação (Vite + React Router), com exemplos ao vivo, código e playground |

## Desenvolvimento

```bash
npm install
npm run dev          # docs em http://localhost:5173, consumindo o código-fonte da lib (HMR)
npm test             # testes da lib (vitest)
npm run typecheck
npm run build        # build da lib (packages/ui/dist) + docs (apps/docs/dist)
```

### Onde mexer

- **Tokens** (cores, tipografia, spacing): `packages/ui/src/theme/tokens.ts` — fonte da verdade (paleta calibrada a partir do site jcdecor.com.br, rampas OKLCH; `colors.ts` gera as tuplas do Mantine). O teste `test/contrast.test.ts` garante WCAG AA dos pares texto/fundo — rode `npm test` ao mexer em cores.
- **Visual dos componentes Mantine**: `packages/ui/src/theme/theme.ts` + `overrides.module.css`.
- **Variantes de cor** (accent, outline, light/tags): `packages/ui/src/theme/variantColorResolver.ts`.
- **Componentes JC**: `packages/ui/src/components/<Nome>/`, chat em `src/chat/`, gráficos em `src/charts/`.
- **Docs**: cada exemplo é um arquivo `apps/docs/src/demos/<pasta>/<nome>.demo.tsx` (o código exibido é o próprio arquivo); páginas em `apps/docs/src/pages/`, menu em `apps/docs/src/nav.ts`.

## Publicando no npm

Requer acesso ao escopo `@jcdecor` no npm (crie a organização `jcdecor` em npmjs.com ou renomeie o pacote).

```bash
npm run changeset            # descreva a mudança
npx changeset version        # gera versão + CHANGELOG
npm login
npm run release              # build + publish
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
