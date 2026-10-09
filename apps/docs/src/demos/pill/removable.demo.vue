<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Button, Group, Pill, PillGroup, Text } from '@jcdecor/vue';

const iniciais = ['Sala', 'Até R$ 100/m²', 'Carvalho', 'Autocolante', 'Pronta entrega'];

const filtros = ref([...iniciais]);

const remover = (filtro: string) => {
  filtros.value = filtros.value.filter((f) => f !== filtro);
};
</script>

<template>
  <Group gap="sm">
    <Text fz="sm" c="var(--ds-text-2)">Filtros ativos:</Text>
    <PillGroup>
      <Pill v-for="filtro in filtros" :key="filtro" with-remove-button @remove="remover(filtro)">{{ filtro }}</Pill>
    </PillGroup>
    <Button v-if="filtros.length < iniciais.length" size="xs" variant="subtle" @click="filtros = [...iniciais]">Restaurar</Button>
  </Group>
</template>
