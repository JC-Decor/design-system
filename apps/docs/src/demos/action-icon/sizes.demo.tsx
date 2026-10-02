import { ActionIcon, Group } from '@jcdecor/ui';
import { IconShare } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sizes = [
  { size: 'xs', icon: 14 },
  { size: 'sm', icon: 16 },
  { size: 'md', icon: 18 },
  { size: 'lg', icon: 20 },
  { size: 'xl', icon: 24 },
] as const;

export default function Demo() {
  return (
    <Group align="center">
      {sizes.map(({ size, icon }) => (
        <ActionIcon key={size} size={size} variant="outline" aria-label={`Compartilhar (${size})`}>
          <IconShare size={icon} />
        </ActionIcon>
      ))}
      <ActionIcon size="input-md" variant="filled" aria-label="Compartilhar (altura de input)">
        <IconShare size={18} />
      </ActionIcon>
    </Group>
  );
}
