<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Group, Select, Text, ThemeIcon } from '@jcdecor/vue';
import { IconWindow, IconGrid4x4, IconLayoutBoardSplit, IconPlant2, IconWallpaper } from '@tabler/icons-vue';

const icons: Record<string, typeof IconWindow> = {
  pisos: IconGrid4x4,
  papel: IconWallpaper,
  paineis: IconLayoutBoardSplit,
  grama: IconPlant2,
  cortinas: IconWindow,
};

const descricoes: Record<string, string> = {
  pisos: '128 produtos',
  papel: '342 produtos',
  paineis: '56 produtos',
  grama: '18 produtos',
  cortinas: '74 produtos',
};

const data = [
  { value: 'pisos', label: 'Pisos vinílicos' },
  { value: 'papel', label: 'Papel de parede' },
  { value: 'paineis', label: 'Painéis ripados' },
  { value: 'grama', label: 'Grama sintética' },
  { value: 'cortinas', label: 'Cortinas' },
];
</script>

<template>
  <Select label="Departamento" placeholder="Escolha um departamento" :data="data" :max-dropdown-height="300">
    <template #renderOption="{ option }">
      <Group gap="sm" wrap="nowrap">
        <ThemeIcon variant="light" size="md" radius="sm">
          <component :is="icons[option.value]" :size="16" />
        </ThemeIcon>
        <div>
          <Text fz="sm" :fw="500">{{ option.label }}</Text>
          <Text fz="xs" c="dimmed">{{ descricoes[option.value] }}</Text>
        </div>
      </Group>
    </template>
  </Select>
</template>
