<script lang="ts">
export const meta = { centered: true, background: 'page', maxWidth: 280 };
</script>

<script setup lang="ts">
import { ProductCard, Tag } from '@jcdecor/vue';
import { IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <ProductCard
    name="Painel ripado Freijó 2,70 m"
    category="Painel ripado"
    image="https://picsum.photos/seed/ripado/600/600"
    :price="249.9"
    :old-price="319.9"
    :rating="4.5"
    :reviews="154"
    @action="() => {}"
  >
    <template #badges>
      <Tag tone="success" variant="filled">
        <template #leftSection><IconTruckDelivery :size="12" /></template>
        Frete grátis
      </Tag>
      <Tag tone="primary" variant="filled">Novo</Tag>
    </template>
  </ProductCard>
</template>
