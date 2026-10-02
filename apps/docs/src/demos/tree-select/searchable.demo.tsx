import { TreeSelect, type TreeNodeData } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const categorias: TreeNodeData[] = [
  {
    value: 'pisos',
    label: 'Pisos',
    children: [
      { value: 'vinilico', label: 'Vinílico', children: [{ value: 'autocolante', label: 'Autocolante' }, { value: 'clicado', label: 'Clicado' }] },
      { value: 'carpete', label: 'Carpete', children: [{ value: 'placas', label: 'Em placas' }, { value: 'rolo', label: 'Em rolo' }] },
      { value: 'tatame', label: 'Tatame' },
    ],
  },
  {
    value: 'decoracao',
    label: 'Decoração',
    children: [
      { value: 'cortinas', label: 'Cortinas' },
      { value: 'persianas', label: 'Persianas' },
    ],
  },
];

export default function Demo() {
  return (
    <TreeSelect
      mode="multiple"
      label="Categorias da campanha"
      placeholder="Buscar categoria"
      data={categorias}
      defaultValue={['autocolante']}
      searchable
      maxDisplayedValues={2}
      nothingFoundMessage="Nenhuma categoria encontrada"
      withLines={false}
    />
  );
}
