import { useState } from 'react';
import { ColorPicker, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [value, setValue] = useState('#8B6F4E');

  return (
    <Stack align="center" gap="sm">
      <ColorPicker value={value} onChange={setValue} />
      <Text fz="sm" c="var(--ds-text-2)">
        Cor do tecido: <b>{value}</b>
      </Text>
    </Stack>
  );
}
