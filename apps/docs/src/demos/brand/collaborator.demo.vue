<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Avatar, Collaborator, Group, ThemeIcon } from '@jcdecor/vue';
</script>

<template>
  <Group gap="xl" align="center">
    <Collaborator :size="96" />
    <Collaborator :size="96" head-color="horizon.6" body-color="obsidian.6" />
    <Collaborator :size="96" head-color="electric.3" body-color="horizon.6" />
    <ThemeIcon :size="56" radius="xl" variant="light">
      <Collaborator :size="30" />
    </ThemeIcon>
    <Avatar :size="56" color="horizon">
      <Collaborator :size="28" head-color="electric.3" />
    </Avatar>
  </Group>
</template>
