<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Group align="center">
    <Button v-for="size in sizes" :key="size" :size="size">Botão {{ size }}</Button>
  </Group>
</template>
