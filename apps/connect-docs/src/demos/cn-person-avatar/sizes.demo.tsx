import { Group, PersonAvatar } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group align="center">
      {[24, 28, 36, 48, 62, 84].map((size) => (
        <PersonAvatar key={size} size={size} seed="MS" tone="lavender" />
      ))}
    </Group>
  );
}
