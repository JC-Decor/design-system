<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Badge, Group } from '@jcdecor/vue';
import { IconCheck, IconClock, IconFlame, IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <Group justify="center">
    <Badge color="evergreen">
      <template #leftSection><IconCheck :size="12" /></template>
      Pago
    </Badge>
    <Badge color="electric">
      <template #leftSection><IconClock :size="12" /></template>
      Aguardando
    </Badge>
    <Badge>
      <template #leftSection><IconTruckDelivery :size="12" /></template>
      Frete grátis
    </Badge>
    <Badge color="danger" variant="filled">
      <template #leftSection><IconFlame :size="12" /></template>
      -30%
    </Badge>
    <Badge circle>3</Badge>
  </Group>
</template>
