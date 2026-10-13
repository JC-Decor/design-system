import { Badge, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      <Badge color="green" leftSection={<Icon name="check" size={12} stroke={2} />}>
        Aprovado
      </Badge>
      <Badge color="yellow" leftSection={<Icon name="clock" size={12} stroke={2} />}>
        Aguardando gestor
      </Badge>
      <Badge color="lavender" leftSection={<Icon name="palm" size={12} stroke={2} />}>
        De férias
      </Badge>
      <Badge color="coral" variant="filled" leftSection={<Icon name="fire" size={12} stroke={2} />}>
        Urgente
      </Badge>
      <Badge circle>3</Badge>
    </Group>
  );
}
