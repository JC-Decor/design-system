import { ActionIcon, Group, Icon, Tooltip } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Tooltip label="Editar colaborador">
        <ActionIcon aria-label="Editar colaborador">
          <Icon name="pen" size={15} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Desligar colaborador">
        <ActionIcon variant="danger" aria-label="Desligar colaborador">
          <Icon name="trash" size={15} />
        </ActionIcon>
      </Tooltip>
      <ActionIcon variant="filled" loading aria-label="Salvando">
        <Icon name="check" size={15} />
      </ActionIcon>
      <ActionIcon disabled aria-label="Baixar holerite (indisponível)">
        <Icon name="download" size={15} />
      </ActionIcon>
    </Group>
  );
}
