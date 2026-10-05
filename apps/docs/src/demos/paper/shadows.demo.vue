<script lang="ts">
export const meta = { background: 'page' };
</script>

<script setup lang="ts">
import { Paper, SimpleGrid, Text } from '@jcdecor/vue';

const shadows = ['xs', 'sm', 'md', 'lg'] as const;
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 2, '560px': 4 }" spacing="lg" w="100%">
    <Paper v-for="shadow in shadows" :key="shadow" :shadow="shadow" p="lg" ta="center">
      <Text :fw="600">shadow="{{ shadow }}"</Text>
    </Paper>
  </SimpleGrid>
</template>
