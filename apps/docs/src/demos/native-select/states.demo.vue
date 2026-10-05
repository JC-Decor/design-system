<script setup lang="ts">
import { NativeSelect, SimpleGrid } from '@jcdecor/vue';
import { IconArrowsSort } from '@tabler/icons-vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <NativeSelect label="Ordenar por" default-value="Relevância" :data="['Relevância', 'Menor preço', 'Maior preço', 'Lançamentos']">
      <template #leftSection><IconArrowsSort :size="16" /></template>
    </NativeSelect>
    <NativeSelect
      label="Parcelas"
      default-value="Selecione"
      :data="['Selecione', '1x sem juros', '3x sem juros', '6x sem juros']"
      error="Escolha o número de parcelas"
    />
    <NativeSelect label="Transportadora" :data="['Correios']" default-value="Correios" disabled />
  </SimpleGrid>
</template>
