<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ColorPicker, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
</script>

<template>
  <Group align="flex-start" justify="center">
    <ColorPicker v-for="size in sizes" :key="size" :size="size" format="rgba" default-value="rgba(91, 107, 90, 0.8)" />
  </Group>
</template>
