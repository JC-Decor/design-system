<script setup lang="ts">
import { Box, SimpleGrid } from '@jcdecor/vue';

const cores = ['Areia', 'Grafite', 'Off-white', 'Linho', 'Terracota', 'Oliva', 'Marinho'];
</script>

<template>
  <SimpleGrid :min-col-width="140" auto-flow="auto-fill" spacing="sm" w="100%">
    <Box
      v-for="cor in cores"
      :key="cor"
      p="md"
      bg="var(--ds-primary-soft)"
      c="var(--ds-primary)"
      :fw="600"
      fz="sm"
      ta="center"
      :style="{ borderRadius: 'var(--ds-radius-sm)' }"
    >
      {{ cor }}
    </Box>
  </SimpleGrid>
</template>
