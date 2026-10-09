import { Button, Group, TextInput } from '@jcdecor/ui';
import { IconFilter, IconPlus, IconSearch } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Group justify="space-between" w="100%">
      <Group gap="sm">
        <TextInput placeholder="Buscar pedidos" leftSection={<IconSearch size={16} />} aria-label="Buscar pedidos" />
        <Button variant="outline" leftSection={<IconFilter size={16} />}>
          Filtros
        </Button>
      </Group>
      <Button leftSection={<IconPlus size={16} />}>Novo pedido</Button>
    </Group>
  );
}
