import {
  Checkbox,
  Group,
  Paper,
  Text,
  Tree,
  getTreeExpandedState,
  useTree,
  type TreeNodeData,
} from '@jcdecor/ui';
import { IconChevronDown } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

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

export default function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
    initialCheckedState: ['vinilico', 'botanica'],
  });

  return (
    <Paper withBorder p="sm">
      <Text fz="sm" fw={600} mb="xs">
        Filtrar por categoria
      </Text>
      <Tree
        tree={tree}
        data={data}
        levelOffset={24}
        expandOnClick={false}
        renderNode={({ node, expanded, hasChildren, elementProps, tree }) => {
          const checked = tree.isNodeChecked(node.value);
          const indeterminate = tree.isNodeIndeterminate(node.value);

          return (
            <div {...elementProps}>
              <Group gap="xs" py={4} px={4} wrap="nowrap">
                <Checkbox.Indicator
                  size="sm"
                  checked={checked}
                  indeterminate={indeterminate}
                  onClick={() =>
                    checked ? tree.uncheckNode(node.value) : tree.checkNode(node.value)
                  }
                />
                <Group
                  gap={4}
                  wrap="nowrap"
                  style={{ flex: 1 }}
                  onClick={() => tree.toggleExpanded(node.value)}
                >
                  <Text fz="sm">{node.label}</Text>
                  {hasChildren && (
                    <IconChevronDown
                      size={14}
                      style={{ transform: expanded ? 'rotate(180deg)' : undefined }}
                    />
                  )}
                </Group>
              </Group>
            </div>
          );
        }}
      />
      <Text fz="xs" c="var(--ds-text-3)" mt="sm">
        {tree.getCheckedNodes().filter((item) => item.checked && !item.hasChildren).length}{' '}
        categorias selecionadas
      </Text>
    </Paper>
  );
}
