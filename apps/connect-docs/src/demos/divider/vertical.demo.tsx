import { Anchor, Divider, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="sm" fz="sm">
      <Anchor href="#">Meu perfil</Anchor>
      <Divider orientation="vertical" />
      <Anchor href="#">Meus documentos</Anchor>
      <Divider orientation="vertical" />
      <Anchor href="#">Central de ajuda</Anchor>
    </Group>
  );
}
