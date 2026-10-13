import { useState } from 'react';
import { Group, NumberInput, Paper, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const SALDO = 30;

export default function Demo() {
  const [gozo, setGozo] = useState<number | string>(20);
  const [abono, setAbono] = useState<number | string>(10);
  const restante = SALDO - Number(gozo) - Number(abono);

  return (
    <Stack w="100%">
      <Group grow align="flex-start">
        <NumberInput label="Dias de descanso" value={gozo} onChange={setGozo} min={5} max={30} suffix=" dias" allowDecimal={false} />
        <NumberInput label="Abono pecuniário" value={abono} onChange={setAbono} min={0} max={10} suffix=" dias" allowDecimal={false} />
      </Group>
      <Paper withBorder p="md" radius="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Período aquisitivo 2025/2026 · saldo de <b>{SALDO} dias</b>
        </Text>
        <Text fw={700} fz="lg" c={restante < 0 ? 'var(--ds-error)' : 'var(--ds-primary)'}>
          {restante < 0 ? `Excede o saldo em ${-restante} dias` : `Restam ${restante} dias`}
        </Text>
      </Paper>
    </Stack>
  );
}
