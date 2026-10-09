<script lang="ts">
export const meta = { centered: true, maxWidth: 420, background: 'page' };
</script>

<script setup lang="ts">
import { CouponCode, Paper, Stack, Group, Text, Divider, Button } from '@jcdecor/vue';
</script>

<template>
  <Paper with-border p="lg" radius="md">
    <Stack gap="sm">
      <Text :fw="600">Resumo do pedido</Text>
      <Group justify="space-between">
        <Text fz="sm" c="var(--ds-text-2)">Subtotal</Text>
        <Text fz="sm">R$ 1.078,80</Text>
      </Group>
      <Group justify="space-between">
        <Text fz="sm" c="var(--ds-text-2)">Frete</Text>
        <Text fz="sm" c="var(--ds-tag-success-color)" :fw="600">Grátis</Text>
      </Group>
      <Divider />
      <CouponCode code="JCMAIO" description="Use na 1ª compra e ganhe 5% OFF" />
      <Button full-width mt="xs">Finalizar compra</Button>
    </Stack>
  </Paper>
</template>
