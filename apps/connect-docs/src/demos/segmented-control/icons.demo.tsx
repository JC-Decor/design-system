import { useState } from 'react';
import { Center, Icon, SegmentedControl, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [view, setView] = useState('cards');

  return (
    <Stack align="center" gap="xs">
      <SegmentedControl
        value={view}
        onChange={setView}
        data={[
          { value: 'cards', label: <Center style={{ gap: 6 }}><Icon name="layers" size={16} />Cards</Center> },
          { value: 'lista', label: <Center style={{ gap: 6 }}><Icon name="menu" size={16} />Lista</Center> },
        ]}
      />
      <Text fz="sm" c="var(--ds-text-3)">
        Exibindo a equipe em {view}
      </Text>
    </Stack>
  );
}
