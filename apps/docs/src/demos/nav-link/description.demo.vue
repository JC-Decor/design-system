<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { NavLink, Paper } from '@jcdecor/vue';
import { IconChevronRight, IconCreditCard, IconMapPin, IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <Paper with-border p="xs">
    <NavLink href="#" label="Endereços" description="2 endereços salvos">
      <template #leftSection><IconMapPin :size="20" /></template>
      <template #rightSection><IconChevronRight :size="16" /></template>
    </NavLink>
    <NavLink href="#" label="Formas de pagamento" description="Pix e cartão final 4821">
      <template #leftSection><IconCreditCard :size="20" /></template>
      <template #rightSection><IconChevronRight :size="16" /></template>
    </NavLink>
    <NavLink href="#" label="Rastrear pedido" description="Indisponível — nenhum pedido em trânsito" disabled>
      <template #leftSection><IconTruckDelivery :size="20" /></template>
    </NavLink>
  </Paper>
</template>
