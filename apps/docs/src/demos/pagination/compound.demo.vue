<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Group, PaginationNext, PaginationPrevious, PaginationRoot, Text } from '@jcdecor/vue';

const total = 6;
const page = ref(2);
</script>

<template>
  <PaginationRoot v-model="page" :total="total">
    <Group gap="sm" justify="center">
      <PaginationPrevious />
      <Text fz="sm" c="var(--ds-text-2)" :miw="120" ta="center">Página {{ page }} de {{ total }}</Text>
      <PaginationNext />
    </Group>
  </PaginationRoot>
</template>
