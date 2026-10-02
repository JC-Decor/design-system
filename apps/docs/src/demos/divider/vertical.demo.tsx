import { Anchor, Divider, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="sm" fz="sm">
      <Anchor href="#">Minha conta</Anchor>
      <Divider orientation="vertical" />
      <Anchor href="#">Meus pedidos</Anchor>
      <Divider orientation="vertical" />
      <Anchor href="#">Central de ajuda</Anchor>
    </Group>
  );
}
