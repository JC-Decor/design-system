<script setup lang="ts">
import { Group } from '@jcdecor/vue';
import { DonutChart } from '@jcdecor/vue/charts';

const data = [
  { name: 'Orgânico', value: 24100 },
  { name: 'Pago', value: 12900 },
  { name: 'Social', value: 8800 },
  { name: 'E-mail', value: 4100 },
  { name: 'Direto', value: 5059 },
];
</script>

<template>
  <Group justify="center">
    <!-- No ECharts, thickness é o raio interno em % (quanto maior, mais fino o anel); a largura não segue size -->
    <DonutChart :data="data" chart-label="54.959 acessos" :chart-label-font-size="14" :size="200" :width="200" :thickness="54" />
  </Group>
</template>
