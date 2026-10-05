<script setup lang="ts">
import { PageHeader, Button, Tag } from '@jcdecor/vue';

const breadcrumbs = [
  { label: 'Início', href: '#' },
  { label: 'Produtos', href: '#' },
  { label: 'Piso vinílico Carvalho Natural' },
];
</script>

<template>
  <PageHeader
    :mb="0"
    :breadcrumbs="breadcrumbs"
    title="Piso vinílico Carvalho Natural"
    description="SKU 505-CN · Réguas de 2 mm, caixa com 3,34 m²."
  >
    <template #actions>
      <Tag tone="success" with-icon>Em estoque</Tag>
      <Button variant="outline">Editar produto</Button>
    </template>
  </PageHeader>
</template>
