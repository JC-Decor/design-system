import { Group, MetaPill } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      <MetaPill icon="building">Comercial</MetaPill>
      <MetaPill icon="pin">São Paulo · SP</MetaPill>
      <MetaPill icon="users">12 pessoas</MetaPill>
      <MetaPill active>Minha equipe</MetaPill>
    </Group>
  );
}
