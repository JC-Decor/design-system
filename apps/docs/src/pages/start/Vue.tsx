import { Link } from 'react-router-dom';
import { Alert, Anchor, Button, Group, List, Table } from '@jcdecor/ui';
import { IconAlertTriangle, IconBrandVue, IconExternalLink } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

/** O playground Vue é outro app, publicado ao lado do docs em <base>/vue/ (não é rota do react-router). */
const playgroundHref = `${import.meta.env.BASE_URL}vue/`;

const differences: [string, string, string][] = [
  ['Conteúdo (ReactNode)', '<ContentCard title={<b>Oi</b>} />', 'prop title (texto/VNode) ou slot #title — o slot vence'],
  ['Callbacks', 'onCopy, onSelect, onSend, onRowClick', '@copy, @select, @send, @row-click'],
  ['Estado controlado', 'value + onChange / favorite + onFavoriteChange', 'v-model, v-model:favorite, v-model:sort, v-model:opened, v-model:period'],
  ['Células da DataTable', 'column.render(row)', 'column.render(row) ou slot #cell-<coluna>="{ row }"'],
  ['Links (react-router)', 'linkComponent={Link}', ':link-component="RouterLink" (recebe to e href)'],
  ['Subcomponentes', 'Table.Thead, Tabs.Tab', 'TableThead, TabsTab (padrão do Mantine Vue)'],
  ['Gráficos', '@mantine/charts (Recharts, SVG)', '@mantine-vue/charts (ECharts, canvas) — cores resolvidas em hex por tema'],
  ['Altura dos gráficos', 'h={280}', ':height="280" (ou :h, aceito como alias)'],
];

