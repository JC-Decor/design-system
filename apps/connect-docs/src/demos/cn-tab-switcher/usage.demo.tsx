import { useState } from 'react';
import { Stack, TabSwitcher, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [aba, setAba] = useState('pendentes');
  return (
    <Stack align="center">
      <TabSwitcher
        aria-label="Solicitações"
        activeKey={aba}
        onChange={setAba}
        tabs={[
          { key: 'todas', label: 'Todas', count: 42 },
          { key: 'pendentes', label: 'Pendentes', count: 7, icon: 'clock' },
          { key: 'aprovadas', label: 'Aprovadas', count: 31, icon: 'check', tone: 'green' },
          { key: 'recusadas', label: 'Recusadas', count: 4, icon: 'x', tone: 'coral' },
          { key: 'arquivadas', label: 'Arquivadas', disabled: true },
        ]}
      />
      <Text fz="sm" c="dimmed">Aba ativa: {aba} · use ← → Home End</Text>
    </Stack>
  );
}
