<script setup lang="ts">
import { Group } from '@jcdecor/vue';
import { DonutChart } from '@jcdecor/vue/charts';

const data = [
  { name: 'Pix', value: 412 },
  { name: 'Cartão', value: 698 },
  { name: 'Boleto', value: 174 },
];
</script>

<template>
  <Group justify="center" :gap="48">
    <DonutChart :data="data" with-labels with-labels-line labels-type="percent" :size="180" :width="300" />
    <DonutChart :data="data" :start-angle="180" :end-angle="0" :size="200" :width="200" chart-label="1.284 pedidos" :chart-label-font-size="14" />
  </Group>
</template>
