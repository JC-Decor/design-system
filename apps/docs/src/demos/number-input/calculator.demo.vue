<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Group, NumberFormatter, NumberInput, Paper, Stack, Text } from '@jcdecor/vue';

const M2_POR_CAIXA = 2.2;
const PRECO_CAIXA = 219.9;

const area = ref<number | string>(18);
const perda = ref<number | string>(10);
const total = computed(() => Number(area.value) * (1 + Number(perda.value) / 100));
const caixas = computed(() => Math.ceil(total.value / M2_POR_CAIXA));
</script>

<template>
  <Stack w="100%">
    <Group grow align="flex-start">
      <NumberInput v-model="area" label="Área (m²)" :min="0" :decimal-scale="2" decimal-separator="," />
      <NumberInput v-model="perda" label="Margem de perda" :min="0" :max="30" suffix="%" />
    </Group>
    <Paper with-border p="md" radius="md">
      <Text fz="sm" c="var(--ds-text-2)">
        Você precisa de <b>{{ caixas }} caixas</b> ({{ total.toFixed(2).replace('.', ',') }} m²)
      </Text>
      <Text :fw="600" fz="lg" c="var(--ds-primary)">
        <NumberFormatter
          :value="caixas * PRECO_CAIXA"
          prefix="R$ "
          :decimal-scale="2"
          fixed-decimal-scale
          decimal-separator=","
          thousand-separator="."
        />
      </Text>
    </Paper>
  </Stack>
</template>
