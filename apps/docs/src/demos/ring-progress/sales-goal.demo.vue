<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Paper, RingProgress, Stack, Text } from '@jcdecor/vue';

const sold = 184_000;
const goal = 250_000;
const percent = Math.round((sold / goal) * 100);
</script>

<template>
  <Paper with-border p="lg">
    <Group gap="lg" wrap="nowrap">
      <RingProgress :size="132" :thickness="14" round-caps :sections="[{ value: percent, color: 'horizon' }]">
        <template #label>
          <Text ta="center" :fw="700" fz="xl">{{ percent }}%</Text>
        </template>
      </RingProgress>
      <Stack :gap="2">
        <Text fz="sm" c="var(--ds-text-3)">Meta de vendas · outubro</Text>
        <Text :fw="700" fz="xl">R$ 184 mil</Text>
        <Text fz="sm" c="var(--ds-text-2)">de R$ 250 mil — faltam 12 dias</Text>
      </Stack>
    </Group>
  </Paper>
</template>
