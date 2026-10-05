<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Group, Marquee, Paper, Text } from '@jcdecor/vue';
import { IconStarFilled } from '@tabler/icons-vue';

const avaliacoes = [
  { nome: 'Mariana S.', texto: 'O piso ficou lindo e a instalação foi rápida.' },
  { nome: 'Carlos L.', texto: 'Papel de parede de ótima qualidade, chegou antes do prazo.' },
  { nome: 'Ana R.', texto: 'A cortina blackout escureceu o quarto por completo.' },
];
</script>

<template>
  <Marquee
    orientation="vertical"
    :h="260"
    :w="320"
    gap="sm"
    :duration="25000"
    pause-on-hover
    reverse
    fade-edge-color="var(--ds-surface)"
  >
    <Paper v-for="a in avaliacoes" :key="a.nome" with-border p="md">
      <Group :gap="2" c="electric.4" :mb="4">
        <IconStarFilled v-for="n in 5" :key="n" :size="12" />
      </Group>
      <Text fz="sm">{{ a.texto }}</Text>
      <Text fz="xs" c="var(--ds-text-3)" :mt="4">{{ a.nome }}</Text>
    </Paper>
  </Marquee>
</template>
