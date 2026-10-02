import { Group, Pill, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Group key={size} gap="xs">
          <Pill size={size}>Tamanho {size}</Pill>
          <Pill size={size} withRemoveButton>
            Removível
          </Pill>
        </Group>
      ))}
    </Stack>
  );
}
