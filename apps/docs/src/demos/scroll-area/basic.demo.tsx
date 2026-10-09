import { Group, Paper, ScrollArea, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const pedidos = Array.from({ length: 14 }, (_, i) => ({
  id: `#${48213 - i}`,
  cliente: ['Mariana Souza', 'Carlos Lima', 'Ana Ribeiro', 'João Pereira', 'Beatriz Costa'][i % 5],
  total: `R$ ${(289 + i * 137).toLocaleString('pt-BR')},90`,
}));

export default function Demo() {
  return (
    <Paper withBorder w="100%">
      <ScrollArea h={260} px="md">
        {pedidos.map((p) => (
          <Group key={p.id} justify="space-between" py="sm" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
            <div>
              <Text fz="sm" fw={600}>
                {p.id}
              </Text>
              <Text fz="xs" c="var(--ds-text-3)">
                {p.cliente}
              </Text>
            </div>
            <Text fz="sm">{p.total}</Text>
          </Group>
        ))}
      </ScrollArea>
    </Paper>
  );
}
