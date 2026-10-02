import { Center, SegmentedControl } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Center>
      <SegmentedControl orientation="vertical" data={['Todos os pedidos', 'Em separação', 'Enviados', 'Entregues']} defaultValue="Enviados" />
    </Center>
  );
}
