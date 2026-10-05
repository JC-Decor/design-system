<script setup lang="ts">
import { DataTable, Tag, Text, type DataTableColumn } from '@jcdecor/vue';

interface Product {
  sku: string;
  name: string;
  price: number;
  stock: number;
}

const data: Product[] = [
  { sku: '505-CN', name: 'Piso vinílico Carvalho Natural', price: 89.9, stock: 420 },
  { sku: 'PP-LB12', name: 'Papel de parede Linho Bege', price: 129.9, stock: 18 },
  { sku: 'PR-FJ06', name: 'Painel ripado Freijó', price: 249.9, stock: 0 },
  { sku: 'GS-25', name: 'Grama sintética 25 mm', price: 59.9, stock: 96 },
];

// As células customizadas vêm dos slots #cell-name e #cell-status
const columns: DataTableColumn<Product>[] = [
  { key: 'name', header: 'Produto', sortable: true },
  { key: 'price', header: 'Preço', numeric: true, sortable: true, format: { style: 'currency', currency: 'BRL' } },
  { key: 'stock', header: 'Estoque', numeric: true, sortable: true },
  { id: 'status', header: 'Status', width: 140 },
];
</script>

<template>
  <DataTable :columns="columns" :data="data" :row-key="(row) => row.sku" striped>
    <template #cell-name="{ row }">
      <div>
        <Text fz="sm" :fw="600">{{ row.name }}</Text>
        <Text fz="xs" c="var(--ds-text-3)">SKU {{ row.sku }}</Text>
      </div>
    </template>
    <template #cell-status="{ row }">
      <Tag v-if="row.stock === 0" tone="error" with-icon>Esgotado</Tag>
      <Tag v-else-if="row.stock < 20" tone="warn" with-icon>Baixo</Tag>
      <Tag v-else tone="success" with-icon>Disponível</Tag>
    </template>
  </DataTable>
</template>
