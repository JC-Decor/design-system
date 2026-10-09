<script setup lang="ts">
import { AspectRatio, Image, SimpleGrid, Text } from '@jcdecor/vue';

const produtos = [
  { nome: 'Papel de parede Linho', seed: 'linho' },
  { nome: 'Painel ripado Freijó', seed: 'ripado' },
  { nome: 'Cortina blackout Areia', seed: 'cortina' },
  { nome: 'Tatame EVA 1 m²', seed: 'tatame' },
];

const photo = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 2, '560px': 4 }" spacing="md" w="100%">
    <div v-for="produto in produtos" :key="produto.seed">
      <AspectRatio :ratio="1">
        <Image :src="photo(produto.seed)" :alt="produto.nome" radius="sm" />
      </AspectRatio>
      <Text fz="sm" :fw="600" mt="xs">{{ produto.nome }}</Text>
    </div>
  </SimpleGrid>
</template>
