<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, Group, Tooltip, TooltipGroup } from '@jcdecor/vue';
import { IconAlignCenter, IconAlignLeft, IconAlignRight, IconBold, IconItalic, IconUnderline } from '@tabler/icons-vue';

const tools = [
  { label: 'Negrito (⌘B)', icon: IconBold },
  { label: 'Itálico (⌘I)', icon: IconItalic },
  { label: 'Sublinhado (⌘U)', icon: IconUnderline },
  { label: 'Alinhar à esquerda', icon: IconAlignLeft },
  { label: 'Centralizar', icon: IconAlignCenter },
  { label: 'Alinhar à direita', icon: IconAlignRight },
];
</script>

<template>
  <!-- Depois do primeiro tooltip, os vizinhos abrem sem atraso. -->
  <TooltipGroup :open-delay="400" :close-delay="100">
    <Group :gap="4">
      <Tooltip v-for="tool in tools" :key="tool.label" :label="tool.label">
        <ActionIcon variant="subtle" color="gray" size="lg" :aria-label="tool.label">
          <component :is="tool.icon" :size="18" />
        </ActionIcon>
      </Tooltip>
    </Group>
  </TooltipGroup>
</template>
