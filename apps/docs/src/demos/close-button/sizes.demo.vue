<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { CloseButton, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group align="center">
    <CloseButton v-for="size in sizes" :key="size" :size="size" :aria-label="`Fechar (${size})`" />
  </Group>
</template>
