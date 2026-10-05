<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Radio } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group justify="center">
    <Radio v-for="size in sizes" :key="size" :size="size" :label="size" name="tamanhos" :default-checked="size === 'md'" />
  </Group>
</template>
