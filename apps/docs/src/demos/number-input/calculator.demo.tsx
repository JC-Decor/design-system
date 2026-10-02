import { useState } from 'react';
import { Group, NumberFormatter, NumberInput, Paper, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const M2_POR_CAIXA = 2.2;
const PRECO_CAIXA = 219.9;

export default function Demo() {
  const [area, setArea] = useState<number | string>(18);
  const [perda, setPerda] = useState<number | string>(10);
  const total = Number(area) * (1 + Number(perda) / 100);
  const caixas = Math.ceil(total / M2_POR_CAIXA);

  return (
    <Stack w="100%">
      <Group grow align="flex-start">
        <NumberInput label="Área (m²)" value={area} onChange={setArea} min={0} decimalScale={2} decimalSeparator="," />
        <NumberInput label="Margem de perda" value={perda} onChange={setPerda} min={0} max={30} suffix="%" />
      </Group>
      <Paper withBorder p="md" radius="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Você precisa de <b>{caixas} caixas</b> ({total.toFixed(2).replace('.', ',')} m²)
        </Text>
        <Text fw={600} fz="lg" c="var(--ds-primary)">
          <NumberFormatter value={caixas * PRECO_CAIXA} prefix="R$ " decimalScale={2} fixedDecimalScale decimalSeparator="," thousandSeparator="." />
        </Text>
      </Paper>
    </Stack>
  );
}
