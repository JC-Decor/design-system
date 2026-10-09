<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, Group } from '@jcdecor/vue';
import { IconShare } from '@tabler/icons-vue';

const sizes = [
  { size: 'xs', icon: 14 },
  { size: 'sm', icon: 16 },
  { size: 'md', icon: 18 },
  { size: 'lg', icon: 20 },
  { size: 'xl', icon: 24 },
] as const;
</script>

<template>
  <Group align="center">
    <ActionIcon v-for="{ size, icon } in sizes" :key="size" :size="size" variant="outline" :aria-label="`Compartilhar (${size})`">
      <IconShare :size="icon" />
    </ActionIcon>
    <ActionIcon size="input-md" variant="filled" aria-label="Compartilhar (altura de input)">
      <IconShare :size="18" />
    </ActionIcon>
  </Group>
</template>
