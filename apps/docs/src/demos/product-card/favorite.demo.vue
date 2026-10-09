<script lang="ts">
export const meta = { centered: true, background: 'page', maxWidth: 280 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ProductCard } from '@jcdecor/vue';

const favorite = ref(false);
const image = 'https://picsum.photos/seed/cortina/600/600';
</script>

<template>
  <ProductCard
    v-model:favorite="favorite"
    name="Cortina blackout Linho Cinza 2,80 × 2,30 m"
    category="Cortinas"
    :image="image"
    :price="199.9"
    @action="() => {}"
  />
</template>
