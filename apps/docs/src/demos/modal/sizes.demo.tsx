import { useState } from 'react';
import { Button, Group, Modal, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '70%'];

export default function Demo() {
  const [size, setSize] = useState<string | null>(null);

  return (
    <>
      <Modal opened={size !== null} onClose={() => setSize(null)} title={`Modal ${size}`} size={size ?? 'md'}>
        <Text fz="sm" c="var(--ds-text-2)">
          Use <code>sm</code> para confirmações, <code>md</code> (padrão) para formulários curtos e <code>lg</code>/<code>xl</code> para conteúdo
          com mais colunas. Valores em porcentagem ou px também funcionam.
        </Text>
      </Modal>

      <Group justify="center">
        {sizes.map((value) => (
          <Button key={value} variant="outline" onClick={() => setSize(value)}>
            {value}
          </Button>
        ))}
      </Group>
    </>
  );
}
