<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { NativeSelect } from '@jcdecor/vue';

const data = [
  { group: 'Pisos', items: [{ label: 'Piso vinílico', value: 'vinilico' }, { label: 'Piso laminado', value: 'laminado' }] },
  { group: 'Paredes', items: [{ label: 'Papel de parede', value: 'papel' }, { label: 'Painel ripado', value: 'ripado' }] },
  { group: 'Janelas', items: [{ label: 'Cortina', value: 'cortina' }, { label: 'Persiana', value: 'persiana', disabled: true }] },
];
</script>

<template>
  <NativeSelect label="Categoria" default-value="vinilico" :data="data" />
</template>
