import { Button, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button leftSection={<Icon name="user-plus" size={15} />}>Novo colaborador</Button>
      <Button variant="ghost" leftSection={<Icon name="download" size={15} />}>
        Exportar planilha
      </Button>
      <Button variant="outline" rightSection={<Icon name="arrow-r" size={15} />}>
        Próxima etapa
      </Button>
      <Button loading>Salvando</Button>
    </Group>
  );
}
