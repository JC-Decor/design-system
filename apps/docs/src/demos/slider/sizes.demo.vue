<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { Slider, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack w="100%" gap="lg">
    <Slider v-for="(size, i) in sizes" :key="size" :size="size" :default-value="20 + i * 15" :thumb-label="`Slider ${size}`" />
  </Stack>
</template>
