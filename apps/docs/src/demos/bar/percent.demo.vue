<script setup lang="ts">
import { BarChart } from '@jcdecor/vue/charts';

const data = [
  { canal: 'Orgânico', novos: 68, recorrentes: 32 },
  { canal: 'Pago', novos: 81, recorrentes: 19 },
  { canal: 'Social', novos: 74, recorrentes: 26 },
  { canal: 'E-mail', novos: 22, recorrentes: 78 },
  { canal: 'Direto', novos: 35, recorrentes: 65 },
];

const series = [
  { name: 'novos', label: 'Novos clientes' },
  { name: 'recorrentes', label: 'Recorrentes' },
];
</script>

<template>
  <BarChart :data="data" data-key="canal" type="percent" with-legend :series="series" />
</template>
