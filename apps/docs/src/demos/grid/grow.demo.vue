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
  <Grid grow gap="md" w="100%">
    <GridCol v-for="n in 5" :key="n" :span="4">
      <Box v-bind="item">{{ n }}</Box>
    </GridCol>
  </Grid>
</template>
