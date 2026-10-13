import { ActionIcon, Button, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button leftSection={<Icon name="plus" size={15} />}>Nova meta</Button>
      <Button variant="ghost" rightSection={<Icon name="chev" size={15} />}>
        Filtrar
      </Button>
      <Button variant="danger" leftSection={<Icon name="trash" size={15} />}>
        Excluir
      </Button>
      <ActionIcon aria-label="Mais ações">
        <Icon name="dots" size={15} />
      </ActionIcon>
    </Group>
  );
}
