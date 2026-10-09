import { Avatar, Group } from '@jcdecor/ui';
import { IconUser } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Avatar name="Ana Ribeiro" />
      <Avatar name="Bruno Carvalho" variant="filled" />
      <Avatar name="Carla Mendes" variant="outline" />
      <Avatar name="Diego Santos" color="evergreen" />
      <Avatar>
        <IconUser size={20} />
      </Avatar>
      <Avatar radius="sm" color="obsidian" variant="filled" name="JC Decor" />
    </Group>
  );
}
