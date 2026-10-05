<script setup lang="ts">
// Prévia do playground: as props dos controles caem direto no Group (raiz) e sobrescrevem os padrões abaixo.
import { Box, Group } from '@jcdecor/vue';

const item = {
  px: 'md',
  py: 'xs',
  bg: 'var(--ds-primary-soft)',
  c: 'var(--ds-primary)',
  fw: 600,
  fz: 'sm',
  style: { borderRadius: 'var(--ds-radius-sm)' },
} as const;
</script>

<template>
  <Group :mih="80" p="sm" :style="{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }">
    <Box v-bind="item">Pisos</Box>
    <Box v-bind="item">Papel de parede</Box>
    <Box v-bind="item">Painel ripado com acabamento</Box>
  </Group>
</template>
