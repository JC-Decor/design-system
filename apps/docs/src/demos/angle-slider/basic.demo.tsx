import { useState } from 'react';
import { AngleSlider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [value, setValue] = useState(45);

  return (
    <Stack align="center" gap="xs">
      <AngleSlider value={value} onChange={setValue} aria-label="Ângulo de instalação" size={96} formatLabel={(v) => `${v}°`} />
      <Text fz="sm" c="var(--ds-text-2)">
        Paginação do piso em {value}°
      </Text>
    </Stack>
  );
}
