import { useState } from 'react';
import { Button, Drawer, Group, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

type Position = 'left' | 'right' | 'top' | 'bottom';

const labels: Record<Position, string> = { left: 'Esquerda', right: 'Direita', top: 'Topo', bottom: 'Base' };

export default function Demo() {
  const [position, setPosition] = useState<Position | null>(null);

  return (
    <>
      <Drawer
        opened={position !== null}
        onClose={() => setPosition(null)}
        position={position ?? 'left'}
        size={position === 'top' || position === 'bottom' ? 'xs' : 'sm'}
        title={`Drawer — ${labels[position ?? 'left']}`}
      >
        <Text fz="sm" c="var(--ds-text-2)">
          Laterais para filtros e carrinho; base para ações rápidas no mobile (bottom sheet).
        </Text>
      </Drawer>

      <Group justify="center">
        {(Object.keys(labels) as Position[]).map((value) => (
          <Button key={value} variant="outline" onClick={() => setPosition(value)}>
            {labels[value]}
          </Button>
        ))}
      </Group>
    </>
  );
}
