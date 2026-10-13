import { ActionIcon, Group, Icon, Kbd, Menu } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

function Shortcut({ keys }: { keys: string[] }) {
  return (
    <Group gap={2} wrap="nowrap">
      {keys.map((key) => (
        <Kbd key={key} size="xs">
          {key}
        </Kbd>
      ))}
    </Group>
  );
}

export default function Demo() {
  return (
    <Menu width={250} position="bottom-end">
      <Menu.Target>
        <ActionIcon aria-label="Ações de Mariana Souza">
          <Icon name="dots" size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Mariana Souza</Menu.Label>
        <Menu.Item leftSection={<Icon name="eye" size={16} />} rightSection={<Shortcut keys={['⌘', 'O']} />}>
          Ver perfil
        </Menu.Item>
        <Menu.Item leftSection={<Icon name="pen" size={16} />} rightSection={<Shortcut keys={['⌘', 'E']} />}>
          Editar dados
        </Menu.Item>
        <Menu.Item leftSection={<Icon name="chat" size={16} />}>Agendar 1:1</Menu.Item>

        <Menu.Divider />
        <Menu.Label>Documentos</Menu.Label>
        <Menu.Item leftSection={<Icon name="doc" size={16} />}>Gerar declaração</Menu.Item>
        <Menu.Item leftSection={<Icon name="download" size={16} />}>Baixar espelho de ponto</Menu.Item>
        <Menu.Item leftSection={<Icon name="doc-clock" size={16} />} disabled>
          Informe de rendimentos
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item leftSection={<Icon name="lock" size={16} />}>Bloquear acesso</Menu.Item>
        <Menu.Item color="coral" leftSection={<Icon name="trash" size={16} />}>
          Desligar colaborador
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
