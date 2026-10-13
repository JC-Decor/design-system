import { ActionIcon, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sizes = [
  { size: 'xs', icon: 12 },
  { size: 'sm', icon: 14 },
  { size: 'md', icon: 15 },
  { size: 'lg', icon: 19 },
  { size: 'xl', icon: 23 },
] as const;

export default function Demo() {
  return (
    <Group align="center">
      {sizes.map(({ size, icon }) => (
        <ActionIcon key={size} size={size} aria-label={`Filtrar (${size})`}>
          <Icon name="filter" size={icon} />
        </ActionIcon>
      ))}
      <ActionIcon size="input-md" variant="filled" aria-label="Filtrar (altura de campo)">
        <Icon name="filter" size={18} />
      </ActionIcon>
    </Group>
  );
}
