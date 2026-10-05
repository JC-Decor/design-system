<script setup lang="ts">
import { Group, Stack, Text } from '@jcdecor/vue';
import { Sparkline } from '@jcdecor/vue/charts';

const trendColors = { positive: 'evergreen.6', negative: 'danger.6', neutral: 'gray.5' };

const items = [
  { label: 'Pedidos', data: [42, 48, 45, 53, 58, 61, 66] },
  { label: 'Ticket médio', data: [412, 398, 405, 389, 380, 371, 366] },
  { label: 'Devoluções', data: [12, 12, 13, 12, 12, 13, 12] },
];
</script>

<template>
  <Group gap="xl">
    <Stack v-for="item in items" :key="item.label" :gap="6">
      <Text fz="sm" :fw="600">{{ item.label }}</Text>
      <Sparkline :width="180" :data="item.data" :trend-colors="trendColors" />
    </Stack>
  </Group>
</template>
