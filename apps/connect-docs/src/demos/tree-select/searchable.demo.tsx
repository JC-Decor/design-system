import { TreeSelect, type TreeNodeData } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const trilhas: TreeNodeData[] = [
  {
    value: 'lideranca',
    label: 'Liderança',
    children: [
      { value: 'feedback', label: 'Feedback', children: [{ value: 'feedback-1-1', label: 'Conduzindo 1:1' }, { value: 'feedback-dificil', label: 'Conversas difíceis' }] },
      { value: 'gestao', label: 'Gestão de equipes', children: [{ value: 'metas', label: 'Metas e OKRs' }, { value: 'delegacao', label: 'Delegação' }] },
      { value: 'onboarding-lider', label: 'Onboarding de líderes' },
    ],
  },
  {
    value: 'compliance',
    label: 'Compliance',
    children: [
      { value: 'lgpd', label: 'LGPD' },
      { value: 'etica', label: 'Código de ética' },
    ],
  },
];

export default function Demo() {
  return (
    <TreeSelect
      mode="multiple"
      label="Treinamentos obrigatórios"
      placeholder="Buscar treinamento"
      data={trilhas}
      defaultValue={['feedback-1-1']}
      searchable
      maxDisplayedValues={2}
      nothingFoundMessage="Nenhum treinamento encontrado"
      withLines={false}
    />
  );
}
