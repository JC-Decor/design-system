import { Paper, Tree, getTreeExpandedState, useTree, type TreeNodeData } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const data: TreeNodeData[] = [
  {
    label: 'Sala de estar',
    value: 'sala',
    children: [
      { label: 'Piso vinílico Carvalho Natural', value: 'sala/piso' },
      { label: 'Painel ripado Freijó', value: 'sala/painel' },
      {
        label: 'Janelas',
        value: 'sala/janelas',
        children: [
          { label: 'Cortina Linho Cru', value: 'sala/janelas/cortina' },
          { label: 'Persiana rolô blackout', value: 'sala/janelas/persiana' },
        ],
      },
    ],
  },
  {
    label: 'Quarto infantil',
    value: 'quarto',
    children: [{ label: 'Papel de parede Nuvens', value: 'quarto/papel' }],
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
