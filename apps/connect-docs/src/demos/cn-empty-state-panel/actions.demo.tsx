import { Button, EmptyStatePanel } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <EmptyStatePanel
      icon="palm"
      title="Nenhuma solicitação de férias"
      description="Quando sua equipe pedir férias, as solicitações aparecem aqui para aprovação."
      action={<Button mt={8}>Programar férias</Button>}
    />
  );
}
