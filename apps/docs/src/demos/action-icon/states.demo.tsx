import { ActionIcon, Group, Tooltip } from '@jcdecor/ui';
import { IconPencil, IconTrash, IconHeart } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Tooltip label="Editar produto">
        <ActionIcon aria-label="Editar produto">
          <IconPencil size={18} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Excluir produto">
        <ActionIcon color="danger" aria-label="Excluir produto">
          <IconTrash size={18} />
        </ActionIcon>
      </Tooltip>
      <ActionIcon variant="filled" loading aria-label="Salvando">
        <IconHeart size={18} />
      </ActionIcon>
      <ActionIcon variant="filled" disabled aria-label="Favoritar (indisponível)">
        <IconHeart size={18} />
      </ActionIcon>
    </Group>
  );
}
