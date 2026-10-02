import { Badge, Group } from '@jcdecor/ui';
import { IconCheck, IconClock, IconFlame, IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      <Badge color="evergreen" leftSection={<IconCheck size={12} />}>
        Pago
      </Badge>
      <Badge color="electric" leftSection={<IconClock size={12} />}>
        Aguardando
      </Badge>
      <Badge leftSection={<IconTruckDelivery size={12} />}>Frete grátis</Badge>
      <Badge color="danger" variant="filled" leftSection={<IconFlame size={12} />}>
        -30%
      </Badge>
      <Badge circle>3</Badge>
    </Group>
  );
}
