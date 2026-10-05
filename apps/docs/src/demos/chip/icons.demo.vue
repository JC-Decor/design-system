<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Chip, Group } from '@jcdecor/vue';
import { IconStarFilled, IconTruckDelivery } from '@tabler/icons-vue';

const frete = ref(true);
</script>

<template>
  <Group justify="center">
    <Chip v-model="frete" color="evergreen">
      <template #icon><IconTruckDelivery :size="14" /></template>
      Frete grátis
    </Chip>
    <Chip default-checked>
      <template #icon><IconStarFilled :size="14" /></template>
      4 estrelas ou mais
    </Chip>
    <Chip size="lg">Tamanho lg</Chip>
    <Chip size="xs">Tamanho xs</Chip>
  </Group>
</template>
