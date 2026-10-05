<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Box, Text, TooltipFloating } from '@jcdecor/vue';
</script>

<template>
  <TooltipFloating label="Clique para ampliar">
    <Box
      :h="160"
      bg="var(--ds-primary-soft)"
      :style="{ borderRadius: 'var(--ds-radius)', display: 'grid', placeItems: 'center', cursor: 'zoom-in' }"
    >
      <Text fz="sm" c="var(--ds-text-2)">Passe o mouse sobre a imagem</Text>
    </Box>
  </TooltipFloating>
</template>
