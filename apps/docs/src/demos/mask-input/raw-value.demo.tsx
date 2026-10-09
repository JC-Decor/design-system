import { useState } from 'react';
import { Code, MaskInput, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [raw, setRaw] = useState('');
  const [cidade, setCidade] = useState<string | null>(null);

  return (
    <Stack w="100%" gap="xs">
      <MaskInput
        label="CEP de entrega"
        mask="99999-999"
        alwaysShowMask
        onChangeRaw={(value) => {
          setRaw(value);
          setCidade(null);
        }}
        onComplete={() => setCidade('São Paulo · SP — frete grátis')}
        inputMode="numeric"
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Valor enviado à API: <Code>{raw || '—'}</Code>
      </Text>
      {cidade && (
        <Text fz="sm" c="var(--ds-success)">
          {cidade}
        </Text>
      )}
    </Stack>
  );
}
