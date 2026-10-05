<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Group, Progress, Rating, Stack, Text } from '@jcdecor/vue';

const distribuicao = [
  { estrelas: 5, pct: 72 },
  { estrelas: 4, pct: 18 },
  { estrelas: 3, pct: 6 },
  { estrelas: 2, pct: 3 },
  { estrelas: 1, pct: 1 },
];
</script>

<template>
  <Stack w="100%" gap="sm">
    <Group gap="sm" align="center">
      <Text :fw="700" fz="var(--type-headline-md)">4,6</Text>
      <div>
        <Rating :model-value="4.6" :fractions="10" read-only aria-label="Nota média 4,6 de 5" />
        <Text fz="xs" c="var(--ds-text-3)">1.284 avaliações</Text>
      </div>
    </Group>
    <Group v-for="d in distribuicao" :key="d.estrelas" gap="xs" wrap="nowrap">
      <Text fz="xs" :w="72" c="var(--ds-text-2)" :style="{ whiteSpace: 'nowrap' }">
        {{ d.estrelas }} {{ d.estrelas === 1 ? 'estrela' : 'estrelas' }}
      </Text>
      <Progress
        :value="d.pct"
        color="electric.4"
        :style="{ flex: 1 }"
        :aria-label="`${d.pct}% das avaliações com ${d.estrelas} de 5`"
      />
      <Text fz="xs" :w="32" ta="right" c="var(--ds-text-3)">{{ d.pct }}%</Text>
    </Group>
  </Stack>
</template>
