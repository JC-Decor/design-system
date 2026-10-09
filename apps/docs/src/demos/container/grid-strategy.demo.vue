<script setup lang="ts">
import { Box, Container, Text } from '@jcdecor/vue';
</script>

<template>
  <Container
    strategy="grid"
    :size="480"
    w="100%"
    py="md"
    :style="{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }"
  >
    <Box p="sm" bg="var(--ds-primary-soft)" :style="{ borderRadius: 'var(--ds-radius-sm)' }">
      <Text fz="sm">Conteúdo limitado a 480px</Text>
    </Box>
    <Box data-breakout mt="sm" p="sm" bg="var(--ds-surface-2)" :style="{ borderRadius: 'var(--ds-radius-sm)' }">
      <Text fz="sm">data-breakout: banner que ocupa toda a largura do container</Text>
    </Box>
  </Container>
</template>
