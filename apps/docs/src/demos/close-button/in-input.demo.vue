<script lang="ts">
export const meta = { centered: true, maxWidth: 380 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { CloseButton, TextInput } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';

const value = ref('Piso vinílico');
</script>

<template>
  <TextInput v-model="value" label="Buscar" placeholder="O que você procura?">
    <template #leftSection><IconSearch :size="18" /></template>
    <template v-if="value" #rightSection>
      <CloseButton aria-label="Limpar busca" @click="value = ''" />
    </template>
  </TextInput>
</template>
