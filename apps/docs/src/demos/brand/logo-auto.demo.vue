<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
// variant="auto" (padrão): azul no tema claro, branco no tema escuro. Alterne o tema no topo da página.
import { Group, JcLogo, Text } from '@jcdecor/vue';
</script>

<template>
  <Group gap="xl" align="center">
    <JcLogo :size="48" />
    <Text fz="sm" c="dimmed">← muda com o tema</Text>
  </Group>
</template>
