<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ThemeToggle, Group } from '@jcdecor/vue';
</script>

<template>
  <Group>
    <ThemeToggle as="button" />
    <ThemeToggle as="button" variant="subtle" label="Modo escuro" />
  </Group>
</template>
