import { Badge, Group, Paper, Splitter, Stack, Text, UnstyledButton } from '@jcdecor/ui';
import { useState } from 'react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const pedidos = [
  { id: '#48213', cliente: 'Mariana Souza', total: 'R$ 3.249,90', status: 'Separando' },
  { id: '#48212', cliente: 'Carlos Lima', total: 'R$ 689,00', status: 'Enviado' },
  { id: '#48211', cliente: 'Ana Ribeiro', total: 'R$ 1.120,50', status: 'Entregue' },
];

export default function Demo() {
  const [selected, setSelected] = useState(pedidos[0]);

  return (
    <Paper h={300} radius={0}>
      <Splitter h="100%">
        <Splitter.Pane defaultSize={35} min={20} max={60}>
          <Stack gap={0}>
            {pedidos.map((p) => (
              <UnstyledButton
                key={p.id}
                onClick={() => setSelected(p)}
                p="md"
                bg={selected.id === p.id ? 'var(--ds-primary-soft)' : undefined}
                style={{ borderBottom: '1px solid var(--ds-border-soft)' }}
              >
                <Text fw={600} fz="sm">
                  {p.id}
                </Text>
                <Text fz="sm" c="var(--ds-text-2)">
                  {p.cliente}
                </Text>
              </UnstyledButton>
            ))}
          </Stack>
        </Splitter.Pane>
        <Splitter.Pane defaultSize={65} p="lg">
          <Group justify="space-between">
            <Text fw={600}>Pedido {selected.id}</Text>
            <Badge variant="light">{selected.status}</Badge>
          </Group>
          <Text fz="sm" c="var(--ds-text-2)" mt="xs">
            Cliente: {selected.cliente} · Total: {selected.total}
          </Text>
          <Text fz="sm" c="var(--ds-text-3)" mt="md">
            Arraste a divisória ou use as setas do teclado com ela em foco.
          </Text>
        </Splitter.Pane>
      </Splitter>
    </Paper>
  );
}
