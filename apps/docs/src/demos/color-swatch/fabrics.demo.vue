<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { CheckIcon, ColorSwatch, Group, Stack, Text } from '@jcdecor/vue';

// Cores reais do tecido (catálogo do produto), não tokens de interface
const tecidos = [
  { nome: 'Linho cru', cor: '#D8CBB3' },
  { nome: 'Areia', cor: '#C2A27C' },
  { nome: 'Terracota', cor: '#B5583A' },
  { nome: 'Verde-oliva', cor: '#6B6B3A' },
  { nome: 'Azul petróleo', cor: '#1F4E5F' },
  { nome: 'Grafite', cor: '#3A3C40' },
];

const selecionado = ref(tecidos[1]);
</script>

<template>
  <Stack gap="xs" align="center">
    <Text fz="sm" c="var(--ds-text-2)">
      Cor do tecido:
      <Text span :fw="600" c="var(--ds-text)">{{ selecionado.nome }}</Text>
    </Text>
    <Group gap="sm">
      <ColorSwatch
        v-for="tecido in tecidos"
        :key="tecido.nome"
        component="button"
        :color="tecido.cor"
        :size="36"
        :aria-label="tecido.nome"
        :aria-pressed="selecionado.nome === tecido.nome"
        :style="{ color: 'white', cursor: 'pointer' }"
        @click="selecionado = tecido"
      >
        <CheckIcon v-if="selecionado.nome === tecido.nome" :size="14" />
      </ColorSwatch>
    </Group>
  </Stack>
</template>
