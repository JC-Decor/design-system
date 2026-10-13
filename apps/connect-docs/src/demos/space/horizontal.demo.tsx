import { Button, Space } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Button variant="ghost">Salvar rascunho</Button>
      <Space w="xl" />
      <Button>Publicar comunicado</Button>
    </div>
  );
}
