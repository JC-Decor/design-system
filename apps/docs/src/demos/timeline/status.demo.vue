<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Text, Timeline, TimelineItem } from '@jcdecor/vue';
import { IconAlertTriangle, IconCheck, IconRefresh, IconX } from '@tabler/icons-vue';
</script>

<template>
  <Timeline :active="3" :bullet-size="24">
    <TimelineItem title="Troca solicitada">
      <template #bullet><IconRefresh :size="12" /></template>
      <Text fz="sm" c="var(--ds-text-2)">Motivo: tamanho incorreto.</Text>
    </TimelineItem>
    <TimelineItem color="electric.3" title="Coleta reagendada">
      <template #bullet><IconAlertTriangle :size="12" color="var(--mantine-color-obsidian-6)" /></template>
      <Text fz="sm" c="var(--ds-text-2)">Ninguém no endereço na primeira tentativa.</Text>
    </TimelineItem>
    <TimelineItem color="danger" title="Item avariado na coleta">
      <template #bullet><IconX :size="12" /></template>
      <Text fz="sm" c="var(--ds-text-2)">Abrimos um chamado com a transportadora.</Text>
    </TimelineItem>
    <TimelineItem color="evergreen" title="Reembolso aprovado">
      <template #bullet><IconCheck :size="12" /></template>
      <Text fz="sm" c="var(--ds-text-2)">R$ 389,70 estornados no cartão.</Text>
    </TimelineItem>
  </Timeline>
</template>
