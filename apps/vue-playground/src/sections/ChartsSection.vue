<script setup lang="ts">
import { ref } from 'vue';
import { SimpleGrid } from '@jcdecor/vue';
import { AreaChart, BarChart, ChartCard, DonutChart, LineChart, Sparkline } from '@jcdecor/vue/charts';
import Demo from '../Demo.vue';
import Section from '../Section.vue';

const vendas = [
  { mes: 'Mai', cortinas: 182, persianas: 96, papel: 54 },
  { mes: 'Jun', cortinas: 210, persianas: 120, papel: 61 },
  { mes: 'Jul', cortinas: 195, persianas: 134, papel: 70 },
  { mes: 'Ago', cortinas: 248, persianas: 150, papel: 66 },
  { mes: 'Set', cortinas: 276, persianas: 171, papel: 82 },
  { mes: 'Out', cortinas: 301, persianas: 188, papel: 90 },
];
const series = [{ name: 'cortinas', label: 'Cortinas' }, { name: 'persianas', label: 'Persianas' }, { name: 'papel', label: 'Papel de parede' }];
const canais = [
  { name: 'Site', value: 5420 },
  { name: 'Loja física', value: 2310 },
  { name: 'WhatsApp', value: 1870 },
  { name: 'Marketplace', value: 960 },
];
const period = ref('6m');
</script>

<template>
  <Section id="graficos" kicker="@jcdecor/vue/charts" title="Gráficos" description="Wrappers do @mantine-vue/charts (ECharts) com a paleta da marca resolvida em hex por tema — alterne o tema escuro para ver as cores mudarem.">
    <SimpleGrid :cols="{ base: 1, md: 2 }" mt="md">
      <ChartCard kicker="Vendas" title="Unidades por categoria" value="1.315" v-model:period="period" :periods="['3m', '6m', '12m']">
        <LineChart :data="vendas" data-key="mes" :series="series" with-legend />
      </ChartCard>
      <ChartCard title="Receita acumulada" description="Mil R$">
        <AreaChart :data="vendas" data-key="mes" :series="series" type="stacked" />
      </ChartCard>
      <ChartCard title="Pedidos por mês">
        <BarChart :data="vendas" data-key="mes" :series="series.slice(0, 2)" />
      </ChartCard>
      <ChartCard title="Pedidos por canal">
        <DonutChart :data="canais" with-labels-line with-labels :height="240" />
      </ChartCard>
    </SimpleGrid>
    <Demo title="Sparkline">
      <Sparkline :data="[12, 18, 15, 22, 28, 24, 31, 35]" :w="220" />
    </Demo>
  </Section>
</template>
