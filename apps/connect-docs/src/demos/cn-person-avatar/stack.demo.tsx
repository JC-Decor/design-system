import { AvatarStack, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const equipe = [
  { seed: 'AS', tone: 'blue', name: 'Ana Souza' },
  { seed: 'RM', tone: 'lavender', name: 'Rafael Moura' },
  { seed: 'JL', tone: 'green', name: 'Júlia Lima' },
  { seed: 'CF', tone: 'yellow', name: 'Carlos Ferreira' },
  { seed: 'BP', tone: 'coral', name: 'Beatriz Prado' },
  { seed: 'TN', tone: 'ink', name: 'Tiago Nunes' },
  { seed: 'LR', tone: 'blue', name: 'Larissa Rocha' },
  { seed: 'GM', tone: 'green', name: 'Gustavo Melo' },
] as const;

export default function Demo() {
  return (
    <Stack align="center">
      <Group gap="sm">
        <AvatarStack people={[...equipe]} />
        <Text fz="sm" c="dimmed">8 pessoas na equipe Comercial</Text>
      </Group>
      <AvatarStack people={[...equipe]} size={36} max={3} />
    </Stack>
  );
}
