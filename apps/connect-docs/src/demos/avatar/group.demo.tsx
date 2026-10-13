import { Avatar, Group, Text, Tooltip } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const equipe = ['Ana Ribeiro', 'Bruno Carvalho', 'Carla Mendes', 'Diego Santos'];

export default function Demo() {
  return (
    <Group gap="sm">
      <Tooltip.Group openDelay={200} closeDelay={100}>
        <Avatar.Group>
          {equipe.map((nome) => (
            <Tooltip key={nome} label={nome}>
              <Avatar name={nome} color="initials" />
            </Tooltip>
          ))}
          <Tooltip label="Mais 5 pessoas da equipe">
            <Avatar>+5</Avatar>
          </Tooltip>
        </Avatar.Group>
      </Tooltip.Group>
      <Text fz="sm" c="var(--ds-text-2)">
        Equipe Comercial · 9 pessoas
      </Text>
    </Group>
  );
}
