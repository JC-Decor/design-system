import { useState } from 'react';
import { Badge, Button, ComboboxPopover } from '@jcdecor/ui';
import { IconFilter } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const data = [
  { group: 'Ambiente', items: ['Sala', 'Quarto', 'Cozinha', 'Banheiro'] },
  { group: 'Entrega', items: ['Pronta entrega', 'Frete grátis', 'Retirada na loja'] },
];

export default function Demo() {
  const [value, setValue] = useState<string[]>(['Sala', 'Frete grátis']);

  return (
    <ComboboxPopover multiple data={data} value={value} onChange={setValue} comboboxProps={{ width: 240, position: 'bottom-start' }}>
      <ComboboxPopover.Target>
        <Button
          variant="subtle"
          leftSection={<IconFilter size={16} />}
          rightSection={value.length > 0 ? <Badge size="sm" circle>{value.length}</Badge> : null}
        >
          Filtros
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
