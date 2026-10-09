<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Group, Paper, Progress, Text } from '@jcdecor/vue';
import { IconTruckDelivery } from '@tabler/icons-vue';

const cartTotal = 459;
const freeShippingFrom = 499;

const missing = freeShippingFrom - cartTotal;
const value = Math.min((cartTotal / freeShippingFrom) * 100, 100);
const brl = (amount: number) => amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
</script>

<template>
  <Paper with-border p="md">
    <Group gap="xs" mb="sm" wrap="nowrap">
      <IconTruckDelivery :size="20" color="var(--ds-success)" />
      <Text fz="sm">
        Faltam <strong>{{ brl(missing) }}</strong> para frete grátis
      </Text>
    </Group>
    <Progress :value="value" color="evergreen" aria-label="Progresso para frete grátis" />
    <Group justify="space-between" :mt="6">
      <Text fz="xs" c="var(--ds-text-3)">{{ brl(cartTotal) }} no carrinho</Text>
      <Text fz="xs" c="var(--ds-text-3)">{{ brl(freeShippingFrom) }}</Text>
    </Group>
  </Paper>
</template>
