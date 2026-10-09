<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Rating, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack align="center">
    <Rating v-for="size in sizes" :key="size" :size="size" :default-value="4" read-only :aria-label="`Nota ${size}`" />
  </Stack>
</template>
