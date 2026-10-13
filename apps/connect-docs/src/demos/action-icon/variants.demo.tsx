import { ActionIcon, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const variants = ['default', 'filled', 'outline', 'danger', 'subtle', 'light', 'transparent'] as const;

export default function Demo() {
  return (
    <Group>
      {variants.map((variant) => (
        <ActionIcon key={variant} variant={variant} aria-label={`Editar (${variant})`}>
          <Icon name="pen" size={15} />
        </ActionIcon>
      ))}
    </Group>
  );
}
