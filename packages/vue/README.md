# @jcdecor/vue

Design System da **JC Decor** para Vue 3: tema, tokens e componentes construídos sobre o [Mantine Vue](https://mantine-vue.dev) (porte comunitário do Mantine). É o irmão do [`@jcdecor/ui`](../ui) (React): mesmos tokens, mesmo CSS, mesmos nomes de componentes.

- Paleta da marca em rampas OKLCH com contraste WCAG AA, Poppins, spacing, raios e sombras (tokens compartilhados com o React)
- Tema claro (padrão) e escuro, lembrado no localStorage, com variáveis CSS `--ds-*`
- Todo o `@mantine-vue/core` reexportado já temado, mais `KpiCard`, `Tag`, `PromoBanner`, `TopNav`, `DataTable`, `ProductCard`, `PriceTag`…
- `@jcdecor/vue/chat`: bolhas, conversa, composer, lista de conversas e layout de atendimento
- `@jcdecor/vue/charts`: gráficos do `@mantine-vue/charts` (ECharts) na paleta da marca, em pt-BR, claro/escuro
- `@jcdecor/vue/brand`: logos e ilustrações SVG recoloríveis

## Instalação

```bash
npm install @jcdecor/vue @mantine-vue/core @mantine-vue/hooks @mantine-vue/utils
# opcional: gráficos
npm install @mantine-vue/charts echarts vue-echarts
```

Adicione a fonte Poppins:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

## Uso

```ts
// main.ts
import '@mantine-vue/core/styles.css';
import '@jcdecor/vue/styles.css'; // sempre por último
```

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { JcProvider, Button, KpiCard, Tag, ProductCard } from '@jcdecor/vue';

const favorite = ref(false);
</script>

<template>
  <JcProvider>
    <KpiCard label="Acessos (60d)" :value="54959" :delta="-5.6" />
    <Tag tone="success" with-icon>Sucesso</Tag>
    <Button variant="accent">Destaque</Button>
    <ProductCard v-model:favorite="favorite" name="Cortina Linho" image="/linho.jpg" :price="389.9" @action="addToCart" />
  </JcProvider>
</template>
```

| Import | Conteúdo |
| --- | --- |
| `@jcdecor/vue` | `JcProvider`, `jcTheme`, `jcCssVariablesResolver`, todo o `@mantine-vue/core`, componentes JC, marca, formatadores pt-BR |
| `@jcdecor/vue/chat` | `ChatLayout`, `ChatHeader`, `ChatThread`, `ChatMessage`, `ChatComposer`, `ConversationList`, `TypingIndicator` |
| `@jcdecor/vue/charts` | `LineChart`, `AreaChart`, `BarChart`, `DonutChart`, `PieChart`, `Sparkline`, `ChartCard`… |
| `@jcdecor/vue/brand` | `JcLogo`, `JcLogoAlt`, `SpartanHelmet`, `GreekFrame`, `Collaborator` |
| `@jcdecor/vue/tokens` | tokens crus (`brand`, `ramps`, `semantic`, `typography`…) |
| `@jcdecor/vue/styles.css` | CSS dos componentes JC e overrides do tema |

## Diferenças em relação ao React

- Conteúdo que no React é `ReactNode` vira **prop ou slot** de mesmo nome (o slot vence): `<KpiCard><template #icon>…</template></KpiCard>`.
- Callbacks viram **eventos** (`@copy`, `@send`, `@select`, `@row-click`, `@action`) e estado controlado vira **v-model** (`v-model:sort`, `v-model:favorite`, `v-model:opened`, `v-model:period`, `v-model` no `ChatComposer`).
- `DataTable` aceita `#cell-<coluna>="{ row, index }"` além de `column.render`.
- Gráficos usam ECharts (canvas): as cores da marca são convertidas para hex e trocam sozinhas com o tema; a altura é `height` (`h` é aceito como alias).

Documentação: https://jc-decor.github.io/design-system/instalacao-vue — escolha **Vue** no seletor do topo para ver todos os exemplos, códigos e playgrounds em Vue.
