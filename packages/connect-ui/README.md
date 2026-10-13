# @jcdecor/connect-ui

Design System do **Connect JC — Painel do Colaborador** (app interno de RH) para React: tema, tokens e componentes construídos sobre o [Mantine 9](https://mantine.dev).

É o irmão do [`@jcdecor/ui`](https://www.npmjs.com/package/@jcdecor/ui) (DS do e-commerce JC Decor): mesma arquitetura, identidade diferente — densa, navy e feita para painéis de uso diário.

- Navy `#07016B` como primária, neutros frios "ink" e tons pastel (lavender, blue, green, yellow, coral) em rampas OKLCH com os hex originais do Connect fixados
- DM Sans em escala densa (corpo 13,5px, card 16/700, página 26/700), DM Mono nos eyebrows
- Raios 10 / 14 / 20 / pílula, sombras suaves tingidas de navy, densidades compacta · regular · confortável
- Tema claro (padrão) e escuro (slate do `.dark` do Connect), com variáveis CSS `--ds-*` semânticas e `--cn-*` do Connect
- Contraste WCAG AA testado nos pares de texto (`test/contrast.test.ts`)
- Todo o Mantine reexportado já temado, mais os componentes do Connect (`Icon`, `Display`/`Headline`/`Kicker`…, `ThemeToggle`, `TokenSwatch`) e listas prontas (`tones`, `priorities`, `statuses`)

Documentação com exemplos: https://jc-decor.github.io/design-system/connect/

## Requisitos

- **React 19.2+** e **Mantine 9** (`@mantine/core` e `@mantine/hooks`) como peer dependencies
- `@mantine/notifications` é opcional (toasts)

## Instalação

```bash
npm install @jcdecor/connect-ui @mantine/core @mantine/hooks
# opcional
npm install @mantine/notifications
```

Adicione as fontes DM Sans e DM Mono:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

## Uso

```tsx
import '@mantine/core/styles.css';
import '@jcdecor/connect-ui/styles.css'; // sempre por último

import { ConnectProvider, Card, Group, Avatar, Badge, Button, Kicker, Headline, Icon } from '@jcdecor/connect-ui';

export function App() {
  return (
    <ConnectProvider>
      <Card maw={420}>
        <Kicker>Férias · aprovação</Kicker>
        <Headline size="sm" mt={6}>Mariana Costa pediu 10 dias</Headline>
        <Group mt="md" justify="space-between">
          <Group gap="xs">
            <Avatar name="Mariana Costa" color="lavender" />
            <Badge color="yellow">Pendente</Badge>
          </Group>
          <Button leftSection={<Icon name="check" size={16} />}>Aprovar</Button>
        </Group>
      </Card>
    </ConnectProvider>
  );
}
```

| Import | Conteúdo |
| --- | --- |
| `@jcdecor/connect-ui` | `ConnectProvider`, `connectTheme`, `connectCssVariablesResolver`, todo o `@mantine/core`, componentes Connect, `tones`/`priorities`/`statuses`, formatadores pt-BR (`formatNumber`, `formatPercent`, `formatDate`…) |
| `@jcdecor/connect-ui/tokens` | Tokens crus em JS (`brand`, `ramps`, `semantic`, `tones`, `typography`, `spacing`, `radius`, `motion`…), sem React/Mantine |
| `@jcdecor/connect-ui/styles.css` | CSS dos overrides de componentes e utilitários (`.ds-container`, `.ds-grid`, `.cn-density-*`) |
| `@jcdecor/connect-ui/illustrations/*.svg` | As 23 ilustrações do Connect (unDraw) como arquivos SVG |

### Cores

Use os nomes do Connect em `color=`: `navy` (primária), `lavender`, `blue`, `green`, `yellow`, `coral` (erro/perigo) e `ink` (= `gray`, neutro). Os nomes do Mantine continuam funcionando como aliases (`red` → coral, `indigo` → navy, `violet` → lavender, `teal` → green, `orange` → yellow).

```tsx
<Badge color="coral">Atrasado</Badge>
<Text c="navy.7">…</Text>
<Text c="var(--ds-text-3)">Atualizado há 5 min</Text>
```

### Variantes de botão

| Connect (`<Btn kind>`) | Mantine |
| --- | --- |
| `kind="primary"` | `variant="filled"` (padrão; navy com sombra colorida) |
| `kind="ghost"` | `variant="ghost"` (= `default`; superfície + borda suave) |
| `kind="outline"` | `variant="outline"` (sem `color`: contorno neutro de 1,5px) |
| `kind="danger"` | `variant="danger"` (coral `#D94B36`) |
| — | `variant="subtle"`, `variant="light"` (fundo/texto do tom) |
| `<IconBtn>` / `.ic-btn` | `<ActionIcon>` (variante padrão `default`) |

### Acessibilidade

O `--muted` original do Connect (`#7A7E92`, 4,0:1 sobre branco) foi escurecido para `#6B6F84` (4,9:1) em `--ds-text-3`. As bordas de campo (`--line`/`--line-2`) foram mantidas como no Connect e são decorativas; o indicador acessível é o anel de foco (`--ds-focus-ring`) com a borda navy. Os pares são verificados em `test/contrast.test.ts`.

### Já tem um MantineProvider?

```tsx
import { connectTheme, connectCssVariablesResolver } from '@jcdecor/connect-ui';
<MantineProvider theme={connectTheme} cssVariablesResolver={connectCssVariablesResolver}>…</MantineProvider>
```

## Ilustrações

As ilustrações do Connect (unDraw — uso livre, inclusive comercial, sem atribuição obrigatória) vêm no pacote e são usadas pelo nome,
com os mesmos nomes do `ILLUSTRATIONS` do connect-jc:

```tsx
<Illustration name="dayOff" size="lg" />
<EmptyStatePanel variant="error" />            {/* arte padrão da variante */}
<EmptyStatePanel module="documents" title="…" /> {/* arte padrão do módulo */}
```

Os SVGs não entram no JavaScript: por padrão a URL aponta para o jsDelivr na mesma versão do pacote. Para servir do próprio app,
copie `node_modules/@jcdecor/connect-ui/illustrations` para a pasta pública e informe a base:

```tsx
<ConnectProvider theme={{ other: { illustrationBaseUrl: '/illustrations/' } }}>
```

Fora de componentes: `illustrationUrl('dayOff', baseUrl?)`; lista de nomes em `illustrationNames`.

## Migrando do connect-jc (`components/ui` + `styles/*.css`)

> O `connect-jc/frontend` está hoje em **React 18**. O Mantine 9 exige **React 19**: atualize `react`, `react-dom`, `@types/react` e `@types/react-dom` para 19.2+ antes de instalar o pacote.

1. Instale o pacote e as fontes, importe `@mantine/core/styles.css` + `@jcdecor/connect-ui/styles.css` e envolva o app com `<ConnectProvider>`.
2. Troque o `.dark` na raiz pelo color scheme do Mantine (`ThemeToggle` ou `useMantineColorScheme`); o CSS do DS reage a `data-mantine-color-scheme`.
3. Substitua as variáveis do `tokens.css` pelas do DS (elas trocam sozinhas no escuro):

| connect-jc | @jcdecor/connect-ui |
| --- | --- |
| `--bg`, `--bg-2` | `--ds-bg`, `--ds-surface-2` |
| `--surface`, `--surface-tint` | `--ds-surface`, `--ds-surface-tint` |
| `--ink`, `--ink-2` | `--ds-text`, `--ds-text-2` |
| `--muted`, `--muted-2` | `--ds-text-3` (ajustado para AA), `--ds-text-4` (só decorativo) |
| `--line`, `--line-2` | `--ds-border-soft`, `--ds-border` |
| `--primary`, `--primary-soft`, `--primary-tint` | `--ds-primary`, `--ds-primary-soft`, `--ds-primary-tint` |
| `--focus-ring` | `--ds-focus-ring` |
| `--shadow-1`, `--shadow-2`, `--shadow-3` | `--ds-shadow-sm`, `--ds-shadow-md`, `--ds-shadow-lg` |
| `--blue-soft`, `--lavender-soft`… | `--cn-tone-<tom>-soft` (e `-bg`, `-fg`) |
| `--t`, `--t-slow` | `--cn-t`, `--cn-t-slow` |
| `--pad` + `.density-*` | `--cn-pad` + `.cn-density-*` |

4. Troque os componentes de `components/ui` pelos do DS, tela a tela:

| connect-jc | @jcdecor/connect-ui |
| --- | --- |
| `Btn` / `Button` (`kind`) | `Button` (`variant`, ver tabela acima) |
| `IconBtn` | `ActionIcon` |
| `Icon` | `Icon` (mesmos nomes e traço) |
| `ThemeToggle` | `ThemeToggle` |
| `Card` | `Card` (raio 20, padding 22, borda e sombra do Connect por padrão) |
| `Badge tone` | `Badge color` (variante `light` por padrão = tom) |
| `ProgressBar`, `RingProgress` | `Progress`, `RingProgress` do Mantine |
| `DropdownMenu` | `Menu` |
| `AppSelect` | `Select` |
| `ConfirmDialog`, `PromptDialog` | `Modal` |
| `Toast` | `@mantine/notifications` |
| `Skeleton`, `SkeletonBlock` | `Skeleton` do Mantine |

Os blocos específicos do painel (KPI, status, shell/sidebar, tabelas…) estão sendo portados como componentes Connect; veja a seção **Componentes Connect** da documentação para o que já está disponível.

5. Remova os `styles/*.css` à medida que as telas migram — os componentes do DS não dependem deles.
