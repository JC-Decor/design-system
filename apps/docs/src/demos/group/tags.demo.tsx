import { Badge, Group, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Group gap="xs" align="center">
      <Text fz="sm" fw={600} mr="xs">
        Piso vinílico Carvalho Natural
      </Text>
      <Badge variant="light" color="evergreen">
        Em estoque
      </Badge>
      <Badge variant="light">Clique</Badge>
      <Badge variant="light" color="gray">
        Resistente à água
      </Badge>
    </Group>
  );
}
