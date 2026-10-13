import { Badge, Group, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <Text fz="xs" c="var(--ds-text-3)" mb={4}>
            gap="{size}"
          </Text>
          <Group gap={size}>
            <Badge color="blue">Pessoas</Badge>
            <Badge color="lavender">Financeiro</Badge>
            <Badge color="green">Operações</Badge>
          </Group>
        </div>
      ))}
    </Stack>
  );
}
