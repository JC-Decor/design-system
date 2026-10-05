<script setup lang="ts">
import { Group, Stack, Text } from '@jcdecor/vue';
import { Sparkline, type SparklineProps } from '@jcdecor/vue/charts';

const series: { label: string; props: Partial<SparklineProps> }[] = [
  { label: 'Padrão (paleta)', props: {} },
  { label: 'color="evergreen.6"', props: { color: 'evergreen.6' } },
  { label: 'color="electric.4"', props: { color: 'electric.4' } },
  { label: ':with-gradient="false"', props: { color: 'gray.5', withGradient: false, fillOpacity: 0.15 } },
];
</script>

<template>
  <Group gap="xl">
    <Stack v-for="{ label, props } in series" :key="label" :gap="6">
      <Sparkline :width="160" :data="[30, 42, 38, 55, 49, 62, 70]" v-bind="props" />
      <Text fz="xs" c="var(--ds-text-3)" ff="monospace">{{ label }}</Text>
    </Stack>
  </Group>
</template>
