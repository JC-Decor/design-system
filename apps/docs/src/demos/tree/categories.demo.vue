<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { Group, Paper, Tree, type TreeNodeData } from '@jcdecor/vue';
import { IconChevronDown, IconFolder, IconFolderOpen, IconTag } from '@tabler/icons-vue';

const data: TreeNodeData[] = [
  {
    label: 'Pisos',
    value: 'pisos',
    children: [
      { label: 'Vinílico', value: 'pisos/vinilico' },
      { label: 'Laminado', value: 'pisos/laminado' },
      { label: 'Carpete em placas', value: 'pisos/carpete' },
    ],
  },
  {
    label: 'Revestimentos',
    value: 'revestimentos',
    children: [
      {
        label: 'Papel de parede',
        value: 'revestimentos/papel',
        children: [
          { label: 'Botânica', value: 'revestimentos/papel/botanica' },
          { label: 'Geométrico', value: 'revestimentos/papel/geometrico' },
          { label: 'Infantil', value: 'revestimentos/papel/infantil' },
        ],
      },
      { label: 'Painéis ripados', value: 'revestimentos/paineis' },
    ],
  },
  { label: 'Cortinas e persianas', value: 'cortinas' },
  { label: 'Grama sintética', value: 'grama' },
];
</script>

<template>
  <Paper with-border p="xs">
    <Tree :data="data" select-on-click level-offset="lg">
      <template #node="{ node, expanded, hasChildren, elementProps }">
        <div v-bind="elementProps">
          <Group :gap="8" wrap="nowrap" :py="6" px="xs">
            <template v-if="hasChildren">
              <IconFolderOpen v-if="expanded" :size="18" />
              <IconFolder v-else :size="18" />
            </template>
            <IconTag v-else :size="16" />
            <span style="flex: 1">{{ node.label }}</span>
            <IconChevronDown
              v-if="hasChildren"
              :size="14"
              :style="{ transform: expanded ? 'rotate(180deg)' : undefined, transition: 'transform 150ms' }"
            />
          </Group>
        </div>
      </template>
    </Tree>
  </Paper>
</template>
