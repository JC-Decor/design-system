<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Text, Timeline, TimelineItem } from '@jcdecor/vue';
import { IconCheck, IconHome, IconPackage, IconTruckDelivery } from '@tabler/icons-vue';
</script>

<template>
  <Timeline :active="2" :bullet-size="28">
    <TimelineItem title="Pedido confirmado">
      <template #bullet><IconCheck :size="14" /></template>
      <Text fz="sm" c="var(--ds-text-2)">Pagamento via Pix aprovado.</Text>
      <Text fz="xs" c="var(--ds-text-3)" :mt="4">28/09 · 14:32</Text>
    </TimelineItem>
    <TimelineItem title="Em separação">
      <template #bullet><IconPackage :size="14" /></template>
      <Text fz="sm" c="var(--ds-text-2)">4 caixas de piso vinílico Carvalho Natural.</Text>
      <Text fz="xs" c="var(--ds-text-3)" :mt="4">29/09 · 09:10</Text>
    </TimelineItem>
    <TimelineItem title="Em trânsito">
      <template #bullet><IconTruckDelivery :size="14" /></template>
      <Text fz="sm" c="var(--ds-text-2)">Saiu do centro de distribuição de Guarulhos.</Text>
      <Text fz="xs" c="var(--ds-text-3)" :mt="4">01/10 · 07:45</Text>
    </TimelineItem>
    <TimelineItem title="Entregue" line-variant="dashed">
      <template #bullet><IconHome :size="14" /></template>
      <Text fz="sm" c="var(--ds-text-3)">Previsão: 03/10</Text>
    </TimelineItem>
  </Timeline>
</template>
