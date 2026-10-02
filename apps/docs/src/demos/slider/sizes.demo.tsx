import { Slider, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Stack w="100%" gap="lg">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, i) => (
        <Slider key={size} size={size} defaultValue={20 + i * 15} thumbLabel={`Slider ${size}`} />
      ))}
    </Stack>
  );
}
