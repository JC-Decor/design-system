<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, Group, VisuallyHidden } from '@jcdecor/vue';
import { IconHeart, IconShare, IconShoppingCart } from '@tabler/icons-vue';
</script>

<template>
  <Group>
    <ActionIcon variant="light" size="lg">
      <IconHeart :size="18" />
      <VisuallyHidden>Adicionar aos favoritos</VisuallyHidden>
    </ActionIcon>
    <ActionIcon variant="light" size="lg">
      <IconShare :size="18" />
      <VisuallyHidden>Compartilhar produto</VisuallyHidden>
    </ActionIcon>
    <ActionIcon size="lg">
      <IconShoppingCart :size="18" />
      <VisuallyHidden>Adicionar ao carrinho</VisuallyHidden>
    </ActionIcon>
  </Group>
</template>
