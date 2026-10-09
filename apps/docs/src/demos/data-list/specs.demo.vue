<script lang="ts">
export const meta = { maxWidth: 480 };
</script>

<script setup lang="ts">
import { DataList, DataListItem, DataListItemLabel, DataListItemValue } from '@jcdecor/vue';

const especificacoes = [
  { label: 'Dimensões', value: '2,70 m × 0,30 m × 1,8 cm' },
  { label: 'Material', value: 'MDF de alta densidade com revestimento melamínico' },
  { label: 'Acabamento', value: 'Freijó natural, fosco' },
  { label: 'Peso', value: '7,4 kg por placa' },
  { label: 'Instalação', value: 'Cola PU ou parafusos' },
  { label: 'Garantia', value: '5 anos contra defeitos de fabricação' },
];
</script>

<template>
  <DataList with-divider :label-width="140">
    <DataListItem v-for="item in especificacoes" :key="item.label">
      <DataListItemLabel>{{ item.label }}</DataListItemLabel>
      <DataListItemValue>{{ item.value }}</DataListItemValue>
    </DataListItem>
  </DataList>
</template>
