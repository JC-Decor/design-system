import { Anchor, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl">
      <Anchor href="#" underline="hover">
        Sublinhado no hover
      </Anchor>
      <Anchor href="#" underline="always">
        Sempre sublinhado
      </Anchor>
      <Anchor href="#" underline="never">
        Nunca sublinhado
      </Anchor>
      <Anchor href="#" underline="not-hover">
        Some no hover
      </Anchor>
    </Group>
  );
}
