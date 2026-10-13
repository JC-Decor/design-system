import { TokenSwatch, ColorRamp, Group, Stack } from '@jcdecor/connect-ui';
import { brand, ramps } from '@jcdecor/connect-ui/tokens';

export default function Demo() {
  const steps = Object.entries(ramps.green)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([label, value]) => ({ label, value }));

  return (
    <Stack>
      <Group gap="sm">
        {Object.entries(brand).map(([key, value]) => (
          <TokenSwatch key={key} name={key} value={value} cssVar={`--cn-${key}`} />
        ))}
      </Group>
      <ColorRamp steps={steps} />
    </Stack>
  );
}
