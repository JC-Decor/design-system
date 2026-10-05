<script setup lang="ts">
import { Group, Paper, RingProgress, SimpleGrid, Stack, Text } from '@jcdecor/vue';

const stats = [
  { label: 'Entregas no prazo', value: 92, color: 'evergreen' },
  { label: 'Taxa de conversão', value: 38, color: 'horizon' },
  { label: 'Devoluções', value: 6, color: 'danger' },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }">
    <Paper v-for="stat in stats" :key="stat.label" with-border p="sm">
      <Group gap="sm" wrap="nowrap">
        <RingProgress :size="64" :thickness="7" round-caps :sections="[{ value: stat.value, color: stat.color }]" />
        <Stack :gap="0">
          <Text fz="xs" c="var(--ds-text-3)">{{ stat.label }}</Text>
          <Text :fw="700" fz="lg">{{ stat.value }}%</Text>
        </Stack>
      </Group>
    </Paper>
  </SimpleGrid>
</template>
