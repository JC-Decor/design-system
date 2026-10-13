import { Paper, Tree, getTreeExpandedState, useTree, type TreeNodeData } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const data: TreeNodeData[] = [
  {
    label: 'Diretoria de Pessoas — Renata Alves',
    value: 'renata',
    children: [
      { label: 'Ana Ribeiro — Business Partner', value: 'renata/ana' },
      { label: 'Bruno Alves — Analista de DP', value: 'renata/bruno' },
      {
        label: 'Diego Martins — Coordenador de RH',
        value: 'renata/diego',
        children: [
          { label: 'Carla Nogueira — Recrutadora', value: 'renata/diego/carla' },
          { label: 'Marina Souza — Analista de RH', value: 'renata/diego/marina' },
        ],
      },
    ],
  },
  {
    label: 'Diretoria de Tecnologia — Paulo Reis',
    value: 'paulo',
    children: [{ label: 'Elisa Prado — Tech Lead', value: 'paulo/elisa' }],
  },
];

export default function Demo() {
  const tree = useTree({ initialExpandedState: getTreeExpandedState(data, '*') });

  return (
    <Paper withBorder p="sm">
      <Tree data={data} tree={tree} withLines selectOnClick levelOffset={24} />
    </Paper>
  );
}
