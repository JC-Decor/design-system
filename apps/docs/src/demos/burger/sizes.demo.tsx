import { Burger, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl" align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Burger key={size} size={size} aria-label={`Menu ${size}`} />
      ))}
      <Burger opened color="horizon" aria-label="Menu aberto" />
    </Group>
  );
}
