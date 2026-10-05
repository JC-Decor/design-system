<script setup lang="ts">
// Prévia do playground: as props dos controles caem direto no Stack (raiz) e sobrescrevem os padrões abaixo.
import { Box, Stack } from '@jcdecor/vue';

const items = ['Endereço', 'Entrega', 'Pagamento'];
</script>

<template>
  <Stack :h="260" p="sm" :style="{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }">
    <Box
      v-for="item in items"
      :key="item"
      px="md"
      py="xs"
      bg="var(--ds-primary-soft)"
      c="var(--ds-primary)"
      :fw="600"
      fz="sm"
      :style="{ borderRadius: 'var(--ds-radius-sm)' }"
    >
      {{ item }}
    </Box>
  </Stack>
</template>
