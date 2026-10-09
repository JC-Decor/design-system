<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Tag, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group align="center">
    <Tag v-for="size in sizes" :key="size" :size="size" tone="success" with-icon>Em estoque</Tag>
  </Group>
</template>
