<script lang="ts">
export const meta = { withoutPadding: true };
</script>

<script setup lang="ts">
import { Paper, Splitter, SplitterPane, Text } from '@jcdecor/vue';
</script>

<template>
  <Paper :h="260" :radius="0">
    <Splitter h="100%">
      <!-- No Mantine Vue os tamanhos são sempre em %: o painel de filtros começa com 30% -->
      <SplitterPane :default-size="30" :min="20" :max="45" :collapsible="true" :collapse-threshold="10" p="md">
        <Text :fw="600">Filtros</Text>
        <Text fz="sm" c="var(--ds-text-2)">Arraste até o fim para recolher.</Text>
      </SplitterPane>
      <SplitterPane :default-size="70" p="md">
        <Text :fw="600">Catálogo</Text>
        <Text fz="sm" c="var(--ds-text-2)">Este painel é flexível e ocupa o espaço restante.</Text>
      </SplitterPane>
    </Splitter>
  </Paper>
</template>
