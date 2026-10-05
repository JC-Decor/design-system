<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, Group, Loader, Paper, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack>
    <Paper with-border p="md">
      <Group gap="sm" wrap="nowrap">
        <Loader size="sm" />
        <Text fz="sm" c="var(--ds-text-2)">Calculando o frete para o CEP 13010-000…</Text>
      </Group>
    </Paper>
    <Group>
      <Button loading>Finalizar compra</Button>
      <Button variant="outline" loading :loader-props="{ type: 'dots' }">Aplicando cupom</Button>
    </Group>
  </Stack>
</template>
