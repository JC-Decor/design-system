import { AlphaSlider, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack w="100%">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <AlphaSlider key={size} size={size} color="#6254C9" value={0.7} aria-label={`Opacidade ${size}`} />
      ))}
    </Stack>
  );
}
