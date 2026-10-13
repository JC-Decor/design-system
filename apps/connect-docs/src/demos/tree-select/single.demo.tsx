import { TreeSelect, type TreeNodeData } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const pastas: TreeNodeData[] = [
  {
    value: 'admissao',
    label: 'Admissão',
    children: [
      {
        value: 'admissao/pessoais',
        label: 'Documentos pessoais',
        children: [
          { value: 'admissao/pessoais/rg', label: 'RG e CPF' },
          { value: 'admissao/pessoais/residencia', label: 'Comprovante de residência' },
          { value: 'admissao/pessoais/ctps', label: 'Carteira de trabalho' },
        ],
      },
      { value: 'admissao/contrato', label: 'Contrato de trabalho' },
    ],
  },
  {
    value: 'saude',
    label: 'Saúde ocupacional',
    children: [
      { value: 'saude/aso', label: 'ASO admissional' },
      { value: 'saude/atestados', label: 'Atestados' },
    ],
  },
  { value: 'holerites', label: 'Holerites' },
];

export default function Demo() {
  return (
    <TreeSelect
      label="Pasta do documento"
      placeholder="Escolha a pasta"
      data={pastas}
      defaultExpandedValues={['admissao', 'admissao/pessoais']}
      expandOnClick
      clearable
    />
  );
}
