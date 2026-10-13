import { Group, Illustration, Stack, Text } from '@jcdecor/connect-ui';
import equipe from './assets/equipe.svg';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      {(['muted', 'soft', 'default', 'strong'] as const).map((tone) => (
        <Stack key={tone} align="center" gap={4}>
          <Illustration src={equipe} tone={tone} size="md" alt="Equipe reunida" />
          <Text fz="xs" c="dimmed">{tone}</Text>
        </Stack>
      ))}
    </Group>
  );
}
