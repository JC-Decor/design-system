import { useState } from 'react';
import { Stack, TabSwitcher } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tabs = [
  { key: 'semana', label: 'Semana' },
  { key: 'mes', label: 'Mês' },
  { key: 'trimestre', label: 'Trimestre' },
];

export default function Demo() {
  const [periodo, setPeriodo] = useState('mes');
  return (
    <Stack align="center">
      <TabSwitcher size="md" aria-label="Período" tabs={tabs} activeKey={periodo} onChange={setPeriodo} />
      <TabSwitcher size="sm" aria-label="Período (compacto)" tabs={tabs} activeKey={periodo} onChange={setPeriodo} />
    </Stack>
  );
}
