<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Badge, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group justify="center" align="center">
    <Badge v-for="size in sizes" :key="size" :size="size">Badge {{ size }}</Badge>
  </Group>
</template>
