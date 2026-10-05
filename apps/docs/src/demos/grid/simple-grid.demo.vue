<script setup lang="ts">
import { Card, SimpleGrid, Text } from '@jcdecor/vue';

const categorias = [
  { nome: 'Pisos vinílicos', itens: 128 },
  { nome: 'Papel de parede', itens: 342 },
  { nome: 'Painel ripado', itens: 46 },
  { nome: 'Grama sintética', itens: 18 },
];
</script>

<template>
  <SimpleGrid :cols="{ base: 1, sm: 2, md: 4 }" spacing="lg" w="100%">
    <Card v-for="c in categorias" :key="c.nome">
      <Text :fw="600">{{ c.nome }}</Text>
      <Text fz="sm" c="var(--ds-text-3)">{{ c.itens }} produtos</Text>
    </Card>
  </SimpleGrid>
</template>
