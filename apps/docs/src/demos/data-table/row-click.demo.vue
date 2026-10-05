<script setup lang="ts">
import { ref } from 'vue';
import { DataTable, Text, Stack, type DataTableColumn } from '@jcdecor/vue';

interface Order {
  id: string;
  customer: string;
  total: number;
}

const data: Order[] = [
  { id: '#10482', customer: 'Mariana Souza', total: 1078.8 },
  { id: '#10483', customer: 'Rafael Lima', total: 519.6 },
  { id: '#10484', customer: 'Juliana Alves', total: 1499.4 },
];

const columns: DataTableColumn<Order>[] = [
  { key: 'id', header: 'Pedido' },
  { key: 'customer', header: 'Cliente' },
  { key: 'total', header: 'Total', numeric: true, format: { style: 'currency', currency: 'BRL' } },
];

const selected = ref<Order | null>(null);
</script>

<template>
  <Stack gap="sm">
    <DataTable :columns="columns" :data="data" :row-key="(row) => row.id" @row-click="(row) => (selected = row)" />
    <Text fz="sm" c="var(--ds-text-2)">
      {{ selected ? `Abrindo pedido ${selected.id} de ${selected.customer}…` : 'Clique em uma linha para abrir o pedido.' }}
    </Text>
  </Stack>
</template>
