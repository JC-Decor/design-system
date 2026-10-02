import { Button, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button>Ação primária</Button>
      <Button variant="outline">Secundária</Button>
      <Button variant="accent">Destaque</Button>
      <Button variant="subtle">Ghost</Button>
      <Button disabled>Desabilitado</Button>
      <Button size="sm">Pequeno</Button>
    </Group>
  );
}
