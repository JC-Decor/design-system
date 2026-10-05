<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Text, Timeline, TimelineItem } from '@jcdecor/vue';

const eventos = [
  { titulo: 'Orçamento enviado', data: '12/09' },
  { titulo: 'Medição no local', data: '16/09' },
  { titulo: 'Instalação agendada', data: '24/09' },
  { titulo: 'Vistoria final', data: '—' },
];
</script>

<template>
  <Timeline :active="1" :bullet-size="14">
    <TimelineItem v-for="e in eventos" :key="e.titulo" :title="e.titulo">
      <Text fz="xs" c="var(--ds-text-3)">{{ e.data }}</Text>
    </TimelineItem>
  </Timeline>
</template>
