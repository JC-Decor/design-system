import { useState } from 'react';
import { ActionIcon, ComboboxPopover, Group, Text } from '@jcdecor/ui';
import { IconLayoutGrid, IconList, IconSettings } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const visualizacoes = [
  { value: 'grade', label: 'Grade de produtos' },
  { value: 'lista', label: 'Lista detalhada' },
];

export default function Demo() {
  const [value, setValue] = useState<string | null>('grade');

  return (
    <Group gap="sm">
      {value === 'lista' ? <IconList size={18} /> : <IconLayoutGrid size={18} />}
      <Text fz="sm">Visualização: {visualizacoes.find((item) => item.value === value)?.label}</Text>
      <ComboboxPopover data={visualizacoes} value={value} onChange={setValue} allowDeselect={false} checkIconPosition="right" comboboxProps={{ width: 220 }}>
        <ComboboxPopover.Target>
          <ActionIcon aria-label="Configurar visualização">
            <IconSettings size={18} />
          </ActionIcon>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Group>
  );
}
