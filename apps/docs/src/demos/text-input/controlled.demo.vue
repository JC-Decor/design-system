<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { CloseButton, TextInput } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';

const value = ref('Painel ripado');
</script>

<template>
  <TextInput
    v-model="value"
    label="Buscar na loja"
    :description="value ? `Mostrando resultados para “${value}”` : 'Digite o nome de um produto'"
    placeholder="Ex.: papel de parede"
  >
    <template #leftSection><IconSearch :size="16" /></template>
    <template v-if="value" #rightSection>
      <CloseButton size="sm" aria-label="Limpar busca" @click="value = ''" />
    </template>
  </TextInput>
</template>
