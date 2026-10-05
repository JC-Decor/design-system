<script lang="ts">
export const meta = { centered: true, maxWidth: 380, background: 'page' };
</script>

<script setup lang="ts">
import { Divider, Group, Paper, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Paper with-border p="lg" w="100%">
    <Text :fw="600" mb="sm">Resumo do pedido</Text>
    <Stack :gap="6">
      <Group justify="space-between">
        <Text fz="sm" c="var(--ds-text-2)">Subtotal</Text>
        <Text fz="sm">R$ 3.249,90</Text>
      </Group>
      <Group justify="space-between">
        <Text fz="sm" c="var(--ds-text-2)">Frete</Text>
        <Text fz="sm" c="evergreen">Grátis</Text>
      </Group>
    </Stack>
    <Divider my="sm" />
    <Group justify="space-between">
      <Text :fw="600">Total</Text>
      <Text :fw="600">R$ 3.249,90</Text>
    </Group>
  </Paper>
</template>
