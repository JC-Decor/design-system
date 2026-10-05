<script setup lang="ts">
import { Group } from '@jcdecor/vue';
import { PieChart } from '@jcdecor/vue/charts';

const data = [
  { name: 'Sudeste', value: 58 },
  { name: 'Sul', value: 19 },
  { name: 'Nordeste', value: 12 },
  { name: 'Centro-Oeste e Norte', value: 11 },
];

// labelsType aceita só 'value' | 'percent' no Mantine Vue: o nome da fatia vem do rótulo do ECharts ({b})
const nameLabels = { label: { show: true, position: 'outside', formatter: '{b}' } };
</script>

<template>
  <Group justify="center" :gap="48">
    <PieChart :data="data" with-labels labels-type="percent" labels-position="inside" :size="200" :width="200" />
    <PieChart :data="data" with-labels with-labels-line labels-position="outside" :pie-props="nameLabels" :size="180" :width="320" />
  </Group>
</template>
