# @jcdecor/connect-ui

## 0.3.1

### Patch Changes

- f8d81a2: Fix the Christmas theme's header garland not rendering: combining a `linear-gradient()` (or a CSS color variable) with `url(...)` in the same `background-image` layer list silently drops the image layer in some rendering engines. The garland now uses a dedicated `background-color` plus a single-layer `background-image`, and also ships on `@jcdecor/ui`'s `TopNav` component (previously only the docs shells and `@jcdecor/connect-ui`'s `AppHeader` had it).

## 0.3.0

### Minor Changes

- 527f7a2: Add an opt-in "Christmas" theme flavor: `defaultThemeFlavor="christmas"` on `JcProvider`/`ConnectProvider`, a new `useThemeFlavor()` hook, and a `<ThemeFlavorToggle />` component. Swaps primary/accent/link colors to a festive green/red palette (reusing existing AA-validated ramps) and adds a garland decoration to the top header bar.

## 0.2.0

Novos componentes (vindos da migração do connect-jc, onde cada tela recriava o mesmo padrão):

- `FormModal`: modal de formulário quase tela cheia (`.scl-modal`), com título + subtítulo (descrição acessível), corpo rolável em grade de campos, rodapé fixo e `onSubmit` opcional.
- `FormGrid`: grade de formulário (`.wf-form-grid`): campos simples em colunas automáticas, textareas/editores e demais blocos na linha inteira (`data-span="auto|full"` força).
- `InlineNotice`: aviso em linha (`.wf-notice`) nos tons `info` (navy), `success`, `warning`, `danger` e `neutral`.
- `DetailGrid` / `DetailItem`: pares rótulo/valor em colunas automáticas (`.wf-preview-grid`).

Melhorias:

- `ContextualDrawer`: `size` aceita largura fixa (número ou CSS, limitada à área útil), `withCloseButton` (com `header` próprio o fechar flutua no canto), `bodyPadding` e `footerClassName`.
- Tokens `--cn-overlay-gap`, `--cn-overlay-w` e `--cn-overlay-h` agora são globais (antes só dentro do `ContextualDrawer`).
- Tom `navy` (primária) em `tones`/`ToneName`, com `--cn-tone-navy-*`.
- `FilterChip`: `variant="filled"` (ativo com fundo cheio do tom).
- `ProgressBar`: `color` aceita qualquer cor CSS.
- Ícones `refresh`, `external`, `video`, `info` e `alert`.
- `theme.other.resolveAvatarSrc`: resolve a foto de `PersonAvatar`, `AvatarStack`, `CellPerson`, `ActivityTimeline`, `Hero` e do chip do `AppHeader` (ex.: proxy de mídia do app).
- `ResourceState`: sem `formatError`, usa `theme.other.formatResourceError` antes do `describeResourceError`.

Correções:

- `ConfirmDialog`, `PromptDialog` e `ContextualDrawer`: a classe do painel vazava para o contêiner de tela cheia do Mantine, pintando a página inteira de branco atrás do diálogo.
- `ConfirmDialog`: `description` é renderizada num `div` (aceita conteúdo em bloco sem gerar DOM inválido).

## 0.1.0

- Versão inicial: tema Mantine 9 do Connect JC (navy, tons, DM Sans, raios, sombras, tema escuro), variáveis `--ds-*`/`--cn-*`, tokens (`tones`, `priorities`, `statuses`), `ConnectProvider`, `Icon`, tipografia (`Display`, `Headline`, `Subheadline`, `Disclaimer`, `Kicker`), `ThemeToggle` e `TokenSwatch`/`ColorRamp`.
- Ilustrações do Connect (unDraw) no pacote (`illustrations/*.svg`), usadas pelo nome em `Illustration`, `EmptyStatePanel` (arte por variante/módulo), `Hero`, `SectionHeader` e `AnimatedSection`; URL via CDN da versão ou `theme.other.illustrationBaseUrl`.
