import { useState } from 'react';
import { Cascader, Stack, Text, type CascaderOption } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const unidades: CascaderOption[] = [
  {
    value: 'sp',
    label: 'São Paulo',
    children: [
      { value: 'matriz', label: 'Matriz', children: [{ value: '3-andar', label: '3º andar' }, { value: '4-andar', label: '4º andar' }] },
      { value: 'cd', label: 'Centro de distribuição' },
    ],
  },
  {
    value: 'pr',
    label: 'Curitiba',
    children: [
      { value: 'escritorio', label: 'Escritório' },
      { value: 'treinamento', label: 'Centro de treinamento' },
    ],
  },
];

export default function Demo() {
  const [value, setValue] = useState<string[] | null>(['sp', 'matriz']);

  return (
    <Stack>
      <Cascader
        label="Filtrar por unidade"
        description="Qualquer nível pode ser escolhido"
        data={unidades}
        value={value}
        onChange={setValue}
        changeOnSelect
        withColumns={false}
        formatValue={({ options }) => options.map((option) => option.label).join(' / ')}
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Caminho: {value?.join(' → ') ?? '—'}
      </Text>
    </Stack>
  );
}
