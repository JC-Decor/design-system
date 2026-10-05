<script setup lang="ts">
import { h } from 'vue';
import { Badge, OverflowList, Paper, Text, Tooltip } from '@jcdecor/vue';

const tags = ['Sala de estar', 'Quarto', 'Escandinavo', 'Madeira', 'Freijó', 'Painel ripado', 'Iluminação LED', 'Home office', 'Sustentável', 'Fácil instalação', 'Antirriscos'];

// O indicador vai pela prop `renderOverflow` (o slot #overflow não é medido no Mantine Vue 3.5);
// o <span> dá ao OverflowList um elemento para medir, já que o Tooltip não tem um nó raiz próprio.
const renderOverflow = (ocultas: string[]) =>
  h('span', [
    h(Tooltip, { label: ocultas.join(', '), multiline: true, w: 220 }, () =>
      h(Badge, { variant: 'outline', color: 'obsidian', style: { cursor: 'default' } }, () => `+${ocultas.length}`),
    ),
  ]);
</script>

<template>
  <Paper with-border p="md" w="100%" :maw="520" :style="{ resize: 'horizontal', overflow: 'hidden', minWidth: '200px' }">
    <Text fz="xs" c="var(--ds-text-3)" mb="xs">Arraste o canto para redimensionar</Text>
    <OverflowList :data="tags" :gap="6" :render-overflow="renderOverflow">
      <template #item="{ item: tag }">
        <Badge :key="tag" color="obsidian">{{ tag }}</Badge>
      </template>
    </OverflowList>
  </Paper>
</template>
