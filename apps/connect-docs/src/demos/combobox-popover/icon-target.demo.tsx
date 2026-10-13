import { useState } from 'react';
import { ActionIcon, ComboboxPopover, Group, Icon, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const visualizacoes = [
  { value: 'cards', label: 'Cards da equipe' },
  { value: 'lista', label: 'Lista detalhada' },
  { value: 'organograma', label: 'Organograma' },
];

export default function Demo() {
  const [value, setValue] = useState<string | null>('cards');

  return (
    <Group gap="sm">
      <Icon name={value === 'organograma' ? 'flow' : value === 'lista' ? 'menu' : 'users'} size={16} />
      <Text fz="sm">Visualização: {visualizacoes.find((item) => item.value === value)?.label}</Text>
      <ComboboxPopover data={visualizacoes} value={value} onChange={setValue} allowDeselect={false} checkIconPosition="right" comboboxProps={{ width: 220 }}>
        <ComboboxPopover.Target>
          <ActionIcon aria-label="Configurar visualização">
            <Icon name="gear" size={15} />
          </ActionIcon>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Group>
  );
}
