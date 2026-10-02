import { PriceTag, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="flex-end" gap="xl">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <PriceTag key={size} size={size} value={129.9} oldValue={159.9} unit="/rolo" />
      ))}
    </Group>
  );
}
