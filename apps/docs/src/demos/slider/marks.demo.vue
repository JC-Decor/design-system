<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { Slider, Stack, Text } from '@jcdecor/vue';

const marks = [
  { value: 0, label: 'Blackout' },
  { value: 25, label: '75%' },
  { value: 50, label: '50%' },
  { value: 75, label: '25%' },
  { value: 100, label: 'Voil' },
];
</script>

<template>
  <Stack w="100%" gap="xs" pb="lg">
    <Text fz="sm" :fw="500" c="var(--ds-text-2)">Bloqueio de luz do tecido</Text>
    <Slider :default-value="25" :step="25" :marks="marks" restrict-to-marks :label="null" thumb-label="Bloqueio de luz" />
  </Stack>
</template>
