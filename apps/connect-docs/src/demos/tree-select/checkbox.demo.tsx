import { TreeSelect, type TreeNodeData } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const destinatarios: TreeNodeData[] = [
  {
    value: 'pessoas',
    label: 'Pessoas & Cultura',
    children: [
      { value: 'dp', label: 'Departamento Pessoal' },
      { value: 'atracao', label: 'Atração de talentos' },
      { value: 'treinamento', label: 'Treinamento' },
    ],
  },
  {
    value: 'operacoes',
    label: 'Operações',
    children: [
      { value: 'logistica', label: 'Logística' },
      { value: 'compras', label: 'Compras' },
    ],
  },
];

export default function Demo() {
  return (
    <TreeSelect
      mode="checkbox"
      label="Destinatários do comunicado"
      description="Marcar um departamento marca todas as equipes dele"
      placeholder="Escolha as equipes"
      data={destinatarios}
      defaultValue={['dp', 'atracao']}
      defaultExpandAll
      checkedStrategy="parent"
    />
  );
}
