import { Button, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Stack gap="sm">
      <Button fullWidth>Finalizar compra</Button>
      <Button fullWidth variant="outline">
        Continuar comprando
      </Button>
    </Stack>
  );
}
