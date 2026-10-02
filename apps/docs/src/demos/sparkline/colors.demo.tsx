import { Group, Stack, Text } from '@jcdecor/ui';
import { Sparkline } from '@jcdecor/ui/charts';

const series = [
  { label: 'Padrão (paleta)', props: {} },
  { label: 'color="evergreen.6"', props: { color: 'evergreen.6' } },
  { label: 'color="electric.4"', props: { color: 'electric.4' } },
  {
    label: 'withGradient={false}',
    props: { color: 'gray.5', withGradient: false, fillOpacity: 0.15 },
  },
];

export default function Demo() {
  return (
    <Group gap="xl">
      {series.map(({ label, props }) => (
        <Stack key={label} gap={6}>
          <Sparkline w={160} data={[30, 42, 38, 55, 49, 62, 70]} {...props} />
          <Text fz="xs" c="var(--ds-text-3)" ff="monospace">
            {label}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}
