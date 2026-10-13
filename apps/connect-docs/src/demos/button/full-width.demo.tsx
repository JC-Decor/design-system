import { Button, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Stack gap="sm">
      <Button fullWidth>Enviar solicitação de férias</Button>
      <Button fullWidth variant="ghost">
        Salvar como rascunho
      </Button>
    </Stack>
  );
}
