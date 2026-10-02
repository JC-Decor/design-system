import { useState } from 'react';
import { Center, SegmentedControl, Stack, Text } from '@jcdecor/ui';
import { IconLayoutGrid, IconList } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [view, setView] = useState('grade');

  return (
    <Stack align="center" gap="xs">
      <SegmentedControl
        value={view}
        onChange={setView}
        data={[
          { value: 'grade', label: <Center style={{ gap: 6 }}><IconLayoutGrid size={16} />Grade</Center> },
          { value: 'lista', label: <Center style={{ gap: 6 }}><IconList size={16} />Lista</Center> },
        ]}
      />
      <Text fz="sm" c="var(--ds-text-3)">
        Exibindo produtos em {view}
      </Text>
    </Stack>
  );
}
