<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Pill, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack align="center">
    <Group v-for="size in sizes" :key="size" gap="xs">
      <Pill :size="size">Tamanho {{ size }}</Pill>
      <Pill :size="size" with-remove-button>Removível</Pill>
    </Group>
  </Stack>
</template>
