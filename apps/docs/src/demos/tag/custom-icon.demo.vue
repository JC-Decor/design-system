<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Tag, Group } from '@jcdecor/vue';
import { IconTruckDelivery, IconSparkles, IconFlame } from '@tabler/icons-vue';
</script>

<template>
  <Group>
    <Tag tone="success">
      <template #leftSection><IconTruckDelivery :size="12" /></template>
      Frete grátis
    </Tag>
    <Tag tone="primary">
      <template #leftSection><IconSparkles :size="12" /></template>
      Lançamento
    </Tag>
    <Tag tone="error" variant="filled">
      <template #leftSection><IconFlame :size="12" /></template>
      Mais vendido
    </Tag>
  </Group>
</template>
