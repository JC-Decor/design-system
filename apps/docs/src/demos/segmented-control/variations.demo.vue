<script setup lang="ts">
import { SegmentedControl, Stack } from '@jcdecor/vue';

const pagamento = [
  { value: 'pix', label: 'Pix' },
  { value: 'cartao', label: 'Cartão' },
  { value: 'boleto', label: 'Boleto', disabled: true },
];
</script>

<template>
  <Stack w="100%">
    <SegmentedControl full-width :data="['Entrega', 'Retirada na loja']" default-value="Entrega" />
    <SegmentedControl color="horizon" :data="['Mensal', 'Anual']" default-value="Anual" w="fit-content" />
    <SegmentedControl size="sm" :data="['P', 'M', 'G', 'GG']" default-value="M" w="fit-content" />
    <SegmentedControl :data="pagamento" default-value="pix" w="fit-content" />
  </Stack>
</template>
