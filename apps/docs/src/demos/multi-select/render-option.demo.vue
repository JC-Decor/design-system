<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ColorSwatch, Group, MultiSelect, Text } from '@jcdecor/vue';

/** Amostras de acabamento vindas do catálogo (cores do produto, não da UI). */
const acabamentos: Record<string, { label: string; amostra: string }> = {
  carvalho: { label: 'Carvalho natural', amostra: '#C8A27A' },
  nogueira: { label: 'Nogueira', amostra: '#6B4A33' },
  concreto: { label: 'Cinza concreto', amostra: '#9A9A96' },
  polar: { label: 'Branco polar', amostra: '#F2F0EB' },
  grafite: { label: 'Grafite', amostra: '#3B3D40' },
};

const data = Object.entries(acabamentos).map(([value, { label }]) => ({ value, label }));
</script>

<template>
  <MultiSelect label="Acabamentos" placeholder="Escolha os tons" :data="data" :default-value="['carvalho']">
    <template #renderOption="{ option, checked }">
      <Group gap="sm" wrap="nowrap">
        <ColorSwatch :color="acabamentos[option.value].amostra" :size="18" />
        <Text fz="sm" :fw="checked ? 600 : 400">{{ option.label }}</Text>
      </Group>
    </template>
  </MultiSelect>
</template>
