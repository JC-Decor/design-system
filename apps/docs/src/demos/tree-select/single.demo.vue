<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { TreeSelect, type TreeNodeData } from '@jcdecor/vue';

const categorias: TreeNodeData[] = [
  {
    value: 'pisos',
    label: 'Pisos',
    children: [
      {
        value: 'pisos/vinilico',
        label: 'Vinílico',
        children: [
          { value: 'pisos/vinilico/autocolante', label: 'Autocolante' },
          { value: 'pisos/vinilico/clicado', label: 'Clicado' },
          { value: 'pisos/vinilico/colado', label: 'Colado' },
        ],
      },
      { value: 'pisos/laminado', label: 'Laminado' },
    ],
  },
  {
    value: 'paredes',
    label: 'Paredes',
    children: [
      { value: 'paredes/papel', label: 'Papel de parede' },
      { value: 'paredes/ripado', label: 'Painel ripado' },
    ],
  },
  { value: 'grama', label: 'Grama sintética' },
];
</script>

<template>
  <TreeSelect
    label="Categoria do produto"
    placeholder="Escolha a categoria"
    :data="categorias"
    :default-expanded-values="['pisos', 'pisos/vinilico']"
    expand-on-click
    clearable
  />
</template>
