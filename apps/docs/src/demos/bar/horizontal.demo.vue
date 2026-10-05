<script setup lang="ts">
import { formatCurrency } from '@jcdecor/vue';
import { BarChart } from '@jcdecor/vue/charts';

const data = [
  { categoria: 'Pisos', receita: 67800 },
  { categoria: 'Papel de parede', receita: 39400 },
  { categoria: 'Cortinas', receita: 31900 },
  { categoria: 'Grama sintética', receita: 26300 },
  { categoria: 'Painéis', receita: 18830 },
];

const formatValue = (value: number) => formatCurrency(value, { maximumFractionDigits: 0 });
</script>

<template>
  <!-- Eixos recebem opções do ECharts: inverse mantém a 1ª categoria no topo; splitNumber espaça os valores -->
  <BarChart
    :data="data"
    data-key="categoria"
    orientation="vertical"
    :height="260"
    :value-formatter="formatValue"
    :y-axis-props="{ inverse: true }"
    :x-axis-props="{ splitNumber: 4 }"
    :series="[{ name: 'receita', label: 'Receita em setembro' }]"
  />
</template>
