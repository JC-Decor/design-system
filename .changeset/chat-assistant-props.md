---
'@jcdecor/ui': minor
'@jcdecor/vue': minor
---

Chat para assistentes de IA:

- `ChatComposer`: `rightSection`, `loading` + `onStop`/`@stop` (botão de interromper; o envio fica bloqueado sem apagar o texto nem desabilitar o campo), `stopLabel` e `sendDisabled`.
- `ConversationList`: ações por conversa (`renderActions` / slot `#actions`) e ícone no lugar do avatar (`renderIcon` / slot `#icon`). Cada item agora é um `div[role=listitem]` com o botão de seleção dentro.
- `ChatMessage` / `ChatThread`: `variant: 'plain'` (sem bolha, largura total) em `ChatMessageData`, avatar customizado (`avatar` / `renderAvatar` / slot `#avatar`) e `footer` no fim da conversa.
