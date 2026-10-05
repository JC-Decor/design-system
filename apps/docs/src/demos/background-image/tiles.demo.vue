<script setup lang="ts">
import { BackgroundImage, SimpleGrid, Text } from '@jcdecor/vue';

const categorias = [
  { nome: 'Pisos', imagem: 'https://picsum.photos/seed/piso/600/400' },
  { nome: 'Painéis ripados', imagem: 'https://picsum.photos/seed/painel/600/400' },
  { nome: 'Papel de parede', imagem: 'https://picsum.photos/seed/parede/600/400' },
];
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <BackgroundImage v-for="cat in categorias" :key="cat.nome" :src="cat.imagem" :h="160">
      <Text
        :fw="600"
        c="white"
        p="md"
        h="100%"
        :style="{
          display: 'flex',
          alignItems: 'flex-end',
          borderRadius: 'inherit',
          background: 'linear-gradient(0deg, color-mix(in srgb, var(--dc-obsidian) 80%, transparent), transparent 60%)',
        }"
      >
        {{ cat.nome }}
      </Text>
    </BackgroundImage>
  </SimpleGrid>
</template>
