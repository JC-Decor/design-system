<script lang="ts">
export const meta = { maxWidth: 360 };
</script>

<script setup lang="ts">
import { Badge, OverflowList } from '@jcdecor/vue';

const filtros = ['Piso vinílico', 'Laminado', 'Porcelanato', 'Carpete', 'Grama sintética', 'Rodapé', 'Manta acústica', 'Cola', 'Perfil', 'Soleira'];
</script>

<template>
  <OverflowList :data="filtros" :max-rows="2" :gap="6">
    <template #item="{ item: filtro }">
      <Badge :key="filtro" size="lg">{{ filtro }}</Badge>
    </template>
    <template #overflow="{ items: ocultos }">
      <Badge size="lg" variant="outline">+{{ ocultos.length }} filtros</Badge>
    </template>
  </OverflowList>
</template>
