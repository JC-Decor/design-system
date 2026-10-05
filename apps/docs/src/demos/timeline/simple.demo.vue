<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Text, Timeline, TimelineItem } from '@jcdecor/vue';
</script>

<!-- Itens escritos um a um: no Mantine Vue 3.5 o Timeline não conta itens gerados por v-for (o `active` não é aplicado) -->
<template>
  <Timeline :active="1" :bullet-size="14">
    <TimelineItem title="Orçamento enviado">
      <Text fz="xs" c="var(--ds-text-3)">12/09</Text>
    </TimelineItem>
    <TimelineItem title="Medição no local">
      <Text fz="xs" c="var(--ds-text-3)">16/09</Text>
    </TimelineItem>
    <TimelineItem title="Instalação agendada">
      <Text fz="xs" c="var(--ds-text-3)">24/09</Text>
    </TimelineItem>
    <TimelineItem title="Vistoria final">
      <Text fz="xs" c="var(--ds-text-3)">—</Text>
    </TimelineItem>
  </Timeline>
</template>
