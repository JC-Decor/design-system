import { useState } from 'react';
import { PinInput, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [cupom, setCupom] = useState('');
  const valido = cupom === 'DECO10';

  return (
    <Stack align="center" gap="xs">
      <Text fz="sm" fw={500} c="var(--ds-text-2)" id="cupom-label">
        Cupom de desconto
      </Text>
      <PinInput
        length={6}
        type="alphanumeric"
        value={cupom}
        onChange={(value) => setCupom(value.toUpperCase())}
        ariaLabel="Cupom de desconto"
        error={cupom.length === 6 && !valido}
        success={valido}
      />
      <Text fz="sm" c={valido ? 'var(--ds-success)' : cupom.length === 6 ? 'var(--ds-error)' : 'var(--ds-text-3)'}>
        {valido ? 'Cupom aplicado: 10% de desconto' : cupom.length === 6 ? 'Cupom inválido ou expirado' : 'Experimente DECO10'}
      </Text>
    </Stack>
  );
}
