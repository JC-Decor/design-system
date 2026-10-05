<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { MultiSelect } from '@jcdecor/vue';

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];
</script>

<template>
  <MultiSelect
    label="Categorias de interesse"
    placeholder="Busque categorias"
    :data="categorias"
    :default-value="['Pisos vinílicos', 'Cortinas']"
    searchable
    clearable
    nothing-found-message="Nenhuma categoria encontrada"
  />
</template>
