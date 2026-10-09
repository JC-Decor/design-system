<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Box, Text } from '@jcdecor/vue';
</script>

<template>
  <Box
    :p="{ base: 'md', sm: 'lg' }"
    :maw="360"
    bg="var(--ds-primary-soft)"
    c="var(--ds-primary)"
    :style="{ borderRadius: 'var(--ds-radius)' }"
  >
    <Text :fw="600">Cupom PRIMEIRA10</Text>
    <Text fz="sm">10% de desconto na primeira compra de pisos vinílicos.</Text>
  </Box>
</template>
