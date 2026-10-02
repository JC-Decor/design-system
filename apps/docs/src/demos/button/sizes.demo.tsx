import { Button, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Button key={size} size={size}>
          Botão {size}
        </Button>
      ))}
    </Group>
  );
}
