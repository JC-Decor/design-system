import { Cascader, Stack, type CascaderOption } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const regioes: CascaderOption[] = [
  {
    value: 'sp',
    label: 'São Paulo',
    children: [
      { value: 'sao-paulo', label: 'São Paulo', children: [{ value: 'moema', label: 'Moema' }, { value: 'pinheiros', label: 'Pinheiros' }] },
      { value: 'campinas', label: 'Campinas', children: [{ value: 'cambui', label: 'Cambuí' }] },
    ],
  },
  {
    value: 'mg',
    label: 'Minas Gerais',
    children: [{ value: 'bh', label: 'Belo Horizonte', children: [{ value: 'savassi', label: 'Savassi' }, { value: 'lourdes', label: 'Lourdes' }] }],
  },
];

export default function Demo() {
  return (
    <Stack>
      <Cascader
        label="Busca por caminho"
        placeholder="Digite um bairro ou cidade"
        data={regioes}
        searchable
        separator=" › "
        nothingFoundMessage="Não entregamos nesta região"
      />
      <Cascader
        label="Abrir colunas no hover"
        placeholder="Passe o mouse nas opções"
        data={regioes}
        expandTrigger="hover"
        separator=" › "
      />
    </Stack>
  );
}
