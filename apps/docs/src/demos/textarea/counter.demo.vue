<script lang="ts">
export const meta = { centered: true, maxWidth: 480 };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Textarea } from '@jcdecor/vue';

const LIMITE = 280;

const value = ref('Instalaram o piso em um dia, acabamento impecável.');
const restante = computed(() => LIMITE - value.value.length);
</script>

<template>
  <Textarea
    :model-value="value"
    label="Conte como foi sua experiência"
    :description="`${restante} caracteres restantes`"
    :error="value.trim().length < 10 ? 'Escreva pelo menos 10 caracteres' : undefined"
    autosize
    :min-rows="3"
    @update:model-value="(v) => (value = v.slice(0, LIMITE))"
  />
</template>
