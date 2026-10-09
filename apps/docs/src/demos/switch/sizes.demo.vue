<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Switch } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group justify="center">
    <Switch v-for="size in sizes" :key="size" :size="size" default-checked :aria-label="`Switch ${size}`" />
  </Group>
</template>
