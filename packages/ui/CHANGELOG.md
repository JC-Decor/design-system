# @jcdecor/ui

## 0.2.2

### Patch Changes

- Fix the Christmas theme's header garland getting broken up behind opaque header children (search box, version badge, icon buttons): it now paints as an absolutely-positioned overlay on top of the header instead of the header's own background-image. Redesigned the artwork as a continuous filled swag band (was a sparse stroked curve with gaps between tiles) and doubled its size with the gold "string" baked into the SVG. Headers previewed inside an `overflow: hidden` container (full-shell docs demos) no longer clip it.

## 0.2.1

### Patch Changes

- f8d81a2: Fix the Christmas theme's header garland not rendering: combining a `linear-gradient()` (or a CSS color variable) with `url(...)` in the same `background-image` layer list silently drops the image layer in some rendering engines. The garland now uses a dedicated `background-color` plus a single-layer `background-image`, and also ships on `@jcdecor/ui`'s `TopNav` component (previously only the docs shells and `@jcdecor/connect-ui`'s `AppHeader` had it).

## 0.2.0

### Minor Changes

- 527f7a2: Add an opt-in "Christmas" theme flavor: `defaultThemeFlavor="christmas"` on `JcProvider`/`ConnectProvider`, a new `useThemeFlavor()` hook, and a `<ThemeFlavorToggle />` component. Swaps primary/accent/link colors to a festive green/red palette (reusing existing AA-validated ramps) and adds a garland decoration to the top header bar.

## 0.1.8

### Cabeçalhos

- `PageHeader`: as ações quebram em linhas quando não cabem (3+ botões em telas de celular), em vez de vazar para fora da tela.

## 0.1.7

### Navegação

- `TopNav`: menu mobile acessível pelo teclado. O hambúrguer agora informa `aria-expanded` e aponta para o menu com `aria-controls`; Esc fecha o menu aberto e, se o foco estava na barra ou no menu, devolve o foco ao hambúrguer (foco em outro lugar da página não é movido).

## 0.1.6

### Cabeçalhos

- `PageHeader`: novo `icon` (quadro suave na cor primária ao lado do título) e `iconSize`; agora tem Styles API completa (`classNames`, `styles`, `vars`, `unstyled`, `theme.components.PageHeader`) com as partes `root`, `breadcrumbs`, `header`, `main`, `icon`, `body`, `kicker`, `title`, `description` e `actions`.
- `TopNav`: links aceitam `leftSection`/`rightSection`, `disabled` e `aria-label` (links só com ícone). Novas partes do Styles API: `linkSection` e `linkLabel`. Links sem seções mantêm o mesmo HTML de antes.

### Chat para assistentes de IA

- `ChatComposer`: `rightSection`, `loading` + `onStop` (botão de interromper; o envio fica bloqueado sem apagar o texto nem desabilitar o campo), `stopLabel` e `sendDisabled`.
- `ConversationList`: ações por conversa (`renderActions`) e ícone no lugar do avatar (`renderIcon`). Cada item agora é um `div[role=listitem]` com o botão de seleção dentro.
- `ChatMessage` / `ChatThread`: `variant: 'plain'` (sem bolha, largura total) em `ChatMessageData`, avatar customizado (`avatar` / `renderAvatar`) e `footer` no fim da conversa.

## 0.1.0

- Versão inicial.
