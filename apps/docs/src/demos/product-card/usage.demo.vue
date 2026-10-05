<script lang="ts">
export const meta = { centered: true, background: 'page', maxWidth: 280 };
</script>

<script setup lang="ts">
import { ProductCard } from '@jcdecor/vue';
</script>

<template>
  <ProductCard
    name="Piso vinílico autocolante Carvalho Natural 2 mm"
    category="Pisos vinílicos"
    image="https://picsum.photos/seed/carvalho/600/600"
    href="#"
    :price="89.9"
    :old-price="119.9"
    unit="/m²"
    @action="() => {}"
  />
</template>
