# @jcdecor/ui

Design System da **JC Decor** para React: tema, tokens e componentes construídos sobre o [Mantine 9](https://mantine.dev).

- Paleta da marca (Horizon, Obsidian, Electric, Evergreen) em rampas OKLCH com contraste WCAG AA validado, tipografia Poppins, spacing, raios e sombras
- Tema claro (padrão) e escuro, com variáveis CSS `--ds-*` semânticas
- Todo o Mantine reexportado já temado, mais componentes da marca: `KpiCard`, `Tag`, `PromoBanner`, `TopNav`, `DataTable`, `ProductCard`, `PriceTag`…
- `@jcdecor/ui/chat`: bolhas, conversa, composer, lista de conversas e layout de atendimento
- Logos e ilustrações da marca como componentes SVG recoloríveis, com variações para fundo claro e escuro
- `@jcdecor/ui/charts`: gráficos do `@mantine/charts` na paleta da marca, em pt-BR

### Logo

```tsx
import { JcLogo } from '@jcdecor/ui';

<JcLogo />                         // segue o tema: azul no claro, branco no escuro
<JcLogo variant="dark" />          // fundo escuro em qualquer tema (ex.: barra navy)
<JcLogo type="mark" size={32} />   // só o brasão
<JcLogo shieldColor="electric.3" lettersColor="white" wordmarkColor="white" />
```

## Instalação

```bash
npm install @jcdecor/ui @mantine/core @mantine/hooks
# opcionais
npm install @mantine/charts recharts        # gráficos
npm install @mantine/notifications          # toasts
```

Adicione a fonte Poppins:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

## Uso

```tsx
import '@mantine/core/styles.css';
// import '@mantine/charts/styles.css';
import '@jcdecor/ui/styles.css'; // sempre por último

import { JcProvider, Button, KpiCard, Tag } from '@jcdecor/ui';

export function App() {
  return (
    <JcProvider>
      <KpiCard label="Acessos (60d)" value={54959} delta={-5.6} />
      <Tag tone="success" withIcon>Sucesso</Tag>
      <Button variant="accent">Destaque</Button>
    </JcProvider>
  );
}
```

| Import | Conteúdo |
| --- | --- |
| `@jcdecor/ui` | `JcProvider`, `jcTheme`, `jcCssVariablesResolver`, todo o `@mantine/core`, componentes JC, formatadores pt-BR |
| `@jcdecor/ui/chat` | `ChatLayout`, `ChatThread`, `ChatMessage`, `ChatComposer`, `ConversationList`, `ChatHeader`, `TypingIndicator` |
| `@jcdecor/ui/charts` | `LineChart`, `AreaChart`, `BarChart`, `DonutChart`, `PieChart`, `Sparkline`, `ChartCard`, `chartPalette` |
| `@jcdecor/ui/brand` | `JcLogo` (claro/escuro, recolorível por parte), `JcLogoAlt`, `SpartanHelmet`, `GreekFrame`, `Collaborator` — também exportados pela raiz |
| `@jcdecor/ui/tokens` | Tokens crus em JS (`brand`, `ramps`, `typography`, `spacing`…) |
| `@jcdecor/ui/styles.css` | CSS dos componentes e overrides |

### Variantes de botão

| ds.css | Mantine |
| --- | --- |
| `ds-btn-primary` | `variant="filled"` (padrão) |
| `ds-btn-secondary` | `variant="outline"` |
| `ds-btn-accent` | `variant="accent"` |
| `ds-btn-ghost` | `variant="subtle"` |

### Já tem um MantineProvider?

```tsx
import { jcTheme, jcCssVariablesResolver } from '@jcdecor/ui';
<MantineProvider theme={jcTheme} cssVariablesResolver={jcCssVariablesResolver}>…</MantineProvider>
```

Documentação completa com exemplos: veja o site de docs do Design System.
