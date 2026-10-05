<script lang="ts">
export const meta = { withoutPadding: true, background: 'page' };
</script>

<script setup lang="ts">
import { Box, Text } from '@jcdecor/vue';
</script>

<template>
  <Box py="lg" w="100%">
    <div class="ds-container">
      <Box p="lg" bg="var(--ds-surface)" :style="{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius)' }">
        <Text :fw="600">.ds-container</Text>
        <Text fz="sm" c="var(--ds-text-2)">Máx. 1224px, centralizado, com margens laterais responsivas.</Text>
      </Box>
    </div>
  </Box>
</template>
