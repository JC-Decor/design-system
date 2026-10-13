import { Button, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button>Aprovar férias</Button>
      <Button variant="ghost">Ver solicitação</Button>
      <Button variant="outline">Exportar</Button>
      <Button variant="danger">Recusar</Button>
      <Button variant="subtle">Cancelar</Button>
      <Button variant="light">Rascunho</Button>
    </Group>
  );
}
