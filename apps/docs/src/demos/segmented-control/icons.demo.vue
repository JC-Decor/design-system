<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { h, ref } from 'vue';
import { Center, SegmentedControl, Stack, Text } from '@jcdecor/vue';
import { IconLayoutGrid, IconList } from '@tabler/icons-vue';

const view = ref('grade');

// `label` aceita qualquer conteúdo renderizável (VNode ou função que retorna um).
const data = [
  { value: 'grade', label: () => h(Center, { style: { gap: '6px' } }, () => [h(IconLayoutGrid, { size: 16 }), 'Grade']) },
  { value: 'lista', label: () => h(Center, { style: { gap: '6px' } }, () => [h(IconList, { size: 16 }), 'Lista']) },
];
</script>

<template>
  <Stack align="center" gap="xs">
    <SegmentedControl v-model="view" :data="data" />
    <Text fz="sm" c="var(--ds-text-3)">Exibindo produtos em {{ view }}</Text>
  </Stack>
</template>
