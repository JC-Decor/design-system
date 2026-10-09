<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Paper, SpartanHelmet } from '@jcdecor/vue';
</script>

<template>
  <Group gap="xl" align="center">
    <SpartanHelmet :size="120" />
    <SpartanHelmet :size="120" crest-color="danger.6" />
    <SpartanHelmet :size="120" crest-color="electric.3" color="obsidian.6" face-color="obsidian.0" />
    <Paper p="md" bg="horizon.6" radius="md">
      <SpartanHelmet :size="96" color="#FFFFFF" crest-color="electric.3" face-color="horizon.6" />
    </Paper>
  </Group>
</template>
