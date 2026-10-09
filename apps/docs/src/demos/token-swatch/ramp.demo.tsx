import { ColorRamp, Stack, Text } from '@jcdecor/ui';
import { ramps } from '@jcdecor/ui/tokens';

// Do mais escuro (900) ao mais claro (50)
const toSteps = (ramp: Record<number, string>) =>
  Object.entries(ramp)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([label, value]) => ({ label, value }));

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text fz="xs" fw={600} tt="uppercase" c="var(--ds-text-3)">Horizon</Text>
      <ColorRamp steps={toSteps(ramps.horizon)} />
      <Text fz="xs" fw={600} tt="uppercase" c="var(--ds-text-3)">Electric</Text>
      <ColorRamp steps={toSteps(ramps.electric)} />
    </Stack>
  );
}
