import { useState } from 'react';
import { ActionIcon, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [dias, setDias] = useState(10);

  return (
    <Group>
      <ActionIcon.Group>
        <ActionIcon size="lg" aria-label="Menos um dia" onClick={() => setDias((d) => Math.max(5, d - 1))} disabled={dias <= 5}>
          <Icon name="minus" size={16} />
        </ActionIcon>
        <ActionIcon.GroupSection variant="default" size="lg" miw={72}>
          {dias} dias
        </ActionIcon.GroupSection>
        <ActionIcon size="lg" aria-label="Mais um dia" onClick={() => setDias((d) => Math.min(30, d + 1))} disabled={dias >= 30}>
          <Icon name="plus" size={16} />
        </ActionIcon>
      </ActionIcon.Group>
    </Group>
  );
}
