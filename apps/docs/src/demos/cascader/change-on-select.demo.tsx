import { useState } from 'react';
import { Cascader, Stack, Text, type CascaderOption } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const categorias: CascaderOption[] = [
  {
    value: 'pisos',
    label: 'Pisos',
    children: [
      { value: 'vinilico', label: 'Vinílico', children: [{ value: 'autocolante', label: 'Autocolante' }, { value: 'clicado', label: 'Clicado' }] },
      { value: 'laminado', label: 'Laminado' },
    ],
  },
  {
    value: 'paredes',
    label: 'Paredes',
    children: [
      { value: 'papel', label: 'Papel de parede' },
      { value: 'ripado', label: 'Painel ripado' },
    ],
  },
];

export default function Demo() {
  const [value, setValue] = useState<string[] | null>(['pisos', 'vinilico']);

  return (
    <Stack>
      <Cascader
        label="Filtrar catálogo"
        description="Qualquer nível pode ser escolhido"
        data={categorias}
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
