<script lang="ts">
export const meta = { background: 'page' };
</script>

<script setup lang="ts">
import { ContentCard, Button, SimpleGrid } from '@jcdecor/vue';

const guides = [
  {
    seed: 'vinilico',
    kicker: 'Pisos vinílicos',
    title: 'Clicado ou autocolante?',
    body: 'Compare durabilidade, preço por m² e o tipo de contrapiso ideal para cada um.',
  },
  {
    seed: 'parede',
    kicker: 'Papel de parede',
    title: 'Quantos rolos eu preciso?',
    body: 'Meça altura e largura das paredes e descubra a quantidade certa, com sobra para o encaixe.',
  },
  {
    seed: 'grama',
    kicker: 'Grama sintética',
    title: 'Varanda verde o ano todo',
    body: 'Sem rega e sem poda: veja como preparar a base e fixar as emendas.',
  },
];

const foto = (seed: string) => `https://picsum.photos/seed/${seed}/600/600`;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }">
    <ContentCard
      v-for="guide in guides"
      :key="guide.seed"
      :image="foto(guide.seed)"
      :image-height="160"
      :kicker="guide.kicker"
      :title="guide.title"
    >
      {{ guide.body }}
      <template #actions>
        <Button size="sm" variant="outline">Ler guia</Button>
      </template>
    </ContentCard>
  </SimpleGrid>
</template>
