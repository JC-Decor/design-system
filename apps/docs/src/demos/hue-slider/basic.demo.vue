<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ColorSwatch, Group, HueSlider, Stack, Text } from '@jcdecor/vue';

const hue = ref(28);
</script>

<template>
  <Stack w="100%" gap="sm">
    <Group justify="space-between">
      <Text fz="sm" :fw="500" c="var(--ds-text-2)">Tom da almofada</Text>
      <Group gap="xs">
        <ColorSwatch :color="`hsl(${hue}, 45%, 55%)`" :size="20" />
        <Text fz="sm">{{ hue }}°</Text>
      </Group>
    </Group>
    <HueSlider v-model="hue" aria-label="Tom da almofada" />
  </Stack>
</template>
