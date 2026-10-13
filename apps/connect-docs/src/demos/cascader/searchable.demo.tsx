import { Cascader, Stack, type CascaderOption } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const organograma: CascaderOption[] = [
  {
    value: 'tecnologia',
    label: 'Tecnologia',
    children: [
      { value: 'plataforma', label: 'Plataforma', children: [{ value: 'squad-ponto', label: 'Squad Ponto' }, { value: 'design', label: 'Design' }] },
      { value: 'dados', label: 'Dados', children: [{ value: 'bi', label: 'BI' }] },
    ],
  },
  {
    value: 'comercial',
    label: 'Comercial',
    children: [{ value: 'vendas', label: 'Vendas B2B', children: [{ value: 'sul', label: 'Regional Sul' }, { value: 'sudeste', label: 'Regional Sudeste' }] }],
  },
];

export default function Demo() {
  return (
    <Stack>
      <Cascader
        label="Busca por caminho"
        placeholder="Digite uma equipe ou departamento"
        data={organograma}
        searchable
        separator=" › "
        nothingFoundMessage="Nenhuma equipe encontrada"
      />
      <Cascader
        label="Abrir colunas no hover"
        placeholder="Passe o mouse nas opções"
        data={organograma}
        expandTrigger="hover"
        separator=" › "
      />
    </Stack>
  );
}
