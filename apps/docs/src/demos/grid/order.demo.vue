<script setup lang="ts">
import { Box, Grid, GridCol } from '@jcdecor/vue';

const item = {
  p: 'md',
  bg: 'var(--ds-primary-soft)',
  c: 'var(--ds-primary)',
  fw: 600,
  fz: 'sm',
  ta: 'center',
  h: '100%',
  style: { borderRadius: 'var(--ds-radius-sm)' },
} as const;
</script>

<template>
  <Grid gap="md" w="100%">
    <GridCol :span="{ base: 12, sm: 4 }" :order="{ base: 2, sm: 1 }">
      <Box v-bind="item">Filtros (2º no mobile)</Box>
    </GridCol>
    <GridCol :span="{ base: 12, sm: 8 }" :order="{ base: 1, sm: 2 }">
      <Box v-bind="item">Resultados (1º no mobile)</Box>
    </GridCol>
  </Grid>
</template>
