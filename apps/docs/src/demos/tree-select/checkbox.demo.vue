<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { TreeSelect, type TreeNodeData } from '@jcdecor/vue';

const ambientes: TreeNodeData[] = [
  {
    value: 'internos',
    label: 'Ambientes internos',
    children: [
      { value: 'sala', label: 'Sala' },
      { value: 'quarto', label: 'Quarto' },
      { value: 'cozinha', label: 'Cozinha' },
    ],
  },
  {
    value: 'externos',
    label: 'Ambientes externos',
    children: [
      { value: 'varanda', label: 'Varanda' },
      { value: 'jardim', label: 'Jardim' },
    ],
  },
];
</script>

<template>
  <TreeSelect
    mode="checkbox"
    label="Indicado para"
    description="Marcar um grupo marca todos os ambientes dele"
    placeholder="Escolha os ambientes"
    :data="ambientes"
    :default-value="['sala', 'quarto']"
    default-expand-all
    checked-strategy="parent"
  />
</template>
