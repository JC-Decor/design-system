<script setup lang="ts">
// Prévia do playground: as props dos controles (gap, columns, grow, justify) caem direto no Grid (raiz).
import { Box, Grid, GridCol } from '@jcdecor/vue';

const spans = [4, 4, 4, 6, 6];
</script>

<template>
  <Grid>
    <GridCol v-for="(span, index) in spans" :key="index" :span="span">
      <Box
        p="md"
        bg="var(--ds-primary-soft)"
        c="var(--ds-primary)"
        :fw="600"
        fz="sm"
        ta="center"
        :style="{ borderRadius: 'var(--ds-radius-sm)' }"
      >
        span {{ span }}
      </Box>
    </GridCol>
  </Grid>
</template>
