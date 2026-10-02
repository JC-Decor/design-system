import { Group, SemiCircleProgress } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl" align="center">
      <SemiCircleProgress value={60} size={160} label="Para cima" />
      <SemiCircleProgress value={60} size={160} orientation="down" label="Para baixo" />
      <SemiCircleProgress value={60} size={160} fillDirection="right-to-left" label="Direita → esquerda" />
    </Group>
  );
}
