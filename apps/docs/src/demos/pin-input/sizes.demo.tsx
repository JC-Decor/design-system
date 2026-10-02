import { PinInput, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <PinInput key={size} size={size} ariaLabel={`Código ${size}`} placeholder="•" />
      ))}
    </Stack>
  );
}
