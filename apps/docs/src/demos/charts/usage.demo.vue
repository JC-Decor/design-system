<script setup lang="ts">
import { AreaChart } from '@jcdecor/vue/charts';

const data = [
  { mes: 'Abr', loja: 142300, site: 98400 },
  { mes: 'Mai', loja: 151800, site: 104900 },
  { mes: 'Jun', loja: 138600, site: 112300 },
  { mes: 'Jul', loja: 160200, site: 126800 },
  { mes: 'Ago', loja: 172900, site: 139500 },
  { mes: 'Set', loja: 184230, site: 151200 },
];

const series = [
  { name: 'loja', label: 'Loja física' },
  { name: 'site', label: 'E-commerce' },
];
</script>

<template>
  <AreaChart :data="data" data-key="mes" with-legend :series="series" />
</template>
