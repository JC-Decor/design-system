<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { AlphaSlider, ColorSwatch, Group, HueSlider, Stack, Text } from '@jcdecor/vue';

const hue = ref(210);
const alpha = ref(0.8);
const base = computed(() => `hsl(${hue.value}, 40%, 45%)`);
const final = computed(() => `hsla(${hue.value}, 40%, 45%, ${alpha.value})`);
</script>

<template>
  <Group w="100%" wrap="nowrap" align="center">
    <ColorSwatch :color="final" :size="56" radius="sm" />
    <Stack gap="sm" style="flex: 1">
      <HueSlider v-model="hue" aria-label="Matiz" />
      <AlphaSlider v-model="alpha" :color="base" aria-label="Transparência" />
      <Text fz="xs" c="var(--ds-text-3)">{{ final }}</Text>
    </Stack>
  </Group>
</template>
