<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, Group, Indicator } from '@jcdecor/vue';
import { IconBell, IconHeart, IconShoppingCart } from '@tabler/icons-vue';
</script>

<template>
  <Group gap="xl">
    <Indicator label="3" :size="18" with-border>
      <ActionIcon variant="default" size="lg" aria-label="Carrinho, 3 itens">
        <IconShoppingCart :size="20" />
      </ActionIcon>
    </Indicator>
    <Indicator label="12" :size="18" color="horizon" with-border>
      <ActionIcon variant="default" size="lg" aria-label="Favoritos, 12 itens">
        <IconHeart :size="20" />
      </ActionIcon>
    </Indicator>
    <Indicator processing :size="10" with-border>
      <ActionIcon variant="default" size="lg" aria-label="Notificações não lidas">
        <IconBell :size="20" />
      </ActionIcon>
    </Indicator>
    <Indicator label="99+" :size="18" with-border>
      <ActionIcon variant="default" size="lg" aria-label="Carrinho, mais de 99 itens">
        <IconShoppingCart :size="20" />
      </ActionIcon>
    </Indicator>
  </Group>
</template>
