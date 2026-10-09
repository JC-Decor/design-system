<script setup lang="ts">
import { EmptyState, SimpleGrid } from '@jcdecor/vue';
import { IconHeart } from '@tabler/icons-vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2, '720px': 4 }">
    <EmptyState size="sm" title="Sem variante" description="Ícone em tom suave.">
      <template #icon><IconHeart /></template>
    </EmptyState>
    <EmptyState size="sm" with-indicator-background title="Fundo neutro" description="withIndicatorBackground">
      <template #icon><IconHeart /></template>
    </EmptyState>
    <EmptyState size="sm" variant="light" title="light" description="Fundo suave da cor.">
      <template #icon><IconHeart /></template>
    </EmptyState>
    <EmptyState size="sm" variant="filled" title="filled" description="Fundo cheio da cor.">
      <template #icon><IconHeart /></template>
    </EmptyState>
  </SimpleGrid>
</template>
