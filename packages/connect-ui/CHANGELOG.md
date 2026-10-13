# @jcdecor/connect-ui

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
