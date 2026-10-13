import { Group, Illustration, Stack, Text } from '@jcdecor/connect-ui';
import ferias from './assets/ferias.svg';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="flex-end" justify="center">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Stack key={size} align="center" gap={4}>
          <Illustration src={ferias} size={size} />
          <Text fz="xs" c="dimmed">{size}</Text>
        </Stack>
      ))}
    </Group>
  );
}
