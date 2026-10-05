<script lang="ts">
export const meta = { background: 'page' };
</script>

<script setup lang="ts">
import { ProductCard, SimpleGrid, Tag } from '@jcdecor/vue';

const products = [
  { id: 1, seed: 'carvalho', name: 'Piso vinílico autocolante Carvalho Natural', category: 'Pisos vinílicos', price: 89.9, oldPrice: 119.9, unit: '/m²', rating: 4.5, reviews: 312 },
  { id: 2, seed: 'linho', name: 'Papel de parede Linho Bege texturizado', category: 'Papel de parede', price: 129.9, unit: '/rolo', rating: 4.8, reviews: 87, isNew: true },
  { id: 3, seed: 'freijo', name: 'Painel ripado Freijó 2,70 m', category: 'Painel ripado', price: 249.9, oldPrice: 289.9, rating: 4.6, reviews: 154 },
];

const imageUrl = (seed: string) => `https://picsum.photos/seed/${seed}/600/600`;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '420px': 2, '560px': 3 }">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      href="#"
      :image="imageUrl(product.seed)"
      :name="product.name"
      :category="product.category"
      :price="product.price"
      :old-price="product.oldPrice"
      :unit="product.unit"
      :rating="product.rating"
      :reviews="product.reviews"
      :installments="{ count: 6 }"
      action-label="Adicionar"
      @action="() => {}"
    >
      <template v-if="product.isNew" #badges>
        <Tag tone="primary" variant="filled">Novo</Tag>
      </template>
    </ProductCard>
  </SimpleGrid>
</template>
