<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, ComboboxPopover, ComboboxPopoverTarget, Group, Text } from '@jcdecor/vue';
import { IconLayoutGrid, IconList, IconSettings } from '@tabler/icons-vue';

const visualizacoes = [
  { value: 'grade', label: 'Grade de produtos' },
  { value: 'lista', label: 'Lista detalhada' },
];

const value = ref<string | null>('grade');
</script>

<template>
  <Group gap="sm">
    <IconList v-if="value === 'lista'" :size="18" />
    <IconLayoutGrid v-else :size="18" />
    <Text fz="sm">Visualização: {{ visualizacoes.find((item) => item.value === value)?.label }}</Text>
    <ComboboxPopover v-model="value" :data="visualizacoes" :allow-deselect="false" check-icon-position="right" :combobox-props="{ width: 220 }">
      <ComboboxPopoverTarget>
        <ActionIcon aria-label="Configurar visualização">
          <IconSettings :size="18" />
        </ActionIcon>
      </ComboboxPopoverTarget>
    </ComboboxPopover>
  </Group>
</template>
