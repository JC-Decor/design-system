import { useState } from 'react';
import { Badge, Button, ComboboxPopover, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const data = [
  { group: 'Status', items: ['Pendente', 'Aprovada', 'Recusada'] },
  { group: 'Tipo', items: ['Férias', 'Folga', 'Atestado', 'Uniforme'] },
];

export default function Demo() {
  const [value, setValue] = useState<string[]>(['Pendente', 'Férias']);

  return (
    <ComboboxPopover multiple data={data} value={value} onChange={setValue} comboboxProps={{ width: 240, position: 'bottom-start' }}>
      <ComboboxPopover.Target>
        <Button
          variant="ghost"
          leftSection={<Icon name="filter" size={15} />}
          rightSection={value.length > 0 ? <Badge size="sm" circle>{value.length}</Badge> : null}
        >
          Filtros
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
