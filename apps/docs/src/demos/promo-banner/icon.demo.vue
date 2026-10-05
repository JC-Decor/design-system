<script setup lang="ts">
import { PromoBanner, Stack } from '@jcdecor/vue';
import { IconTruckDelivery, IconDiscount2 } from '@tabler/icons-vue';
</script>

<template>
  <Stack gap="sm">
    <PromoBanner radius="md" highlight="R$ 299">
      <template #icon><IconTruckDelivery :size="20" /></template>
      Frete grátis acima de
    </PromoBanner>
    <PromoBanner variant="electric" radius="md">
      <template #icon><IconDiscount2 :size="20" /></template>
      Papel de parede com <strong>10% OFF</strong> no Pix
    </PromoBanner>
  </Stack>
</template>
