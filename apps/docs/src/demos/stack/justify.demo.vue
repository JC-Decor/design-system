<script setup lang="ts">
import { Box, Button, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack
    justify="space-between"
    :h="260"
    :w="280"
    p="md"
    bg="var(--ds-surface-2)"
    :style="{ borderRadius: 'var(--ds-radius)' }"
  >
    <Box>
      <Text :fw="600">Frete grátis</Text>
      <Text fz="sm" c="var(--ds-text-2)">Em compras acima de R$ 499 para todo o Sudeste.</Text>
    </Box>
    <Button full-width>Aproveitar</Button>
  </Stack>
</template>
