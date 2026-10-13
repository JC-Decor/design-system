import { useState } from 'react';
import { ActionIcon, Group, Icon, RollingNumber } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [dias, setDias] = useState(15);

  return (
    <Group gap="md">
      <ActionIcon size="lg" aria-label="Menos um dia de férias" onClick={() => setDias((d) => Math.max(5, d - 1))}>
        <Icon name="minus" size={18} />
      </ActionIcon>
      <RollingNumber value={dias} suffix=" dias" fz="lg" fw={600} miw={90} ta="center" withLiveRegion />
      <ActionIcon size="lg" aria-label="Mais um dia de férias" onClick={() => setDias((d) => Math.min(30, d + 1))}>
        <Icon name="plus" size={18} />
      </ActionIcon>
    </Group>
  );
}
