<script lang="ts">
export const meta = { maxWidth: 360 };
</script>

<script setup lang="ts">
import { h } from 'vue';
import { Badge, OverflowList } from '@jcdecor/vue';

const filtros = ['Piso vinílico', 'Laminado', 'Porcelanato', 'Carpete', 'Grama sintética', 'Rodapé', 'Manta acústica', 'Cola', 'Perfil', 'Soleira'];

// O indicador vai pela prop `renderOverflow`: o slot #overflow não é medido no Mantine Vue 3.5
const renderOverflow = (ocultos: string[]) => h(Badge, { size: 'lg', variant: 'outline' }, () => `+${ocultos.length} filtros`);
</script>

<template>
  <OverflowList :data="filtros" :max-rows="2" :gap="6" :render-overflow="renderOverflow">
    <template #item="{ item: filtro }">
      <Badge :key="filtro" size="lg">{{ filtro }}</Badge>
    </template>
  </OverflowList>
</template>
