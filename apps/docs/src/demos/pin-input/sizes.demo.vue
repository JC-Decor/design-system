<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { PinInput, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack align="center">
    <PinInput v-for="size in sizes" :key="size" :size="size" :aria-label="`Código ${size}`" placeholder="•" />
  </Stack>
</template>
