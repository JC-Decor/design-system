<script setup lang="ts">
import { SimpleGrid, Textarea } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <Textarea label="Redimensionável" placeholder="Arraste o canto" resize="vertical" :min-rows="3" />
    <Textarea label="Com erro" default-value="ok" error="Descreva o problema com mais detalhes" />
    <Textarea label="Desabilitado" default-value="Pedido já faturado" disabled />
  </SimpleGrid>
</template>
