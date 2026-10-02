import { ColorSwatch, Group, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = ['horizon', 'obsidian', 'electric', 'evergreen', 'danger', 'gray'];

export default function Demo() {
  return (
    <Group gap="lg">
      {cores.map((cor) => (
        <Stack key={cor} gap={4} align="center">
          <ColorSwatch color={`var(--mantine-color-${cor}-filled)`} size={40} radius="md" />
          <Text fz="xs" c="var(--ds-text-3)">
            {cor}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}
