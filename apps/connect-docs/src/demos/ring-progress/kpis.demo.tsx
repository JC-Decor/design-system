import { Card, Group, RingProgress, SimpleGrid, Stack, Text } from '@jcdecor/connect-ui';

const indicadores = [
  { label: 'Pontualidade', value: 92, color: 'green' },
  { label: 'Treinamentos em dia', value: 64, color: 'lavender' },
  { label: 'Absenteísmo', value: 4, color: 'coral' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }}>
      {indicadores.map((item) => (
        <Card key={item.label} padding="md">
          <Group gap="sm" wrap="nowrap">
            <RingProgress size={64} thickness={7} roundCaps sections={[{ value: item.value, color: item.color }]} />
            <Stack gap={0}>
              <Text fz="xs" c="var(--ds-text-3)">
                {item.label}
              </Text>
              <Text fw={700} fz="xl">
                {item.value}%
              </Text>
            </Stack>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
}
