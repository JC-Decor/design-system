import { Cascader, type CascaderOption } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const organograma: CascaderOption[] = [
  {
    value: 'tecnologia',
    label: 'Tecnologia',
    children: [
      {
        value: 'plataforma',
        label: 'Plataforma',
        children: [
          { value: 'squad-ponto', label: 'Squad Ponto' },
          { value: 'squad-portal', label: 'Squad Portal' },
          { value: 'design', label: 'Design' },
        ],
      },
      {
        value: 'infra',
        label: 'Infraestrutura',
        children: [
          { value: 'cloud', label: 'Cloud' },
          { value: 'suporte', label: 'Suporte interno' },
        ],
      },
    ],
  },
  {
    value: 'pessoas',
    label: 'Pessoas & Cultura',
    children: [
      {
        value: 'dp',
        label: 'Departamento Pessoal',
        children: [
          { value: 'folha', label: 'Folha de pagamento' },
          { value: 'beneficios', label: 'Benefícios' },
        ],
      },
      { value: 'atracao', label: 'Atração de talentos', children: [{ value: 'recrutamento', label: 'Recrutamento' }] },
    ],
  },
  {
    value: 'operacoes',
    label: 'Operações',
    children: [
      {
        value: 'logistica',
        label: 'Logística',
        children: [
          { value: 'expedicao', label: 'Expedição' },
          { value: 'estoque', label: 'Estoque' },
        ],
      },
    ],
  },
  { value: 'juridico', label: 'Jurídico', disabled: true },
];

export default function Demo() {
  return (
    <Cascader
      label="Equipe"
      description="Diretoria → Departamento → Equipe"
      placeholder="Escolha a equipe"
      data={organograma}
      defaultValue={['tecnologia', 'plataforma', 'squad-ponto']}
      clearable
    />
  );
}
