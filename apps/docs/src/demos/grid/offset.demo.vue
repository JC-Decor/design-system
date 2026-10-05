<script setup lang="ts">
import { Box, Grid, GridCol } from '@jcdecor/vue';

const item = {
  p: 'md',
  bg: 'var(--ds-primary-soft)',
  c: 'var(--ds-primary)',
  fw: 600,
  fz: 'sm',
  ta: 'center',
  style: { borderRadius: 'var(--ds-radius-sm)' },
} as const;
</script>

<template>
  <Grid gap="md" w="100%">
    <GridCol :span="3">
      <Box v-bind="item">span 3</Box>
    </GridCol>
    <GridCol :span="3" :offset="3">
      <Box v-bind="item">span 3 · offset 3</Box>
    </GridCol>
    <GridCol :span="4" :offset="4">
      <Box v-bind="item">span 4 · offset 4</Box>
    </GridCol>
  </Grid>
</template>
