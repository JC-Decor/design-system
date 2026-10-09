<script setup lang="ts">
import { Box, Grid, GridCol, Text } from '@jcdecor/vue';

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
  <!-- Redimensione o container pela alça no canto inferior direito -->
  <Box w="100%" :style="{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%', minWidth: '240px' }">
    <Text fz="xs" c="var(--ds-text-3)" mb="xs">Arraste o canto para redimensionar</Text>
    <Grid
      type="container"
      :breakpoints="{ xs: '200px', sm: '400px', md: '600px', lg: '800px', xl: '1000px' }"
      gap="md"
    >
      <GridCol v-for="n in 4" :key="n" :span="{ base: 12, sm: 6, md: 3 }">
        <Box v-bind="item">Card {{ n }}</Box>
      </GridCol>
    </Grid>
  </Box>
</template>
