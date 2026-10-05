<script setup lang="ts">
import { computed, ref } from 'vue';
import { Group, Pagination, Text } from '@jcdecor/vue';

const total = 248;
const perPage = 20;

const page = ref(1);
const start = computed(() => (page.value - 1) * perPage + 1);
const end = computed(() => Math.min(page.value * perPage, total));
</script>

<template>
  <Group justify="space-between" w="100%">
    <Text fz="sm" c="var(--ds-text-3)">Mostrando {{ start }}–{{ end }} de {{ total }} produtos</Text>
    <Pagination v-model="page" :total="Math.ceil(total / perPage)" size="sm" />
  </Group>
</template>
