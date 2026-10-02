import { useState } from 'react';
import { Group, NumberInput, RangeSlider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const MIN = 0;
const MAX = 2000;
const reais = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

export default function Demo() {
  const [range, setRange] = useState<[number, number]>([150, 900]);

  return (
    <Stack w="100%" gap="md">
      <Text fz="sm" fw={500} c="var(--ds-text-2)">
        Faixa de preço
      </Text>
      <RangeSlider
        min={MIN}
        max={MAX}
        step={10}
        minRange={50}
        value={range}
        onChange={setRange}
        label={reais}
        thumbFromLabel="Preço mínimo"
        thumbToLabel="Preço máximo"
      />
      <Group grow>
        <NumberInput
          label="Mínimo"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          min={MIN}
          max={range[1]}
          value={range[0]}
          onChange={(v) => setRange([Number(v) || MIN, range[1]])}
          hideControls
        />
        <NumberInput
          label="Máximo"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          min={range[0]}
          max={MAX}
          value={range[1]}
          onChange={(v) => setRange([range[0], Number(v) || MAX])}
          hideControls
        />
      </Group>
    </Stack>
  );
}
