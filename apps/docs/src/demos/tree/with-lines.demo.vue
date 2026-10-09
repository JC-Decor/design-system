<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Paper, Tree, getTreeExpandedState, useTree, type TreeNodeData } from '@jcdecor/vue';

const data: TreeNodeData[] = [
  {
    label: 'Sala de estar',
    value: 'sala',
    children: [
      { label: 'Piso vinílico Carvalho Natural', value: 'sala/piso' },
      { label: 'Painel ripado Freijó', value: 'sala/painel' },
      {
        label: 'Janelas',
        value: 'sala/janelas',
        children: [
          { label: 'Cortina Linho Cru', value: 'sala/janelas/cortina' },
          { label: 'Persiana rolô blackout', value: 'sala/janelas/persiana' },
        ],
      },
    ],
  },
  {
    label: 'Quarto infantil',
    value: 'quarto',
    children: [{ label: 'Papel de parede Nuvens', value: 'quarto/papel' }],
  },
];

const tree = useTree({ initialExpandedState: getTreeExpandedState(data, '*') });
</script>

<template>
  <Paper with-border p="sm">
    <Tree :data="data" :tree="tree" with-lines select-on-click :level-offset="24" />
  </Paper>
</template>
