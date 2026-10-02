import { TreeSelect, type TreeNodeData } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const ambientes: TreeNodeData[] = [
  {
    value: 'internos',
    label: 'Ambientes internos',
    children: [
      { value: 'sala', label: 'Sala' },
      { value: 'quarto', label: 'Quarto' },
      { value: 'cozinha', label: 'Cozinha' },
    ],
  },
  {
    value: 'externos',
    label: 'Ambientes externos',
    children: [
      { value: 'varanda', label: 'Varanda' },
      { value: 'jardim', label: 'Jardim' },
    ],
  },
];

export default function Demo() {
  return (
    <TreeSelect
      mode="checkbox"
      label="Indicado para"
      description="Marcar um grupo marca todos os ambientes dele"
      placeholder="Escolha os ambientes"
      data={ambientes}
      defaultValue={['sala', 'quarto']}
      defaultExpandAll
      checkedStrategy="parent"
    />
  );
}
