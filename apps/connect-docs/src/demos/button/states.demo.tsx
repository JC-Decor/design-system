import { Button, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button disabled>Aprovar</Button>
      <Button variant="ghost" disabled>
        Ver solicitação
      </Button>
      <Button variant="danger" disabled>
        Recusar
      </Button>
      <Button variant="outline" loading>
        Exportando
      </Button>
    </Group>
  );
}
