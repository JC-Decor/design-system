<script setup lang="ts">
import { ref } from 'vue';
import {
  Button,
  ColorRamp,
  ContentCard,
  DataTable,
  Disclaimer,
  Display,
  Headline,
  KpiCard,
  KpiGroup,
  PageHeader,
  PromoBanner,
  SimpleGrid,
  Group,
  Stack,
  Subheadline,
  Tag,
  TokenSwatch,
  tokens,
  type DataTableColumn,
  type DataTableSort,
} from '@jcdecor/vue';
import { IconEye, IconShoppingCart, IconTruckDelivery } from '@tabler/icons-vue';
import Demo from '../Demo.vue';
import Section from '../Section.vue';

const ramp = (name: keyof typeof tokens.ramps) =>
  Object.entries(tokens.ramps[name])
    .reverse()
    .map(([label, value]) => ({ label, value }));

interface Pedido {
  id: string;
  cliente: string;
  status: 'Entregue' | 'Em trânsito' | 'Cancelado';
  total: number;
}
const pedidos: Pedido[] = [
  { id: '#1042', cliente: 'Ana Souza', status: 'Entregue', total: 1890.5 },
  { id: '#1043', cliente: 'Bruno Lima', status: 'Em trânsito', total: 459.9 },
  { id: '#1044', cliente: 'Carla Dias', status: 'Cancelado', total: 129 },
  { id: '#1045', cliente: 'Diego Melo', status: 'Entregue', total: 2399 },
  { id: '#1046', cliente: 'Elisa Rocha', status: 'Em trânsito', total: 780.25 },
  { id: '#1047', cliente: 'Fábio Nunes', status: 'Entregue', total: 99.9 },
];
const columns: DataTableColumn<Pedido>[] = [
  { key: 'id', header: 'Pedido', sortable: true },
  { key: 'cliente', header: 'Cliente', sortable: true },
  { key: 'status', header: 'Status' },
  { key: 'total', header: 'Total', numeric: true, sortable: true, format: { style: 'currency', currency: 'BRL' } },
];
const tone = { Entregue: 'success', 'Em trânsito': 'primary', Cancelado: 'error' } as const;
const sort = ref<DataTableSort<Pedido> | null>({ key: 'total', direction: 'desc' });
const lastClick = ref('');
const banner = ref(true);
</script>

<template>
  <Section id="fundamentos" kicker="Fundamentos" title="Cores e tipografia" description="Os mesmos tokens do @jcdecor/ui (arquivos compartilhados): paleta OKLCH com contraste AA e Poppins em tamanhos fixos.">
    <Demo title="Cores da marca (clique para copiar)">
      <SimpleGrid :cols="{ base: 2, sm: 3, md: 5 }">
        <TokenSwatch v-for="(value, name) in tokens.brand" :key="name" :name="String(name)" :value="value" :css-var="`--dc-${name}`" />
      </SimpleGrid>
      <Stack mt="lg" gap="xs">
        <ColorRamp :steps="ramp('horizon')" />
        <ColorRamp :steps="ramp('evergreen')" />
        <ColorRamp :steps="ramp('electric')" />
      </Stack>
    </Demo>
    <Demo title="Tipografia">
      <Display size="sm">Display — cortinas sob medida</Display>
      <Headline size="lg" mt="sm">Headline large</Headline>
      <Headline size="md">Headline medium</Headline>
      <Subheadline size="lg" c="var(--ds-text-2)" mt="xs">Corpo grande para textos de apoio.</Subheadline>
      <Disclaimer mt="xs">Disclaimer: preços válidos até 31/10 ou enquanto durarem os estoques.</Disclaimer>
    </Demo>
  </Section>

  <Section id="componentes" kicker="Componentes JC" title="Componentes da marca" description="KpiCard, Tag, PromoBanner, PageHeader, ContentCard e DataTable — mesma API do React, com slots e v-model no lugar de ReactNode e callbacks.">
    <Demo title="PageHeader">
      <PageHeader kicker="Painel" title="Pedidos" description="Acompanhe vendas, entregas e cancelamentos." :breadcrumbs="[{ label: 'Início', href: '#' }, { label: 'Pedidos' }]">
        <template #actions>
          <Button variant="outline">Exportar</Button>
          <Button>Novo pedido</Button>
        </template>
      </PageHeader>
    </Demo>

    <Demo title="KpiCard + KpiGroup">
      <KpiGroup>
        <KpiCard label="Acessos (60d)" :value="54959" :delta="-5.6" delta-label="vs. período anterior">
          <template #icon><IconEye :size="18" /></template>
        </KpiCard>
        <KpiCard label="Pedidos" :value="1284" :delta="12.4" delta-label="vs. mês anterior">
          <template #icon><IconShoppingCart :size="18" /></template>
        </KpiCard>
        <KpiCard label="Taxa de rejeição" value="38,2%" :delta="-2.1" invert-delta color-value />
        <KpiCard label="Entregas no prazo" value="96%" :delta="0" loading />
      </KpiGroup>
    </Demo>

    <Demo title="Tag">
      <Group>
        <Tag>Primário</Tag>
        <Tag tone="success" with-icon>Entregue</Tag>
        <Tag tone="warn" with-icon>Atrasado</Tag>
        <Tag tone="error" with-icon>Cancelado</Tag>
        <Tag tone="neutral">Rascunho</Tag>
        <Tag tone="primary" variant="filled">Filled</Tag>
        <Tag tone="success" variant="dot">Online</Tag>
      </Group>
    </Demo>

    <Demo title="PromoBanner (v-model:opened)">
      <Stack>
        <PromoBanner v-model:opened="banner" highlight="CUPOM10" with-close-button radius="md">
          <template #icon><IconTruckDelivery :size="18" /></template>
          Frete grátis acima de R$ 299 e 10% na primeira compra:
        </PromoBanner>
        <Button v-if="!banner" variant="subtle" w="fit-content" @click="banner = true">Mostrar banner de novo</Button>
        <PromoBanner variant="electric" radius="md" highlight="até 40% OFF">Semana da decoração:</PromoBanner>
        <PromoBanner variant="obsidian" radius="md">Atendimento de seg. a sáb., 8h às 18h</PromoBanner>
      </Stack>
    </Demo>

    <Demo title="ContentCard">
      <SimpleGrid :cols="{ base: 1, sm: 3 }">
        <ContentCard kicker="Guia" title="Como medir sua janela" image="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=70">
          Três medidas simples para acertar o tamanho da cortina.
          <template #actions><Button variant="subtle" size="sm">Ler guia</Button></template>
        </ContentCard>
        <ContentCard kicker="Inspiração" title="Sala clean com linho" image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=70">
          Tons neutros e tecidos naturais para ambientes claros.
        </ContentCard>
        <ContentCard kicker="Serviço" title="Instalação profissional">Agende a visita técnica gratuita na Grande SP.</ContentCard>
      </SimpleGrid>
    </Demo>

    <Demo title="DataTable (v-model:sort, slot #cell-status, paginação, @row-click)">
      <DataTable v-model:sort="sort" :columns="columns" :data="pedidos" :page-size="4" :row-key="(r) => r.id" @row-click="(row) => (lastClick = row.cliente)">
        <template #cell-status="{ row }">
          <Tag :tone="tone[(row as Pedido).status]">{{ row.status }}</Tag>
        </template>
      </DataTable>
      <Disclaimer mt="sm">Ordenação: {{ sort ? `${sort.key} ${sort.direction}` : 'nenhuma' }} · Última linha clicada: {{ lastClick || '—' }}</Disclaimer>
    </Demo>
  </Section>
</template>
