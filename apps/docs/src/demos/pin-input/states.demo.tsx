import { PinInput, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      <PinInput ariaLabel="Senha (mascarada)" mask defaultValue="12" type="number" />
      <PinInput ariaLabel="Com erro" error defaultValue="0000" />
      <PinInput ariaLabel="Sucesso" success defaultValue="2025" />
      <PinInput ariaLabel="Desabilitado" disabled defaultValue="12" />
    </Stack>
  );
}
