# @jcdecor/vue

## 0.1.8

### Overlays

- `Modal` e `Drawer` agora respeitam `theme.components.Modal/Drawer.defaultProps` (como no React). O Mantine Vue 3.5 fixava `zIndex: 200` no componente, então `defaultProps.zIndex` não chegava nem ao conteúdo nem ao fundo escurecido; os padrões do próprio DS (sombra `lg`, fundo com blur, raio `md`) também não eram aplicados. A prop continua vencendo o tema.
- `Modal`/`Drawer`: raio nomeado (`radius="md"`) vira `var(--mantine-radius-md)`; o Mantine Vue gravava `--modal-radius: md` (CSS inválido, cantos retos).

### Cabeçalhos

- `PageHeader`: as ações quebram em linhas quando não cabem (3+ botões em telas de celular), em vez de vazar para fora da tela.

## 0.1.7

### Navegação

- `TopNav`: menu mobile acessível pelo teclado. O hambúrguer agora informa `aria-expanded` e aponta para o menu com `aria-controls`; Esc fecha o menu aberto e, se o foco estava na barra ou no menu, devolve o foco ao hambúrguer (foco em outro lugar da página não é movido).

## 0.1.6

### Cabeçalhos

- `PageHeader`: novo `icon` (quadro suave na cor primária ao lado do título) e `iconSize`; agora tem Styles API completa (`classNames`, `styles`, `vars`, `unstyled`, `theme.components.PageHeader`) com as partes `root`, `breadcrumbs`, `header`, `main`, `icon`, `body`, `kicker`, `title`, `description` e `actions`.
- `TopNav`: links aceitam `leftSection`/`rightSection` (MantineNode), `disabled` e `aria-label` (links só com ícone). Novas partes do Styles API: `linkSection` e `linkLabel`. Links sem seções mantêm o mesmo HTML de antes.

### Chat para assistentes de IA

- `ChatComposer`: `rightSection`, `loading` + `@stop` (botão de interromper; o envio fica bloqueado sem apagar o texto nem desabilitar o campo), `stopLabel` e `sendDisabled`.
- `ConversationList`: ações por conversa (slot `#actions`) e ícone no lugar do avatar (slot `#icon`). Cada item agora é um `div[role=listitem]` com o botão de seleção dentro.
- `ChatMessage` / `ChatThread`: `variant: 'plain'` (sem bolha, largura total) em `ChatMessageData`, avatar customizado (`avatar` / slot `#avatar`) e `footer` no fim da conversa.

## 0.1.0

- Versão inicial.
