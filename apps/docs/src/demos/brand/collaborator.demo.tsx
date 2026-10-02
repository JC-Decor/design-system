import { Avatar, Collaborator, Group, ThemeIcon } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl" align="center">
      <Collaborator size={96} />
      <Collaborator size={96} headColor="horizon.6" bodyColor="obsidian.6" />
      <Collaborator size={96} headColor="electric.3" bodyColor="horizon.6" />
      <ThemeIcon size={56} radius="xl" variant="light">
        <Collaborator size={30} />
      </ThemeIcon>
      <Avatar size={56} color="horizon">
        <Collaborator size={28} headColor="electric.3" />
      </Avatar>
    </Group>
  );
}
