<script lang="ts">
export const meta = { centered: true, maxWidth: 360 };
</script>

<script setup lang="ts">
import { computed } from 'vue';
import {
  CheckboxIndicator,
  Group,
  Paper,
  Text,
  Tree,
  getTreeExpandedState,
  useTree,
  type TreeNodeData,
} from '@jcdecor/vue';
import { IconChevronDown } from '@tabler/icons-vue';

const data: TreeNodeData[] = [
  {
    label: 'Pisos',
    value: 'pisos',
    children: [
      { label: 'Vinílico', value: 'vinilico' },
      { label: 'Laminado', value: 'laminado' },
    ],
  },
  {
    label: 'Papel de parede',
    value: 'papel',
    children: [
      { label: 'Botânica', value: 'botanica' },
      { label: 'Geométrico', value: 'geometrico' },
      { label: 'Infantil', value: 'infantil' },
    ],
  },
  { label: 'Cortinas', value: 'cortinas' },
];

const tree = useTree({
  initialExpandedState: getTreeExpandedState(data, '*'),
  initialCheckedState: ['vinilico', 'botanica'],
});

const selectedCount = computed(
  () => tree.getCheckedNodes().filter((item) => item.checked && !item.hasChildren).length,
);

const toggleChecked = (value: string) =>
  tree.isNodeChecked(value) ? tree.uncheckNode(value) : tree.checkNode(value);
</script>

<template>
  <Paper with-border p="sm">
    <Text fz="sm" :fw="600" mb="xs">Filtrar por categoria</Text>
    <Tree :tree="tree" :data="data" :level-offset="24" :expand-on-click="false">
      <template #node="{ node, expanded, hasChildren, elementProps }">
        <div v-bind="elementProps">
          <Group gap="xs" :py="4" :px="4" wrap="nowrap">
            <CheckboxIndicator
              size="sm"
              :checked="tree.isNodeChecked(node.value)"
              :indeterminate="tree.isNodeIndeterminate(node.value)"
              @click="toggleChecked(node.value)"
            />
            <Group :gap="4" wrap="nowrap" :style="{ flex: 1 }" @click="tree.toggleExpanded(node.value)">
              <Text fz="sm">{{ node.label }}</Text>
              <IconChevronDown
                v-if="hasChildren"
                :size="14"
                :style="{ transform: expanded ? 'rotate(180deg)' : undefined }"
              />
            </Group>
          </Group>
        </div>
      </template>
    </Tree>
    <Text fz="xs" c="var(--ds-text-3)" mt="sm">{{ selectedCount }} categorias selecionadas</Text>
  </Paper>
</template>
