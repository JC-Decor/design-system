<script setup lang="ts">
import { Button, EmptyState, EmptyStateActions } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';
</script>

<template>
  <EmptyState
    variant="light"
    title="Nenhum produto encontrado"
    description="Não encontramos resultados para “papel de parede 3D”. Tente outro termo ou remova alguns filtros."
    w="100%"
  >
    <template #icon><IconSearch :size="28" /></template>
    <EmptyStateActions>
      <Button variant="outline">Limpar filtros</Button>
      <Button>Ver todos os produtos</Button>
    </EmptyStateActions>
  </EmptyState>
</template>
