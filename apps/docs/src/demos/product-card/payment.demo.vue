<script lang="ts">
export const meta = { background: 'page', maxWidth: 600 };
</script>

<script setup lang="ts">
import { ProductCard, SimpleGrid } from '@jcdecor/vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '420px': 2 }">
    <ProductCard
      name="Piso vinílico clicado Nogueira 5 mm"
      category="Pisos vinílicos"
      image="https://picsum.photos/seed/nogueira/600/600"
      :price="139.9"
      :old-price="169.9"
      unit="/m²"
      :pix-discount="5"
      :installments="{ count: 10 }"
      @action="() => {}"
    />
    <ProductCard
      name="Papel de parede Folhagens Tropicais"
      category="Papel de parede"
      image="https://picsum.photos/seed/folhagem/600/600"
      :image-ratio="4 / 5"
      :price="149.9"
      unit="/rolo"
      :pix-discount="10"
      :installments="{ count: 3 }"
      :show-discount="false"
      action-label="Adicionar ao carrinho"
      @action="() => {}"
    />
  </SimpleGrid>
</template>
