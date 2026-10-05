<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Group, Kbd, Stack, Text } from '@jcdecor/vue';

const atalhos = [
  { acao: 'Buscar produtos', teclas: ['Ctrl', 'K'] },
  { acao: 'Abrir carrinho', teclas: ['Shift', 'C'] },
  { acao: 'Novo pedido', teclas: ['Ctrl', 'Shift', 'N'] },
  { acao: 'Fechar janela', teclas: ['Esc'] },
];
</script>

<template>
  <Stack gap="sm" w="100%">
    <Group v-for="atalho in atalhos" :key="atalho.acao" justify="space-between">
      <Text fz="sm" c="var(--ds-text-2)">{{ atalho.acao }}</Text>
      <Group :gap="4">
        <Group v-for="(tecla, i) in atalho.teclas" :key="tecla" :gap="4">
          <Text v-if="i > 0" span fz="xs" c="var(--ds-text-3)">+</Text>
          <Kbd>{{ tecla }}</Kbd>
        </Group>
      </Group>
    </Group>
  </Stack>
</template>
