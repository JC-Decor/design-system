import { Group, Pill } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Pill>Pisos vinílicos</Pill>
      <Pill>Papel de parede</Pill>
      <Pill variant="contrast">Painéis ripados</Pill>
      <Pill disabled>Esgotado</Pill>
    </Group>
  );
}
