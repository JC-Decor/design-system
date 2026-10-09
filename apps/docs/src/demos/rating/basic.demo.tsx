import { useState } from 'react';
import { Rating, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const legendas = ['', 'Muito ruim', 'Ruim', 'Regular', 'Bom', 'Excelente'];

export default function Demo() {
  const [value, setValue] = useState(4);

  return (
    <Stack align="center" gap="xs">
      <Text fz="sm" fw={500} c="var(--ds-text-2)">
        Avalie o Piso vinílico Carvalho Natural
      </Text>
      <Rating value={value} onChange={setValue} size="lg" getSymbolLabel={(i) => `${i + 1} de 5 estrelas`} />
      <Text fz="sm" c="var(--ds-text-3)">
        {legendas[value] || 'Toque nas estrelas para avaliar'}
      </Text>
    </Stack>
  );
}
