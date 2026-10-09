<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Box } from '@jcdecor/vue';
</script>

<template>
  <Box
    component="a"
    href="#"
    px="md"
    py="sm"
    :fw="600"
    c="var(--ds-primary)"
    td="none"
    :style="{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius-sm)' }"
  >
    Ver todas as cortinas →
  </Box>
</template>
