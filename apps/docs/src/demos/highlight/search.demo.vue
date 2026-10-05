<script setup lang="ts">
import { computed, ref } from 'vue';
import { Highlight, Stack, Text, TextInput } from '@jcdecor/vue';
import { IconSearch } from '@tabler/icons-vue';

const produtos = [
  'Piso vinílico Carvalho Natural — click, 5 mm',
  'Piso laminado Carvalho Europeu — 7 mm',
  'Painel ripado Freijó — MDF 18 mm',
  'Papel de parede Linho Bege — rolo 10 m',
  'Rodapé de poliestireno branco — 10 cm',
];

const busca = ref('carvalho');
const semResultados = computed(() => busca.value && produtos.every((nome) => !nome.toLowerCase().includes(busca.value.toLowerCase())));
</script>

<template>
  <Stack gap="md" w="100%" :maw="480">
    <TextInput v-model="busca" placeholder="Buscar produtos" aria-label="Buscar produtos">
      <template #leftSection><IconSearch :size="16" /></template>
    </TextInput>
    <Stack gap="xs">
      <Highlight v-for="nome in produtos" :key="nome" :highlight="busca" fz="sm">{{ nome }}</Highlight>
      <Text v-if="semResultados" fz="sm" c="var(--ds-text-3)">Nenhum produto encontrado para “{{ busca }}”.</Text>
    </Stack>
  </Stack>
</template>
