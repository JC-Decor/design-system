import { Tag, Group } from '@jcdecor/ui';
import { IconTruckDelivery, IconSparkles, IconFlame } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Tag tone="success" leftSection={<IconTruckDelivery size={12} />}>Frete grátis</Tag>
      <Tag tone="primary" leftSection={<IconSparkles size={12} />}>Lançamento</Tag>
      <Tag tone="error" variant="filled" leftSection={<IconFlame size={12} />}>Mais vendido</Tag>
    </Group>
  );
}
