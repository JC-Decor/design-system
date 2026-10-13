import { Group, PersonAvatar } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <PersonAvatar size={48} seed="AS" src="https://i.pravatar.cc/96?img=47" alt="Ana Souza" ring />
      {/* Foto quebrada: volta para as iniciais */}
      <PersonAvatar size={48} seed="RM" tone="green" src="https://exemplo.invalido/foto.jpg" alt="Rafael Moura" ring />
    </Group>
  );
}
