import { TreeSelect, type TreeNodeData } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const categorias: TreeNodeData[] = [
  {
    value: 'pisos',
    label: 'Pisos',
    children: [
      {
        value: 'pisos/vinilico',
        label: 'Vinílico',
        children: [
          { value: 'pisos/vinilico/autocolante', label: 'Autocolante' },
          { value: 'pisos/vinilico/clicado', label: 'Clicado' },
          { value: 'pisos/vinilico/colado', label: 'Colado' },
        ],
      },
      { value: 'pisos/laminado', label: 'Laminado' },
    ],
  },
  {
    value: 'paredes',
    label: 'Paredes',
    children: [
      { value: 'paredes/papel', label: 'Papel de parede' },
      { value: 'paredes/ripado', label: 'Painel ripado' },
    ],
  },
  { value: 'grama', label: 'Grama sintética' },
];

export default function Demo() {
  return (
    <TreeSelect
      label="Categoria do produto"
      placeholder="Escolha a categoria"
      data={categorias}
      defaultExpandedValues={['pisos', 'pisos/vinilico']}
      expandOnClick
      clearable
    />
  );
}
