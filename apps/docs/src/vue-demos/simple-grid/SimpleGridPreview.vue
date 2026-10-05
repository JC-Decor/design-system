<script setup lang="ts">
// Prévia do playground: as props dos controles (cols, spacing, verticalSpacing) caem direto no SimpleGrid (raiz).
import { Box, SimpleGrid } from '@jcdecor/vue';

const items = ['Pisos', 'Papéis', 'Painéis', 'Gramas', 'Cortinas', 'Tatames'];
</script>

<template>
  <SimpleGrid>
    <Box
      v-for="item in items"
      :key="item"
      p="md"
      bg="var(--ds-primary-soft)"
      c="var(--ds-primary)"
      :fw="600"
      fz="sm"
      ta="center"
      :style="{ borderRadius: 'var(--ds-radius-sm)' }"
    >
      {{ item }}
    </Box>
  </SimpleGrid>
</template>
