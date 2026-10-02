import { useState } from 'react';
import { ActionIcon, Group } from '@jcdecor/ui';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [quantidade, setQuantidade] = useState(2);

  return (
    <Group>
      <ActionIcon.Group>
        <ActionIcon variant="default" size="lg" aria-label="Diminuir" onClick={() => setQuantidade((q) => Math.max(1, q - 1))} disabled={quantidade <= 1}>
          <IconMinus size={16} />
        </ActionIcon>
        <ActionIcon.GroupSection variant="default" size="lg" miw={56}>
          {quantidade} cx
        </ActionIcon.GroupSection>
        <ActionIcon variant="default" size="lg" aria-label="Aumentar" onClick={() => setQuantidade((q) => q + 1)}>
          <IconPlus size={16} />
        </ActionIcon>
      </ActionIcon.Group>
    </Group>
  );
}
