<script setup lang="ts">
import { LineChart } from '@jcdecor/vue/charts';

const data = [
  { dia: '01/09', conversao: 1.8 },
  { dia: '05/09', conversao: 2.1 },
  { dia: '09/09', conversao: 1.9 },
  { dia: '13/09', conversao: 2.4 },
  { dia: '17/09', conversao: 2.7 },
  { dia: '21/09', conversao: 2.3 },
  { dia: '25/09', conversao: 2.9 },
  { dia: '29/09', conversao: 3.1 },
];

// O Mantine Vue não usa `unit`: o "%" entra no formatador (tooltip e eixo)
const formatValue = (value: number) => `${value.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}%`;
</script>

<template>
  <LineChart
    :data="data"
    data-key="dia"
    with-dots
    :value-formatter="formatValue"
    :reference-lines="[{ y: 2.5, label: 'Meta 2,5%', color: 'danger.6' }]"
    :series="[{ name: 'conversao', label: 'Taxa de conversão' }]"
  />
</template>
