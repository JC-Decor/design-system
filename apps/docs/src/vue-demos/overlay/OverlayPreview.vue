<script setup lang="ts">
import { Box, Overlay, Text } from '@jcdecor/vue';

defineProps<{
  backgroundOpacity?: number;
  blur?: number;
  color?: string;
}>();
</script>

<template>
  <Box pos="relative" :h="180" p="md" bg="var(--ds-primary-soft)" :style="{ borderRadius: 'var(--ds-radius)', overflow: 'hidden' }">
    <Text :fw="600">Conteúdo da página</Text>
    <Text fz="sm" c="var(--ds-text-2)" mt="xs">
      Piso vinílico Carvalho, papel de parede Linho e cortina blackout com frete grátis para o Sudeste.
    </Text>
    <Overlay :background-opacity="backgroundOpacity" :blur="blur" :color="color" />
  </Box>
</template>
