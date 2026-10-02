import { useState } from 'react';
import { Anchor, PinInput, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [codigo, setCodigo] = useState<string | null>(null);

  return (
    <Stack align="center" gap="xs">
      <Text fz="sm" c="var(--ds-text-2)">
        Enviamos um código por SMS para (11) •••••-4321
      </Text>
      <PinInput type="number" oneTimeCode length={4} size="lg" ariaLabel="Código de verificação" onComplete={setCodigo} />
      <Text fz="sm" c="var(--ds-text-3)">
        {codigo ? `Verificando ${codigo}…` : (
          <>
            Não recebeu? <Anchor fz="sm">Reenviar código</Anchor>
          </>
        )}
      </Text>
    </Stack>
  );
}
