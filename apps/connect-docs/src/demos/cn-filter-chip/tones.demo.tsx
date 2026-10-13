import { FilterChip, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tones = ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'] as const;

export default function Demo() {
  return (
    <Group justify="center">
      {tones.map((tone, i) => (
        <FilterChip key={tone} tone={tone} active count={i + 2} icon="users">
          {tone}
        </FilterChip>
      ))}
    </Group>
  );
}
