import { Group, Stack, Text } from '@jcdecor/ui';
import { Sparkline } from '@jcdecor/ui/charts';

const trendColors = { positive: 'evergreen.6', negative: 'danger.6', neutral: 'gray.5' };

const items = [
  { label: 'Pedidos', data: [42, 48, 45, 53, 58, 61, 66] },
  { label: 'Ticket médio', data: [412, 398, 405, 389, 380, 371, 366] },
  { label: 'Devoluções', data: [12, 12, 13, 12, 12, 13, 12] },
];

export default function Demo() {
  return (
    <Group gap="xl">
      {items.map((item) => (
        <Stack key={item.label} gap={6}>
          <Text fz="sm" fw={600}>
            {item.label}
          </Text>
          <Sparkline w={180} data={item.data} trendColors={trendColors} />
        </Stack>
      ))}
    </Group>
  );
}
