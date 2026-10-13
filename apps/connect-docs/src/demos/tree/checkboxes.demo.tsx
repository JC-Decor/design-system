import {
  Checkbox,
  Group,
  Icon,
  Paper,
  Text,
  Tree,
  getTreeExpandedState,
  useTree,
  type TreeNodeData,
} from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const data: TreeNodeData[] = [
  {
    label: 'Pessoas & Cultura',
    value: 'pessoas',
    children: [
      { label: 'Departamento Pessoal', value: 'dp' },
      { label: 'Atração de talentos', value: 'atracao' },
    ],
  },
  {
    label: 'Tecnologia',
    value: 'tecnologia',
    children: [
      { label: 'Plataforma', value: 'plataforma' },
      { label: 'Dados', value: 'dados' },
      { label: 'Infraestrutura', value: 'infra' },
    ],
  },
  { label: 'Financeiro', value: 'financeiro' },
];

export default function Demo() {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
    initialCheckedState: ['dp', 'plataforma'],
  });

  return (
    <Paper withBorder p="sm">
      <Text fz="sm" fw={600} mb="xs">
        Filtrar por equipe
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
                    <Icon
                      name="chev"
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
        equipes selecionadas
      </Text>
    </Paper>
  );
}
