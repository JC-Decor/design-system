import { useState } from 'react';
import { ActionIcon, Group, RollingNumber } from '@jcdecor/ui';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [quantidade, setQuantidade] = useState(2);

  return (
    <Group gap="md">
      <ActionIcon variant="default" size="lg" aria-label="Diminuir" onClick={() => setQuantidade((q) => Math.max(1, q - 1))}>
        <IconMinus size={18} />
      </ActionIcon>
      <RollingNumber value={quantidade} suffix=" caixas" fz="lg" fw={600} miw={110} ta="center" withLiveRegion />
      <ActionIcon variant="default" size="lg" aria-label="Aumentar" onClick={() => setQuantidade((q) => q + 1)}>
        <IconPlus size={18} />
      </ActionIcon>
    </Group>
  );
}
