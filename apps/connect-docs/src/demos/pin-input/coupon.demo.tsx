import { useState } from 'react';
import { PinInput, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [codigo, setCodigo] = useState('');
  const valido = codigo === 'NR35SP';

  return (
    <Stack align="center" gap="xs">
      <Text fz="sm" fw={600} c="var(--ds-text-2)">
        Código de presença do treinamento
      </Text>
      <PinInput
        length={6}
        type="alphanumeric"
        value={codigo}
        onChange={(value) => setCodigo(value.toUpperCase())}
        ariaLabel="Código de presença do treinamento"
        error={codigo.length === 6 && !valido}
        success={valido}
      />
      <Text fz="sm" c={valido ? 'var(--ds-success)' : codigo.length === 6 ? 'var(--ds-error)' : 'var(--ds-text-3)'}>
        {valido ? 'Presença registrada: NR-35 · Trabalho em altura' : codigo.length === 6 ? 'Código inválido ou expirado' : 'Experimente NR35SP'}
      </Text>
    </Stack>
  );
}
