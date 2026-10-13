import { Button, Group, Paper, ScrollArea, Stack, Text } from '@jcdecor/connect-ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const documentos = ['RG e CPF', 'Comprovante de residência', 'Carteira de trabalho', 'Título de eleitor', 'Certidão de casamento', 'Exame admissional', 'Dados bancários'];

export default function Demo() {
  const [count, setCount] = useState(2);

  return (
    <Stack w="100%">
      <Paper withBorder>
        <ScrollArea.Autosize mah={200} px="md">
          {documentos.slice(0, count).map((d) => (
            <Text key={d} fz="sm" py="xs" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
              {d}
            </Text>
          ))}
        </ScrollArea.Autosize>
      </Paper>
      <Group>
        <Button size="xs" onClick={() => setCount((c) => Math.min(c + 1, documentos.length))}>
          Adicionar documento
        </Button>
        <Button size="xs" variant="outline" onClick={() => setCount((c) => Math.max(c - 1, 1))}>
          Remover documento
        </Button>
      </Group>
    </Stack>
  );
}
