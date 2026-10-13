import { ProgressBar, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420, centered: true };

export default function Demo() {
  return (
    <Stack>
      {[4, 6, 8, 12].map((size) => (
        <ProgressBar key={size} size={size} value={18} max={30} tone="lavender" aria-label={`Dias de férias usados (${size}px)`} />
      ))}
    </Stack>
  );
}
