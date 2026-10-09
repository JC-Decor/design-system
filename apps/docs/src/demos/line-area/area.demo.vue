<script setup lang="ts">
import { formatCompact, formatCurrency } from '@jcdecor/vue';
import { AreaChart } from '@jcdecor/vue/charts';

const data = [
  { mes: 'Out', vendas: 128400 },
  { mes: 'Nov', vendas: 176900 },
  { mes: 'Dez', vendas: 214300 },
  { mes: 'Jan', vendas: 119800 },
  { mes: 'Fev', vendas: 124500 },
  { mes: 'Mar', vendas: 141200 },
  { mes: 'Abr', vendas: 142300 },
  { mes: 'Mai', vendas: 151800 },
  { mes: 'Jun', vendas: 138600 },
  { mes: 'Jul', vendas: 160200 },
  { mes: 'Ago', vendas: 172900 },
  { mes: 'Set', vendas: 184230 },
];

// Eixo Y do ECharts: o formatador dos rótulos fica em axisLabel.formatter
const yAxisProps = { axisLabel: { formatter: (value: number) => `R$ ${formatCompact(value)}` } };
</script>

<template>
  <AreaChart
    :data="data"
    data-key="mes"
    :series="[{ name: 'vendas', label: 'Vendas' }]"
    :value-formatter="formatCurrency"
    :y-axis-props="yAxisProps"
    with-gradient
  />
</template>
