<script setup lang="ts">
// Prévia do playground: as props dos controles caem direto no Flex (raiz) e sobrescrevem os padrões abaixo.
import { Box, Flex } from '@jcdecor/vue';

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
  <Flex :mih="140" p="sm" :style="{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }">
    <Box v-bind="item">Piso</Box>
    <Box v-bind="item" :h="56">Papel de parede</Box>
    <Box v-bind="item">Cortina</Box>
  </Flex>
</template>
