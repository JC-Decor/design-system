<script setup lang="ts">
import { Box, SimpleGrid, Text } from '@jcdecor/vue';

const kpis = ['Pedidos', 'Clientes', 'Ticket médio', 'Conversão'];
</script>

<template>
  <Box w="100%" :style="{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%', minWidth: '220px' }">
    <Text fz="xs" c="var(--ds-text-3)" mb="xs">Arraste o canto para redimensionar</Text>
    <SimpleGrid type="container" :cols="{ base: 1, '300px': 2, '600px': 4 }" :spacing="{ base: 'sm', '300px': 'md' }">
      <Box
        v-for="kpi in kpis"
        :key="kpi"
        p="md"
        bg="var(--ds-primary-soft)"
        c="var(--ds-primary)"
        :fw="600"
        fz="sm"
        ta="center"
        :style="{ borderRadius: 'var(--ds-radius-sm)' }"
      >
        {{ kpi }}
      </Box>
    </SimpleGrid>
  </Box>
</template>
