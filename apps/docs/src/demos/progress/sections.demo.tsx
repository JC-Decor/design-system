import { Group, Progress, Stack, Text, Tooltip } from '@jcdecor/ui';

const categories = [
  { label: 'Pisos', value: 42, color: 'horizon' },
  { label: 'Papel de parede', value: 28, color: 'evergreen' },
  { label: 'Painéis', value: 18, color: 'electric' },
  { label: 'Outros', value: 12, color: 'gray' },
];

export default function Demo() {
  return (
    <Stack gap="xs">
      <Text fz="sm" fw={500}>
        Vendas por categoria — setembro
      </Text>
      <Progress.Root size={24}>
        {categories.map((category) => (
          <Tooltip key={category.label} label={`${category.label}: ${category.value}%`}>
            <Progress.Section value={category.value} color={category.color}>
              <Progress.Label>{category.value}%</Progress.Label>
            </Progress.Section>
          </Tooltip>
        ))}
      </Progress.Root>
      <Group gap="md">
        {categories.map((category) => (
          <Group key={category.label} gap={6}>
            <Progress.Root w={10} size={10}>
              <Progress.Section value={100} color={category.color} />
            </Progress.Root>
            <Text fz="xs" c="var(--ds-text-2)">
              {category.label}
            </Text>
          </Group>
        ))}
      </Group>
    </Stack>
  );
}
