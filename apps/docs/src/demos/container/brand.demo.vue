<script lang="ts">
export const meta = { background: 'page' };
</script>

<script setup lang="ts">
import { Container, Text } from '@jcdecor/vue';
</script>

<template>
  <Container
    :size="1224"
    w="100%"
    p="lg"
    bg="var(--ds-surface)"
    :style="{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius)' }"
  >
    <Text :fw="600">Container size={1224}</Text>
    <Text fz="sm" c="var(--ds-text-2)">
      Largura máxima do grid da marca (--grid-max). Use para o conteúdo das páginas da loja.
    </Text>
  </Container>
</template>
