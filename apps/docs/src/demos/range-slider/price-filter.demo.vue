<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Group, NumberInput, RangeSlider, Stack, Text } from '@jcdecor/vue';

const MIN = 0;
const MAX = 2000;
const reais = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

const range = ref<[number, number]>([150, 900]);
</script>

<template>
  <Stack w="100%" gap="md">
    <Text fz="sm" :fw="500" c="var(--ds-text-2)">Faixa de preço</Text>
    <RangeSlider
      v-model="range"
      :min="MIN"
      :max="MAX"
      :step="10"
      :min-range="50"
      :label="reais"
      :thumb-label="['Preço mínimo', 'Preço máximo']"
    />
    <Group grow>
      <NumberInput
        label="Mínimo"
        prefix="R$ "
        thousand-separator="."
        decimal-separator=","
        :min="MIN"
        :max="range[1]"
        :model-value="range[0]"
        hide-controls
        @update:model-value="(v) => (range = [Number(v) || MIN, range[1]])"
      />
      <NumberInput
        label="Máximo"
        prefix="R$ "
        thousand-separator="."
        decimal-separator=","
        :min="range[0]"
        :max="MAX"
        :model-value="range[1]"
        hide-controls
        @update:model-value="(v) => (range = [range[0], Number(v) || MAX])"
      />
    </Group>
  </Stack>
</template>
