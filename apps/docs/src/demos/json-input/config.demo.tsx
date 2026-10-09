import { useState } from 'react';
import { Code, JsonInput, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 560 };

const inicial = JSON.stringify(
  { vitrine: { colunas: 4, mostrarPreco: true }, destaque: ['pisos', 'cortinas'], frete: { gratisAcima: 499 } },
  null,
  2,
);

export default function Demo() {
  const [value, setValue] = useState(inicial);
  let colunas: number | undefined;
  try {
    colunas = JSON.parse(value).vitrine?.colunas;
  } catch {
    colunas = undefined;
  }

  return (
    <Stack w="100%">
      <JsonInput
        label="JSON de configuração do painel"
        value={value}
        onChange={setValue}
        validationError="JSON inválido"
        formatOnBlur
        autosize
        minRows={6}
        indentSpaces={2}
      />
      <Text fz="sm" c="var(--ds-text-2)">
        Colunas da vitrine: <Code>{colunas ?? '—'}</Code>
      </Text>
    </Stack>
  );
}
