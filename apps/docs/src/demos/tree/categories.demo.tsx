import { Group, Paper, Tree, type TreeNodeData } from '@jcdecor/ui';
import { IconChevronDown, IconFolder, IconFolderOpen, IconTag } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

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

export default function Demo() {
  return (
    <Paper withBorder p="xs">
      <Tree
        data={data}
        selectOnClick
        levelOffset="lg"
        renderNode={({ node, expanded, hasChildren, elementProps }) => (
          <div {...elementProps}>
            <Group gap={8} wrap="nowrap" py={6} px="xs">
              {hasChildren ? (
                expanded ? (
                  <IconFolderOpen size={18} />
                ) : (
                  <IconFolder size={18} />
                )
              ) : (
                <IconTag size={16} />
              )}
              <span style={{ flex: 1 }}>{node.label}</span>
              {hasChildren && (
                <IconChevronDown
                  size={14}
                  style={{
                    transform: expanded ? 'rotate(180deg)' : undefined,
                    transition: 'transform 150ms',
                  }}
                />
              )}
            </Group>
          </div>
        )}
      />
    </Paper>
  );
}
