import { Avatar, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Avatar src="https://picsum.photos/seed/colaboradora/200/200" alt="Foto de Marina Costa" size="lg" />
      <Avatar src="https://picsum.photos/seed/gestor/200/200" alt="Foto de Rafael Souza" size="lg" />
      {/* Sem foto (ou se ela falhar): mostra as iniciais do nome */}
      <Avatar src={null} name="Elisa Prado" size="lg" />
    </Group>
  );
}
