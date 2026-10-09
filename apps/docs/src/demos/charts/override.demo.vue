<script setup lang="ts">
import { formatCurrency } from '@jcdecor/vue';
import { LineChart } from '@jcdecor/vue/charts';

const data = [
  { mes: 'Abr', receita: 240700, meta: 230000 },
  { mes: 'Mai', receita: 256700, meta: 240000 },
  { mes: 'Jun', receita: 250900, meta: 250000 },
  { mes: 'Jul', receita: 287000, meta: 260000 },
  { mes: 'Ago', receita: 312400, meta: 280000 },
  { mes: 'Set', receita: 335430, meta: 300000 },
];

const series = [
  { name: 'receita', label: 'Receita', color: 'evergreen.6' },
  { name: 'meta', label: 'Meta', color: 'gray.5', strokeDasharray: '5 5' },
];

const formatValue = (value: number) => formatCurrency(value, { maximumFractionDigits: 0 });
</script>

<template>
  <LineChart
    :data="data"
    data-key="mes"
    :height="300"
    curve-type="linear"
    with-legend
    :value-formatter="formatValue"
    :series="series"
  />
</template>
