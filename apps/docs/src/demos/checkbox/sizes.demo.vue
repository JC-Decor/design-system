<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Checkbox, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group justify="center">
    <Checkbox v-for="size in sizes" :key="size" :size="size" :label="size" default-checked />
  </Group>
</template>
