import { useState } from 'react';
import { ColorPicker, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [value, setValue] = useState('#6254C9');

  return (
    <Stack align="center" gap="sm">
      <ColorPicker value={value} onChange={setValue} />
      <Text fz="sm" c="var(--ds-text-2)">
        Cor da capa do comunicado: <b>{value}</b>
      </Text>
    </Stack>
  );
}
