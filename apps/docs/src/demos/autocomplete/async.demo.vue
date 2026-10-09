<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Autocomplete, Loader } from '@jcdecor/vue';
import { IconMapPin } from '@tabler/icons-vue';

const ruas = ['Rua Augusta', 'Rua Oscar Freire', 'Rua dos Pinheiros', 'Rua da Consolação', 'Avenida Paulista', 'Avenida Rebouças'];

/** Simula a consulta de endereços na API de CEP. */
const buscarEnderecos = (query: string) =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(ruas.filter((rua) => rua.toLowerCase().includes(query.toLowerCase()))), 800),
  );

const value = ref('');
const data = ref<string[]>([]);
const loading = ref(false);
let timeout = -1;

watch(value, (query) => {
  window.clearTimeout(timeout);
  data.value = [];
  if (query.trim().length < 2) {
    loading.value = false;
    return;
  }
  loading.value = true;
  timeout = window.setTimeout(async () => {
    data.value = await buscarEnderecos(query);
    loading.value = false;
  }, 300);
});
</script>

<template>
  <Autocomplete
    v-model="value"
    label="Endereço de entrega"
    placeholder="Digite ao menos 2 letras"
    :data="data"
    :filter="({ options }) => options"
  >
    <template #leftSection><IconMapPin :size="18" /></template>
    <template v-if="loading" #rightSection><Loader :size="16" /></template>
  </Autocomplete>
</template>
