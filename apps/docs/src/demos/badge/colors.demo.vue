<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Badge, Group, Stack } from '@jcdecor/vue';

const colors = [
  { color: 'horizon', label: 'Novidade' },
  { color: 'evergreen', label: 'Em estoque' },
  { color: 'electric', label: 'Últimas unidades' },
  { color: 'danger', label: 'Esgotado' },
  { color: 'obsidian', label: 'Rascunho' },
];
const variants = ['light', 'filled'] as const;
</script>

<template>
  <Stack align="center">
    <Group v-for="variant in variants" :key="variant" justify="center">
      <Badge v-for="{ color, label } in colors" :key="color" :color="color" :variant="variant">{{ label }}</Badge>
    </Group>
  </Stack>
</template>
