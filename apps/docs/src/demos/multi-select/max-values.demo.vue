<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { MultiSelect } from '@jcdecor/vue';
</script>

<template>
  <MultiSelect
    label="Compare até 3 pisos"
    description="As opções escolhidas saem da lista"
    placeholder="Escolha os modelos"
    :data="['Vinílico Carvalho Natural', 'Vinílico Nogueira', 'Vinílico Cinza Concreto', 'Laminado Freijó', 'Laminado Branco Polar']"
    :max-values="3"
    hide-picked-options
  />
</template>
