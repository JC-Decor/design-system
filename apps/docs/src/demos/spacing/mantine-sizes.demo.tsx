import { Badge, Group, Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="md">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <Text fz="xs" c="var(--ds-text-3)" mb={4}>
            gap="{size}"
          </Text>
          <Group gap={size}>
            <Badge size="lg">Pisos</Badge>
            <Badge size="lg">Tecidos</Badge>
            <Badge size="lg">Cortinas</Badge>
          </Group>
        </div>
      ))}
    </Stack>
  );
}
