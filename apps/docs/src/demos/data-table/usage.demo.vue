<script setup lang="ts">
import { DataTable, type DataTableColumn } from '@jcdecor/vue';

interface Keyword {
  keyword: string;
  volume: number;
  ctr: number;
}

const data: Keyword[] = [
  { keyword: 'piso vinilico autocolante 505', volume: 127237, ctr: 6.6 },
  { keyword: 'papel de parede 3d', volume: 98410, ctr: 4.2 },
  { keyword: 'painel ripado sala', volume: 54959, ctr: 5.1 },
  { keyword: 'grama sintetica 25mm', volume: 33120, ctr: 3.8 },
  { keyword: 'cortina blackout', volume: 28764, ctr: 2.9 },
];

const columns: DataTableColumn<Keyword>[] = [
  { key: 'keyword', header: 'Palavra-chave', sortable: true },
  { key: 'volume', header: 'Buscas/mês', numeric: true, sortable: true },
  { key: 'ctr', header: 'CTR (%)', numeric: true, sortable: true, format: { minimumFractionDigits: 1 } },
];
</script>

<template>
  <DataTable :columns="columns" :data="data" :row-key="(row) => row.keyword" :initial-sort="{ key: 'volume', direction: 'desc' }" />
</template>
