<script setup lang="ts">
import { DataList, DataListItem, DataListItemLabel, DataListItemValue, SimpleGrid } from '@jcdecor/vue';

const pedido = [
  { label: 'Pedido', value: '#10482' },
  { label: 'Data da compra', value: '02/10/2026' },
  { label: 'Pagamento', value: 'Pix · aprovado' },
  { label: 'Entrega', value: 'Até 08/10/2026' },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 2, '560px': 4 }" w="100%">
    <DataList v-for="item in pedido" :key="item.label" orientation="vertical">
      <DataListItem>
        <DataListItemLabel>{{ item.label }}</DataListItemLabel>
        <DataListItemValue>{{ item.value }}</DataListItemValue>
      </DataListItem>
    </DataList>
  </SimpleGrid>
</template>
