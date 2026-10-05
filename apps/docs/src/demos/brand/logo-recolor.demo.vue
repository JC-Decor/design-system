<script setup lang="ts">
import { Group, JcLogo, Paper } from '@jcdecor/vue';
</script>

<template>
  <Group gap="md" grow>
    <Paper p="lg" bg="obsidian.6">
      <JcLogo :size="40" variant="dark" shield-color="electric.3" />
    </Paper>
    <Paper p="lg" bg="electric.3">
      <JcLogo :size="40" color="obsidian.6" />
    </Paper>
    <Paper p="lg" with-border>
      <JcLogo :size="40" shield-color="horizon.6" letters-color="obsidian.6" wordmark-color="var(--ds-text)" />
    </Paper>
    <Paper p="lg" with-border>
      <JcLogo :size="40" color="var(--ds-text)" />
    </Paper>
  </Group>
</template>
