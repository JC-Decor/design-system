import { Group, Stack, Text, ToneRing } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      <Group>
        {(['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'] as const).map((tone, i) => (
          <ToneRing key={tone} tone={tone} value={30 + i * 12} />
        ))}
      </Group>
      <Group align="center">
        <ToneRing size={48} stroke={5} value={3} max={4} tone="green" label="3/4" />
        <ToneRing size={88} stroke={8} value={21} max={30} tone="lavender" label="21d" />
        <Text fz="sm" c="dimmed">21 de 30 dias de férias disponíveis</Text>
      </Group>
    </Stack>
  );
}
