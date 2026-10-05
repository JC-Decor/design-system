<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ActionIcon, Button, FloatingWindow, Group, NumberInput, Stack, Text } from '@jcdecor/vue';
import { IconCalculator, IconGripVertical, IconX } from '@tabler/icons-vue';

const opened = ref(false);
const width = ref(3.2);
const height = ref(2.6);

const area = computed(() => width.value * height.value);
const rolls = computed(() => Math.ceil((area.value * 1.1) / 5.3));
</script>

<template>
  <Button variant="outline" @click="opened = !opened">
    <template #leftSection><IconCalculator :size="18" /></template>
    {{ opened ? 'Fechar calculadora' : 'Abrir calculadora de rolos' }}
  </Button>

  <FloatingWindow
    v-if="opened"
    :w="300"
    :p="0"
    :initial-position="{ top: 120, right: 40 }"
    drag-handle-selector=".drag-handle"
    exclude-drag-handle-selector="button"
    :constrain-offset="16"
  >
    <Group class="drag-handle" justify="space-between" px="sm" :py="6" :style="{ cursor: 'move', borderBottom: '1px solid var(--ds-border-soft)' }">
      <Group :gap="6">
        <IconGripVertical :size="16" color="var(--ds-text-3)" />
        <Text fz="sm" :fw="600">Calculadora de rolos</Text>
      </Group>
      <ActionIcon variant="subtle" color="gray" size="sm" aria-label="Fechar" @click="opened = false">
        <IconX :size="16" />
      </ActionIcon>
    </Group>

    <Stack p="md" gap="sm">
      <Group grow>
        <NumberInput
          size="sm"
          label="Largura (m)"
          :model-value="width"
          :decimal-scale="2"
          decimal-separator=","
          :min="0"
          @update:model-value="(v) => (width = Number(v) || 0)"
        />
        <NumberInput
          size="sm"
          label="Altura (m)"
          :model-value="height"
          :decimal-scale="2"
          decimal-separator=","
          :min="0"
          @update:model-value="(v) => (height = Number(v) || 0)"
        />
      </Group>
      <Text fz="xs" c="var(--ds-text-3)">Rolo de 0,53 × 10 m (5,3 m²) com 10% de margem de perda.</Text>
      <Group justify="space-between">
        <Text fz="sm" c="var(--ds-text-2)">{{ area.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) }} m²</Text>
        <Text :fw="700" c="var(--ds-primary)">{{ rolls }} {{ rolls === 1 ? 'rolo' : 'rolos' }}</Text>
      </Group>
    </Stack>
  </FloatingWindow>
</template>
