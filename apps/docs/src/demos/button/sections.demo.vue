<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Group } from '@jcdecor/vue';
import { IconArrowRight, IconDownload, IconShoppingCart } from '@tabler/icons-vue';
</script>

<template>
  <Group>
    <Button>
      <template #leftSection><IconShoppingCart :size="18" /></template>
      Adicionar ao carrinho
    </Button>
    <Button variant="outline">
      <template #rightSection><IconArrowRight :size="18" /></template>
      Ver coleção
    </Button>
    <Button variant="accent">
      <template #leftSection><IconDownload :size="18" /></template>
      Baixar catálogo
    </Button>
    <Button loading>Salvando</Button>
  </Group>
</template>
