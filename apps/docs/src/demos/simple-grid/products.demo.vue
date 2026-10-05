<script setup lang="ts">
import { Card, CardSection, Image, SimpleGrid, Text } from '@jcdecor/vue';

const produtos = [
  { nome: 'Piso vinílico Carvalho', preco: 'R$ 89,90/m²', seed: 'piso' },
  { nome: 'Papel de parede Linho', preco: 'R$ 129,90', seed: 'papel' },
  { nome: 'Painel ripado Freijó', preco: 'R$ 349,90', seed: 'painel' },
  { nome: 'Grama sintética 32 mm', preco: 'R$ 59,90/m²', seed: 'grama' },
  { nome: 'Cortina blackout Areia', preco: 'R$ 219,90', seed: 'blackout' },
  { nome: 'Carpete Cinza Mescla', preco: 'R$ 74,90/m²', seed: 'carpete' },
];

const photo = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`;
</script>

<template>
  <SimpleGrid :cols="{ base: 1, xs: 2, md: 3 }" spacing="lg" vertical-spacing="lg" w="100%">
    <Card v-for="produto in produtos" :key="produto.seed" padding="md">
      <CardSection>
        <Image :src="photo(produto.seed)" :alt="produto.nome" :h="140" />
      </CardSection>
      <Text :fw="600" mt="md">{{ produto.nome }}</Text>
      <Text fz="sm" c="var(--ds-primary)" :fw="600">{{ produto.preco }}</Text>
    </Card>
  </SimpleGrid>
</template>
