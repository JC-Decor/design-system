<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { AlphaSlider, ColorSwatch, Group, Stack, Text } from '@jcdecor/vue';

const COR = '#2F3E46';

const value = ref(0.55);
</script>

<template>
  <Stack w="100%" gap="sm">
    <Group justify="space-between">
      <Text fz="sm" :fw="500" c="var(--ds-text-2)">Opacidade do voil</Text>
      <Group gap="xs">
        <ColorSwatch :color="`rgba(47, 62, 70, ${value})`" :size="20" />
        <Text fz="sm">{{ Math.round(value * 100) }}%</Text>
      </Group>
    </Group>
    <AlphaSlider v-model="value" :color="COR" aria-label="Opacidade do voil" />
  </Stack>
</template>
