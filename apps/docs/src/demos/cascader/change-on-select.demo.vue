<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Cascader, Stack, Text, type CascaderFormatValue, type CascaderOption } from '@jcdecor/vue';

const categorias: CascaderOption[] = [
  {
    value: 'pisos',
    label: 'Pisos',
    children: [
      { value: 'vinilico', label: 'Vinílico', children: [{ value: 'autocolante', label: 'Autocolante' }, { value: 'clicado', label: 'Clicado' }] },
      { value: 'laminado', label: 'Laminado' },
    ],
  },
  {
    value: 'paredes',
    label: 'Paredes',
    children: [
      { value: 'papel', label: 'Papel de parede' },
      { value: 'ripado', label: 'Painel ripado' },
    ],
  },
];

const value = ref<string[] | null>(['pisos', 'vinilico']);

const formatValue: CascaderFormatValue = ({ options }) => options.map((option) => option.label).join(' / ');
</script>

<template>
  <Stack>
    <Cascader
      v-model="value"
      label="Filtrar catálogo"
      description="Qualquer nível pode ser escolhido"
      :data="categorias"
      change-on-select
      :with-columns="false"
      :format-value="formatValue"
    />
    <Text fz="sm" c="var(--ds-text-2)">Caminho: {{ value?.join(' → ') ?? '—' }}</Text>
  </Stack>
</template>
