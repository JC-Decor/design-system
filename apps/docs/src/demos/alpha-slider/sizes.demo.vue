<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { AlphaSlider, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack w="100%">
    <AlphaSlider
      v-for="size in sizes"
      :key="size"
      :size="size"
      color="#C9A27E"
      :model-value="0.7"
      :aria-label="`Opacidade ${size}`"
    />
  </Stack>
</template>
