<script lang="ts">
export const meta = { maxWidth: 420 };
</script>

<script setup lang="ts">
import { DataList, DataListItem, DataListItemLabel, DataListItemValue, NumberFormatter } from '@jcdecor/vue';
</script>

<template>
  <DataList with-divider :label-width="160">
    <DataListItem>
      <DataListItemLabel>Área por caixa</DataListItemLabel>
      <DataListItemValue><NumberFormatter :value="2.2" suffix=" m²" :decimal-scale="2" /></DataListItemValue>
    </DataListItem>
    <DataListItem>
      <DataListItemLabel>Desconto no Pix</DataListItemLabel>
      <DataListItemValue><NumberFormatter :value="5" suffix="%" /></DataListItemValue>
    </DataListItem>
    <DataListItem>
      <DataListItemLabel>Vendidos no mês</DataListItemLabel>
      <DataListItemValue><NumberFormatter :value="127237" /></DataListItemValue>
    </DataListItem>
    <DataListItem>
      <DataListItemLabel>Variação</DataListItemLabel>
      <DataListItemValue><NumberFormatter :value="-3.45" suffix="%" :decimal-scale="1" /></DataListItemValue>
    </DataListItem>
  </DataList>
</template>
