import { useState } from 'react';
import { Button, ComboboxPopover } from '@jcdecor/ui';
import { IconArrowsSort } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const ordenacoes = [
  { value: 'relevancia', label: 'Mais relevantes' },
  { value: 'vendidos', label: 'Mais vendidos' },
  { value: 'menor-preco', label: 'Menor preço' },
  { value: 'maior-preco', label: 'Maior preço' },
  { value: 'lancamentos', label: 'Lançamentos' },
];

export default function Demo() {
  const [value, setValue] = useState<string | null>('relevancia');
  const label = ordenacoes.find((item) => item.value === value)?.label ?? 'Ordenar';

  return (
    <ComboboxPopover data={ordenacoes} value={value} onChange={setValue} allowDeselect={false} comboboxProps={{ width: 220, position: 'bottom-start' }}>
      <ComboboxPopover.Target>
        <Button variant="outline" leftSection={<IconArrowsSort size={16} />}>
          {label}
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
