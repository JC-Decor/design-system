import { useState } from 'react';
import { Code, MaskInput, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [raw, setRaw] = useState('');
  const [colaborador, setColaborador] = useState<string | null>(null);

  return (
    <Stack w="100%" gap="xs">
      <MaskInput
        label="CPF do colaborador"
        mask="999.999.999-99"
        alwaysShowMask
        onChangeRaw={(value) => {
          setRaw(value);
          setColaborador(null);
        }}
        onComplete={() => setColaborador('Mariana Costa · Analista Comercial')}
        inputMode="numeric"
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Valor enviado à API: <Code>{raw || '—'}</Code>
      </Text>
      {colaborador && (
        <Text fz="sm" c="var(--ds-success)">
          {colaborador}
        </Text>
      )}
    </Stack>
  );
}
