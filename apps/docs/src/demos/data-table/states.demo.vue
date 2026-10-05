<script setup lang="ts">
import { DataTable, SimpleGrid, Stack, EmptyState, Button, type DataTableColumn } from '@jcdecor/vue';
import { IconSearchOff } from '@tabler/icons-vue';

interface Keyword {
  keyword: string;
  volume: number;
  ctr: number;
}

const columns: DataTableColumn<Keyword>[] = [
  { key: 'keyword', header: 'Palavra-chave' },
  { key: 'volume', header: 'Buscas/mês', numeric: true },
  { key: 'ctr', header: 'CTR (%)', numeric: true },
];
</script>

<template>
  <Stack>
    <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }">
      <DataTable :columns="columns" :data="[]" loading :loading-rows="4" />
      <DataTable :columns="columns" :data="[]" />
    </SimpleGrid>
    <DataTable :columns="columns" :data="[]">
      <template #empty>
        <EmptyState py="lg" size="sm" title="Nenhuma palavra-chave" description="Tente outro período.">
          <template #icon><IconSearchOff :size="22" /></template>
          <Button size="xs" variant="outline">Limpar filtros</Button>
        </EmptyState>
      </template>
    </DataTable>
  </Stack>
</template>
