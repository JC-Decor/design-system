import { ActionIcon, Group } from '@jcdecor/ui';
import { IconHeart } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const variants = ['filled', 'outline', 'accent', 'subtle', 'light', 'default', 'transparent'] as const;

export default function Demo() {
  return (
    <Group>
      {variants.map((variant) => (
        <ActionIcon key={variant} variant={variant} aria-label={`Favoritar (${variant})`}>
          <IconHeart size={18} />
        </ActionIcon>
      ))}
    </Group>
  );
}
