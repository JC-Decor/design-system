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
      { value: 'vinilico', label: 'Vinílico', children: [{ value: 'autocolante', label: 'Autocolante' }, { value: 'clicado', label: 'Clicado' }] },
      { value: 'carpete', label: 'Carpete', children: [{ value: 'placas', label: 'Em placas' }, { value: 'rolo', label: 'Em rolo' }] },
      { value: 'tatame', label: 'Tatame' },
    ],
  },
  {
    value: 'decoracao',
    label: 'Decoração',
    children: [
      { value: 'cortinas', label: 'Cortinas' },
      { value: 'persianas', label: 'Persianas' },
    ],
  },
];
</script>

<template>
  <TreeSelect
    mode="multiple"
    label="Categorias da campanha"
    placeholder="Buscar categoria"
    :data="categorias"
    :default-value="['autocolante']"
    searchable
    :max-displayed-values="2"
    nothing-found-message="Nenhuma categoria encontrada"
    :with-lines="false"
  />
</template>
