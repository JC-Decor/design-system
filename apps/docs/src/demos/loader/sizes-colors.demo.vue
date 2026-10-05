<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Loader, Stack } from '@jcdecor/vue';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <Stack align="center" gap="lg">
    <Group align="center" gap="lg">
      <Loader v-for="size in sizes" :key="size" :size="size" />
    </Group>
    <Group align="center" gap="lg">
      <Loader color="horizon" />
      <Loader color="evergreen" />
      <Loader color="obsidian" />
      <Loader color="danger" />
      <Loader color="gray" />
    </Group>
  </Stack>
</template>
