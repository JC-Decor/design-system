<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, JcLogoAlt, Paper } from '@jcdecor/vue';
</script>

<template>
  <Group gap="lg" align="center">
    <JcLogoAlt :size="72" />
    <JcLogoAlt :size="72" color="horizon.6" stroke-color="none" />
    <JcLogoAlt :size="72" color="obsidian.6" letters-color="electric.3" stroke-color="none" />
    <Paper p="md" bg="obsidian.6" radius="md">
      <JcLogoAlt :size="56" variant="dark" letters-color="obsidian.6" />
    </Paper>
  </Group>
</template>
