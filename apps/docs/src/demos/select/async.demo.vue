<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Loader, Select } from '@jcdecor/vue';

/** Simula a busca das lojas na API. */
const fetchLojas = () =>
  new Promise<string[]>((resolve) =>
    setTimeout(() => resolve(['JC Decor Moema', 'JC Decor Pinheiros', 'JC Decor Campinas', 'JC Decor Curitiba']), 1200),
  );

const lojas = ref<string[]>([]);
const loading = ref(false);

const handleOpen = async () => {
  if (lojas.value.length > 0) return;
  loading.value = true;
  lojas.value = await fetchLojas();
  loading.value = false;
};
</script>

<template>
  <Select
    label="Retirar na loja"
    placeholder="Escolha a loja"
    :data="lojas"
    :nothing-found-message="loading ? 'Carregando lojas…' : 'Nenhuma loja disponível'"
    @dropdown-open="handleOpen"
  >
    <template v-if="loading" #rightSection><Loader :size="16" /></template>
  </Select>
</template>
