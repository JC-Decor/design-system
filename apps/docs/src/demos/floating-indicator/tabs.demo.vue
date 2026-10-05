<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Box, FloatingIndicator, Group, Text, UnstyledButton } from '@jcdecor/vue';

const tabs = [
  { value: 'todos', label: 'Todos', count: 128 },
  { value: 'pagos', label: 'Pagos', count: 96 },
  { value: 'enviados', label: 'Enviados', count: 24 },
  { value: 'cancelados', label: 'Cancelados', count: 8 },
];

const root = ref<HTMLElement | null>(null);
const refs = reactive<Record<string, HTMLElement | null>>({});
const active = ref('todos');

const setRoot = (el: Element | null) => (root.value = el as HTMLElement | null);
const setRef = (value: string) => (el: Element | null) => (refs[value] = el as HTMLElement | null);
</script>

<template>
  <Box
    :root-ref="setRoot"
    pos="relative"
    :p="4"
    bg="var(--ds-bg)"
    role="tablist"
    aria-label="Filtrar pedidos"
    :style="{ borderRadius: 'var(--ds-radius)', border: '1px solid var(--ds-border-soft)' }"
  >
    <Group :gap="4" wrap="nowrap">
      <UnstyledButton
        v-for="tab in tabs"
        :key="tab.value"
        :root-ref="setRef(tab.value)"
        role="tab"
        :aria-selected="active === tab.value"
        px="md"
        :py="8"
        :style="{ position: 'relative', zIndex: 1, borderRadius: 'var(--ds-radius-sm)' }"
        @click="active = tab.value"
      >
        <Group :gap="6" wrap="nowrap">
          <Text fz="sm" :fw="600" :c="active === tab.value ? 'var(--ds-primary)' : 'var(--ds-text-2)'">{{ tab.label }}</Text>
          <Text fz="xs" c="var(--ds-text-3)">{{ tab.count }}</Text>
        </Group>
      </UnstyledButton>
    </Group>

    <FloatingIndicator
      :target="refs[active]"
      :parent="root"
      :style="{ backgroundColor: 'var(--ds-surface)', borderRadius: 'var(--ds-radius-sm)', boxShadow: 'var(--ds-shadow-sm)' }"
    />
  </Box>
</template>
