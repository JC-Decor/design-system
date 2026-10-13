import { Group, Pill } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Pill>Tecnologia</Pill>
      <Pill>Financeiro</Pill>
      <Pill variant="contrast">Minha equipe</Pill>
      <Pill disabled>Arquivado</Pill>
    </Group>
  );
}
