import { useState } from 'react';
import { Button, ComboboxPopover, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const ordenacoes = [
  { value: 'nome', label: 'Nome (A–Z)' },
  { value: 'admissao', label: 'Data de admissão' },
  { value: 'departamento', label: 'Departamento' },
  { value: 'ferias', label: 'Saldo de férias' },
  { value: 'aniversario', label: 'Aniversário' },
];

export default function Demo() {
  const [value, setValue] = useState<string | null>('nome');
  const label = ordenacoes.find((item) => item.value === value)?.label ?? 'Ordenar';

  return (
    <ComboboxPopover data={ordenacoes} value={value} onChange={setValue} allowDeselect={false} comboboxProps={{ width: 220, position: 'bottom-start' }}>
      <ComboboxPopover.Target>
        <Button variant="ghost" size="sm" leftSection={<Icon name="sliders" size={15} />}>
          {label}
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
