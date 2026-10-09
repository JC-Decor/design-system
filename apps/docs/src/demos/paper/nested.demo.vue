<script lang="ts">
export const meta = { background: 'page' };
</script>

<script setup lang="ts">
import { Paper, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Paper shadow="sm" p="lg" w="100%">
    <Text :fw="600">Endereço de entrega</Text>
    <Stack gap="sm" mt="sm">
      <Paper with-border p="md">
        <Text fz="sm">Rua das Palmeiras, 120 — São Paulo/SP</Text>
      </Paper>
      <Paper p="md" bg="var(--ds-surface-2)">
        <Text fz="sm" c="var(--ds-text-2)">Dentro de uma superfície, use borda ou --ds-surface-2 em vez de outra sombra.</Text>
      </Paper>
    </Stack>
  </Paper>
</template>
