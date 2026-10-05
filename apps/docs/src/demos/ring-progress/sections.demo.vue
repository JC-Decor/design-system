<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, RingProgress, Stack, Text } from '@jcdecor/vue';

const channels = [
  { value: 55, color: 'horizon', tooltip: 'Site — 55%' },
  { value: 30, color: 'evergreen', tooltip: 'Marketplace — 30%' },
  { value: 15, color: 'electric', tooltip: 'Loja física — 15%' },
];
</script>

<template>
  <Group gap="xl">
    <Stack align="center" :gap="4">
      <RingProgress :size="120" :thickness="12" round-caps :sections="[{ value: 82, color: 'evergreen' }]">
        <template #label>
          <Text ta="center" :fw="700" fz="lg">82%</Text>
        </template>
      </RingProgress>
      <Text fz="sm" c="var(--ds-text-2)">Entregas no prazo</Text>
    </Stack>
    <Stack align="center" :gap="4">
      <RingProgress :size="120" :thickness="12" :sections="channels">
        <template #label>
          <Text ta="center" fz="xs" c="var(--ds-text-3)">Canais</Text>
        </template>
      </RingProgress>
      <Text fz="sm" c="var(--ds-text-2)">Origem dos pedidos</Text>
    </Stack>
  </Group>
</template>
