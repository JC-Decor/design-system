<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Burger, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group gap="xl" align="center">
    <Burger v-for="size in sizes" :key="size" :size="size" :aria-label="`Menu ${size}`" />
    <Burger opened color="horizon" aria-label="Menu aberto" />
  </Group>
</template>
