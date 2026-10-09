import { Group, ThemeIcon } from '@jcdecor/ui';
import { IconTruckDelivery } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tamanhos = [
  { size: 'xs', icon: 12 },
  { size: 'sm', icon: 14 },
  { size: 'md', icon: 16 },
  { size: 'lg', icon: 20 },
  { size: 'xl', icon: 22 },
] as const;

export default function Demo() {
  return (
    <Group align="center">
      {tamanhos.map(({ size, icon }) => (
        <ThemeIcon key={size} size={size} variant="light">
          <IconTruckDelivery size={icon} />
        </ThemeIcon>
      ))}
    </Group>
  );
}
