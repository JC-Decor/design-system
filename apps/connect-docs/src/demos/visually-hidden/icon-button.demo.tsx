import { ActionIcon, Group, Icon, VisuallyHidden } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <ActionIcon size="lg">
        <Icon name="bell" size={18} />
        <VisuallyHidden>Notificações</VisuallyHidden>
      </ActionIcon>
      <ActionIcon size="lg">
        <Icon name="download" size={18} />
        <VisuallyHidden>Baixar holerite</VisuallyHidden>
      </ActionIcon>
      <ActionIcon variant="filled" size="lg">
        <Icon name="plus" size={18} />
        <VisuallyHidden>Novo colaborador</VisuallyHidden>
      </ActionIcon>
    </Group>
  );
}
