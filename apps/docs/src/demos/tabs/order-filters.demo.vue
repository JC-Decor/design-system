<script setup lang="ts">
import { Badge, Tabs, TabsList, TabsTab } from '@jcdecor/vue';

const filters = [
  { value: 'todos', label: 'Todos', count: 248 },
  { value: 'pendentes', label: 'Pendentes', count: 12 },
  { value: 'enviados', label: 'Enviados', count: 31 },
  { value: 'cancelados', label: 'Cancelados', count: 4 },
];
</script>

<template>
  <Tabs variant="pills" default-value="pendentes">
    <TabsList>
      <TabsTab v-for="filter in filters" :key="filter.value" :value="filter.value">
        <template #rightSection>
          <Badge size="sm" variant="light" color="gray">{{ filter.count }}</Badge>
        </template>
        {{ filter.label }}
      </TabsTab>
    </TabsList>
  </Tabs>
</template>
