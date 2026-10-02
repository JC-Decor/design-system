import { Input, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack w="100%">
      <Input variant="default" placeholder="default — borda (padrão)" aria-label="Variante default" />
      <Input variant="filled" placeholder="filled — fundo preenchido" aria-label="Variante filled" />
      <Input variant="unstyled" placeholder="unstyled — sem borda" aria-label="Variante unstyled" />
    </Stack>
  );
}
