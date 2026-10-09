<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ThemeToggle, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <ThemeToggle />
    <ThemeToggle variant="default" />
    <ThemeToggle variant="light" color="horizon" radius="xl" />
  </Group>
</template>
