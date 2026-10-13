import { ActionIcon, Icon, Menu } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const teams = ['Comercial', 'Financeiro', 'Logística', 'Pessoas & Cultura'];

export default function Demo() {
  return (
    <Menu width={220} position="bottom-start">
      <Menu.Target>
        <ActionIcon size="lg" aria-label="Mais ações do colaborador">
          <Icon name="dots" size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<Icon name="pen" size={16} />}>Editar</Menu.Item>
        <Menu.Sub>
          <Menu.Sub.Target>
            <Menu.Sub.Item leftSection={<Icon name="users" size={16} />}>Mover para equipe</Menu.Sub.Item>
          </Menu.Sub.Target>
          <Menu.Sub.Dropdown>
            {teams.map((team) => (
              <Menu.Item key={team}>{team}</Menu.Item>
            ))}
          </Menu.Sub.Dropdown>
        </Menu.Sub>
        <Menu.Item leftSection={<Icon name="target" size={16} />}>Atribuir meta</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<Icon name="folder" size={16} />}>Arquivar</Menu.Item>
        <Menu.Item color="coral" leftSection={<Icon name="trash" size={16} />}>
          Excluir
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
