import { TokenSwatch, ColorRamp, Group, Stack } from '@jcdecor/ui';
import { brand, ramps } from '@jcdecor/ui/tokens';

export default function Demo() {
  const steps = Object.entries(ramps.evergreen)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([label, value]) => ({ label, value }));

  return (
    <Stack>
      <Group gap="sm">
        {Object.entries(brand).map(([key, value]) => (
          <TokenSwatch key={key} name={key} value={value} cssVar={`--dc-${key}`} />
        ))}
      </Group>
      <ColorRamp steps={steps} />
    </Stack>
  );
}
