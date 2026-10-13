import { useState } from 'react';
import { Group, NumberInput, RangeSlider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const MIN = 1500;
const MAX = 20000;
const reais = (v: number) => `R$ ${v.toLocaleString('pt-BR')}`;

export default function Demo() {
  const [range, setRange] = useState<[number, number]>([4000, 7500]);

  return (
    <Stack w="100%" gap="md">
      <Text fz="sm" fw={600} c="var(--ds-text-2)">
        Faixa salarial da vaga
      </Text>
      <RangeSlider
        min={MIN}
        max={MAX}
        step={100}
        minRange={500}
        value={range}
        onChange={setRange}
        label={reais}
        thumbFromLabel="Salário mínimo"
        thumbToLabel="Salário máximo"
      />
      <Group grow>
        <NumberInput
          label="De"
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
          label="Até"
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
