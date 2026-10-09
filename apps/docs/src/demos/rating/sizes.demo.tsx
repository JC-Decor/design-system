import { Rating, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Rating key={size} size={size} defaultValue={4} readOnly aria-label={`Nota ${size}`} />
      ))}
    </Stack>
  );
}
