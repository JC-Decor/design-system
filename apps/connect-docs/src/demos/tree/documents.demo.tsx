import { Group, Icon, Paper, Tree, type TreeNodeData } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const data: TreeNodeData[] = [
  {
    label: 'Admissão',
    value: 'admissao',
    children: [
      { label: 'Contrato de trabalho.pdf', value: 'admissao/contrato' },
      { label: 'ASO admissional.pdf', value: 'admissao/aso' },
      { label: 'Ficha de registro.pdf', value: 'admissao/ficha' },
    ],
  },
  {
    label: 'Folha de pagamento',
    value: 'folha',
    children: [
      {
        label: '2026',
        value: 'folha/2026',
        children: [
          { label: 'Holerite — setembro.pdf', value: 'folha/2026/09' },
          { label: 'Holerite — agosto.pdf', value: 'folha/2026/08' },
          { label: 'Holerite — julho.pdf', value: 'folha/2026/07' },
        ],
      },
      { label: 'Informe de rendimentos 2025.pdf', value: 'folha/informe-2025' },
    ],
  },
  { label: 'Aviso de férias.pdf', value: 'ferias' },
  { label: 'Certificado LGPD.pdf', value: 'lgpd' },
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
              <Icon name={hasChildren ? 'folder' : 'doc'} size={16} c={hasChildren ? 'var(--ds-text-2)' : 'var(--ds-text-3)'} />
              <span style={{ flex: 1 }}>{node.label}</span>
              {hasChildren && (
                <Icon
                  name="chev"
                  size={14}
                  style={{ transform: expanded ? 'rotate(180deg)' : undefined, transition: 'transform 150ms' }}
                />
              )}
            </Group>
          </div>
        )}
      />
    </Paper>
  );
}
