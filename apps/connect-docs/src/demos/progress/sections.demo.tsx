import { Group, Progress, Stack, Text, Tooltip } from '@jcdecor/connect-ui';

const jornada = [
  { label: 'Trabalhadas', value: 78, color: 'navy' },
  { label: 'Horas extras', value: 9, color: 'lavender' },
  { label: 'Abonos', value: 5, color: 'green' },
  { label: 'Faltas', value: 8, color: 'coral' },
];

export default function Demo() {
  return (
    <Stack gap="xs">
      <Text fz="sm" fw={500}>
        Composição da jornada — setembro
      </Text>
      <Progress.Root size={24}>
        {jornada.map((item) => (
          <Tooltip key={item.label} label={`${item.label}: ${item.value}%`}>
            <Progress.Section value={item.value} color={item.color}>
              <Progress.Label>{item.value}%</Progress.Label>
            </Progress.Section>
          </Tooltip>
        ))}
      </Progress.Root>
      <Group gap="md">
        {jornada.map((item) => (
          <Group key={item.label} gap={6}>
            <Progress.Root w={10} size={10}>
              <Progress.Section value={100} color={item.color} />
            </Progress.Root>
            <Text fz="xs" c="var(--ds-text-2)">
              {item.label}
            </Text>
          </Group>
        ))}
      </Group>
    </Stack>
  );
}
