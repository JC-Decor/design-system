<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { RangeSlider, Stack, Text } from '@jcdecor/vue';

const marks = [
  { value: 1, label: '1 m' },
  { value: 2, label: '2 m' },
  { value: 3, label: '3 m' },
  { value: 4, label: '4 m' },
  { value: 5, label: '5 m' },
];

const metros = (v: number) => `${v.toFixed(1).replace('.', ',')} m`;
</script>

<template>
  <Stack w="100%" gap="xs" pb="lg">
    <Text fz="sm" :fw="500" c="var(--ds-text-2)">Altura do pé-direito</Text>
    <RangeSlider
      :min="1"
      :max="5"
      :step="0.1"
      :marks="marks"
      :default-value="[2.4, 3.2]"
      :label="metros"
      :thumb-label="['Altura mínima', 'Altura máxima']"
    />
  </Stack>
</template>