export default function VuePage() {
  return (
    <DocPage
      kicker="Começando"
      title="Vue (@jcdecor/vue)"
      description={
        <>
          O mesmo Design System para Vue 3, sobre o <b>Mantine Vue</b> (porte comunitário do Mantine). Tokens, CSS dos
          componentes e o visual são compartilhados com o <b>@jcdecor/ui</b> — muda num, muda nos dois.
        </>
      }
    >
      <Group mt="lg">
        <Button component="a" href={playgroundHref} leftSection={<IconBrandVue size={18} />} rightSection={<IconExternalLink size={16} />}>
          Abrir o playground Vue
        </Button>
        <Button component="a" variant="outline" href="https://mantine-vue.dev/" target="_blank" rel="noreferrer">
          Docs do Mantine Vue
        </Button>
      </Group>

      <Section title="1. Instale os pacotes">
        <P>Requer Vue 3.5+ e Mantine Vue 3.5+ como peer dependencies.</P>
        <CodeBlock language="bash" code={`npm install @jcdecor/vue @mantine-vue/core @mantine-vue/hooks @mantine-vue/utils`} />
        <P>Opcional, para os gráficos (@jcdecor/vue/charts):</P>
        <CodeBlock language="bash" code={`npm install @mantine-vue/charts echarts vue-echarts`} />
      </Section>

      <Section title="2. Estilos e provider">
        <P>
          Fonte Poppins igual à do React (veja <Anchor component={Link} to="/instalacao">Instalação</Anchor>). Importe os CSS na ordem abaixo — o
          do DS por último — e envolva a aplicação com <code>JcProvider</code>.
        </P>
        <CodeBlock
          fileName="main.ts"
          language="ts"
          code={`import '@mantine-vue/core/styles.css';
// import '@mantine-vue/charts/styles.css'; // só para ChartTooltip/ChartLegend avulsos
import '@jcdecor/vue/styles.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`}
        />
        <CodeBlock
          fileName="App.vue"
          language="vue"
          code={`<script setup lang="ts">
import { JcProvider } from '@jcdecor/vue';
</script>

<template>
  <JcProvider>
    <RouterView />
  </JcProvider>
</template>`}
        />
        <P>
          O <code>JcProvider</code> lembra o tema claro/escuro no localStorage (mesma chave do Mantine React). Use{' '}
          <code>:color-scheme-storage-key="false"</code> para desligar.
        </P>
      </Section>

      <Section title="3. Importe e use">
        <CodeBlock
          language="vue"
          code={`<script setup lang="ts">
import { ref } from 'vue';
import { Button, KpiCard, Tag, ProductCard } from '@jcdecor/vue';
import { ChatThread, ChatComposer } from '@jcdecor/vue/chat';
import { LineChart, ChartCard } from '@jcdecor/vue/charts';
import { JcLogo } from '@jcdecor/vue/brand';
import { brand, ramps } from '@jcdecor/vue/tokens';

const favorite = ref(false);
</script>

<template>
  <KpiCard label="Acessos (60d)" :value="54959" :delta="-5.6" />
  <Tag tone="success" with-icon>Entregue</Tag>
  <Button variant="accent">Destaque</Button>

  <ProductCard
    v-model:favorite="favorite"
    name="Cortina Linho"
    image="/linho.jpg"
    :price="389.9"
    :old-price="499.9"
    @action="addToCart"
  >
    <template #badges><Tag tone="success" variant="filled">Frete grátis</Tag></template>
  </ProductCard>
</template>`}
        />
      </Section>

      <Section title="React × Vue" description="Mesmos nomes de componentes, props e padrões; o que muda é o idioma do framework.">
        <Table.ScrollContainer minWidth={640} mt="sm">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Conceito</Table.Th>
                <Table.Th>@jcdecor/ui (React)</Table.Th>
                <Table.Th>@jcdecor/vue</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {differences.map(([concept, react, vue]) => (
                <Table.Tr key={concept}>
                  <Table.Td fw={600}>{concept}</Table.Td>
                  <Table.Td><code>{react}</code></Table.Td>
                  <Table.Td><code>{vue}</code></Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Section>

      <Section title="O que é compartilhado com o React">
        <List spacing="xs" mt="sm" c="var(--ds-text-2)">
          <List.Item><b>Tokens</b> (<code>theme/tokens.ts</code>), formatação pt-BR, CSS modules dos componentes e da marca, utilitários do chat.</List.Item>
          <List.Item>
            São cópias geradas de <code>packages/ui/src</code> por <code>npm run sync -w @jcdecor/vue</code>; o teste{' '}
            <code>shared.test.ts</code> falha se alguém editar um lado sem sincronizar.
          </List.Item>
          <List.Item>O tema (<code>jcTheme</code>), resolvers de cor/variáveis e overrides de componentes têm o mesmo conteúdo, com imports do Mantine Vue.</List.Item>
        </List>
      </Section>

      <Section title="Limitações conhecidas do Mantine Vue 3.5">
        <Alert icon={<IconAlertTriangle />} color="electric" title="Contornadas no @jcdecor/vue" mt="sm">
          <List spacing={4} size="sm">
            <List.Item>
              Alguns componentes fixam padrões que vencem o tema (ex.: <code>size="sm"</code> no NumberInput, <code>withBorder</code> no Card).
              O DS exporta versões que respeitam o <code>defaultProps</code> do tema: Card, NumberInput, FileInput, PillsInput, Combobox,
              Cascader, Table, Tooltip, NumberFormatter, CheckboxIndicator e FloatingWindow.
            </List.Item>
            <List.Item>
              Gráficos em canvas não leem variáveis CSS: os wrappers convertem a paleta da marca para hex e trocam as cores ao
              alternar o tema. Atalhos booleanos de template (<code>with-legend</code>) também são corrigidos.
            </List.Item>
            <List.Item>Não existe <code>createTheme</code>/<code>mergeThemeOverrides</code>: o tema é um objeto e o <code>JcProvider</code> mescla overrides.</List.Item>
          </List>
        </Alert>
      </Section>
    </DocPage>
  );
}
