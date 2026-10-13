import { Avatar, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Avatar name="Ana Ribeiro" />
      <Avatar name="Bruno Carvalho" color="lavender" />
      <Avatar name="Carla Mendes" color="green" />
      <Avatar name="Diego Santos" variant="filled" color="navy" />
      <Avatar name="Elisa Prado" variant="outline" />
      <Avatar color="ink">
        <Icon name="user" size={18} />
      </Avatar>
      <Avatar radius="md" color="yellow" name="Recursos Humanos" />
    </Group>
  );
}
