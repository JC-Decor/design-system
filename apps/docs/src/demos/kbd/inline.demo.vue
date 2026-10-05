<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Kbd, Text } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <div>
    <Text ta="center">Pressione <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> para buscar em todo o catálogo.</Text>
    <Group justify="center" mt="md" gap="xs">
      <Kbd v-for="size in sizes" :key="size" :size="size">Enter</Kbd>
    </Group>
  </div>
</template>
