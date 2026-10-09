import { ActionIcon, Menu } from '@jcdecor/ui';
import { IconArchive, IconDots, IconEdit, IconFolder, IconTag, IconTrash } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const collections = ['Outono 2026', 'Banheiro & Cozinha', 'Quarto infantil'];

export default function Demo() {
  return (
    <Menu width={220} position="bottom-start">
      <Menu.Target>
        <ActionIcon variant="default" size="lg" aria-label="Mais ações do produto">
          <IconDots size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconEdit size={16} />}>Editar</Menu.Item>
        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item leftSection={<IconFolder size={16} />}>Mover para coleção</Menu.Sub.Item>
          </Menu.Sub.Target>
          <Menu.Sub.Dropdown>
            {collections.map((collection) => (
              <Menu.Item key={collection}>{collection}</Menu.Item>
            ))}
          </Menu.Sub.Dropdown>
        </Menu.Sub>
        <Menu.Item leftSection={<IconTag size={16} />}>Aplicar desconto</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<IconArchive size={16} />}>Arquivar</Menu.Item>
        <Menu.Item color="danger" leftSection={<IconTrash size={16} />}>
          Excluir
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
