import { Group, Kbd, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <div>
      <Text ta="center">
        Pressione <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> para buscar em todo o catálogo.
      </Text>
      <Group justify="center" mt="md" gap="xs">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Kbd key={size} size={size}>
            Enter
          </Kbd>
        ))}
      </Group>
    </div>
  );
}
