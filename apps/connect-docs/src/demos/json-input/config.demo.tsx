import { useState } from 'react';
import { Code, JsonInput, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 560 };

const inicial = JSON.stringify(
  { ponto: { toleranciaMinutos: 10, bancoDeHoras: true }, ferias: { antecedenciaDias: 30 }, beneficios: ['vale-refeição', 'plano de saúde'] },
  null,
  2,
);

export default function Demo() {
  const [value, setValue] = useState(inicial);
  let tolerancia: number | undefined;
  try {
    tolerancia = JSON.parse(value).ponto?.toleranciaMinutos;
  } catch {
    tolerancia = undefined;
  }

  return (
    <Stack w="100%">
      <JsonInput
        label="Regras do ponto e férias"
        value={value}
        onChange={setValue}
        validationError="JSON inválido"
        formatOnBlur
        autosize
        minRows={6}
        indentSpaces={2}
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Tolerância de atraso: <Code>{tolerancia ?? '—'} min</Code>
      </Text>
    </Stack>
  );
}
