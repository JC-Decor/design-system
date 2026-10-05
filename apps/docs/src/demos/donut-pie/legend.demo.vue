<script setup lang="ts">
import { ColorSwatch, Group, Stack, Text, formatCurrency, formatPercent } from '@jcdecor/vue';
import { DonutChart, paletteColor } from '@jcdecor/vue/charts';

const data = [
  { name: 'Pisos', value: 67800 },
  { name: 'Papel de parede', value: 39400 },
  { name: 'Cortinas', value: 31900 },
  { name: 'Grama sintética', value: 26300 },
  { name: 'Painéis', value: 18830 },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

const formatValue = (value: number) => formatCurrency(value, { maximumFractionDigits: 0 });
</script>

<template>
  <Group justify="center" :gap="48" wrap="wrap">
    <DonutChart :data="data" :size="180" :width="180" :value-formatter="formatValue" tooltip-data-source="segment" />
    <Stack gap="xs" :miw="260">
      <Group v-for="(item, index) in data" :key="item.name" justify="space-between" gap="xl">
        <Group gap="xs">
          <ColorSwatch :color="paletteColor(index)" :size="12" :with-shadow="false" />
          <Text fz="sm">{{ item.name }}</Text>
        </Group>
        <Text fz="sm" :fw="600" :style="{ fontVariantNumeric: 'tabular-nums' }">
          {{ formatPercent((item.value / total) * 100) }}
        </Text>
      </Group>
    </Stack>
  </Group>
</template>
