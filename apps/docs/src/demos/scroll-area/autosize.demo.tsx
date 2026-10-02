import { Button, Group, Paper, ScrollArea, Stack, Text } from '@jcdecor/ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const produtos = ['Piso vinílico Carvalho', 'Rodapé MDF branco', 'Manta acústica', 'Papel de parede Linho', 'Cola para papel', 'Painel ripado Freijó', 'Perfil de acabamento'];

export default function Demo() {
  const [count, setCount] = useState(2);

  return (
    <Stack w="100%">
      <Paper withBorder>
        <ScrollArea.Autosize mah={200} px="md">
          {produtos.slice(0, count).map((p) => (
            <Text key={p} fz="sm" py="xs" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
              {p}
            </Text>
          ))}
        </ScrollArea.Autosize>
      </Paper>
      <Group>
        <Button size="xs" onClick={() => setCount((c) => Math.min(c + 1, produtos.length))}>
          Adicionar item
        </Button>
        <Button size="xs" variant="outline" onClick={() => setCount((c) => Math.max(c - 1, 1))}>
          Remover item
        </Button>
      </Group>
    </Stack>
  );
}
