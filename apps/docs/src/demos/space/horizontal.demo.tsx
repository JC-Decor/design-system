import { Button, Space } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Button variant="outline">Salvar rascunho</Button>
      <Space w="xl" />
      <Button>Publicar produto</Button>
    </div>
  );
}
