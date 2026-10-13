import { Button, Group, Icon, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group justify="space-between" w="100%">
      <Group gap="sm">
        <TextInput placeholder="Buscar colaboradores" leftSection={<Icon name="search" size={16} />} aria-label="Buscar colaboradores" />
        <Button variant="ghost" leftSection={<Icon name="filter" size={16} />}>
          Filtros
        </Button>
      </Group>
      <Button leftSection={<Icon name="user-plus" size={16} />}>Nova admissão</Button>
    </Group>
  );
}
