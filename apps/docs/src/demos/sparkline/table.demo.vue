<script setup lang="ts">
import { DataTable, formatCurrency, type DataTableColumn } from '@jcdecor/vue';
import { Sparkline } from '@jcdecor/vue/charts';

interface Row {
  produto: string;
  vendas: number;
  receita: number;
  tendencia: number[];
}

const rows: Row[] = [
  {
    produto: 'Piso vinílico Carvalho Natural',
    vendas: 312,
    receita: 28048.8,
    tendencia: [32, 38, 41, 45, 50, 49, 57],
  },
  {
    produto: 'Papel de parede Linho Areia',
    vendas: 198,
    receita: 15820.2,
    tendencia: [35, 31, 29, 30, 26, 24, 23],
  },
  {
    produto: 'Cortina blackout Cinza',
    vendas: 143,
    receita: 21307,
    tendencia: [18, 20, 19, 22, 21, 23, 20],
  },
  {
    produto: 'Grama sintética 25 mm',
    vendas: 121,
    receita: 9668,
    tendencia: [10, 12, 15, 17, 18, 22, 27],
  },
];

const columns: DataTableColumn<Row>[] = [
  { key: 'produto', header: 'Produto' },
  { key: 'vendas', header: 'Vendas', numeric: true },
  { key: 'receita', header: 'Receita', numeric: true },
  { key: 'tendencia', header: 'Últimos 7 dias', width: 140 },
];

const trendColors = { positive: 'evergreen.6', negative: 'danger.6' };
</script>

<template>
  <DataTable :data="rows" :columns="columns" :row-key="(row) => row.produto">
    <template #cell-receita="{ row }">{{ formatCurrency(row.receita) }}</template>
    <template #cell-tendencia="{ row }">
      <Sparkline :height="32" :width="120" :data="row.tendencia" :trend-colors="trendColors" />
    </template>
  </DataTable>
</template>
