import { useState } from 'react';
import { AngleSlider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [value, setValue] = useState(15);

  return (
    <Stack align="center" gap="xs">
      <AngleSlider value={value} onChange={setValue} aria-label="Rotação da foto de perfil" size={96} formatLabel={(v) => `${v}°`} />
      <Text fz="sm" c="var(--ds-text-2)">
        Foto de perfil girada em {value}°
      </Text>
    </Stack>
  );
}
