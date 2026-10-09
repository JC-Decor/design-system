import { Avatar, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Avatar src="https://picsum.photos/seed/atendente/200/200" alt="Foto da atendente" size="lg" />
      <Avatar src="https://picsum.photos/seed/vendedor/200/200" alt="Foto do vendedor" size="lg" />
      {/* Sem imagem (ou se ela falhar): mostra as iniciais do nome */}
      <Avatar src={null} name="Elisa Prado" size="lg" color="initials" />
    </Group>
  );
}
