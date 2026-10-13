import { useState } from 'react';
import { ActionIcon, Avatar, Badge, Checkbox, Group, Icon, Menu, Table, Text } from '@jcdecor/connect-ui';

const colaboradores = [
  { id: '004182', nome: 'Ana Ribeiro', cargo: 'Analista de RH', area: 'Gente & Gestão', status: 'Ativo', color: 'green' },
  { id: '003907', nome: 'Bruno Carvalho', cargo: 'Coordenador', area: 'Logística', status: 'Férias', color: 'blue' },
  { id: '005220', nome: 'Carla Mendes', cargo: 'Analista Financeira', area: 'Financeiro', status: 'Pendente', color: 'yellow' },
  { id: '002815', nome: 'Diego Santos', cargo: 'Desenvolvedor', area: 'Tecnologia', status: 'Afastado', color: 'coral' },
];

export default function Demo() {
  const [selecionados, setSelecionados] = useState<string[]>(['003907']);
  const alternar = (id: string, marcado: boolean) => setSelecionados((atual) => (marcado ? [...atual, id] : atual.filter((item) => item !== id)));

  return (
    <Table.ScrollContainer minWidth={680}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40} />
            <Table.Th>Colaborador</Table.Th>
            <Table.Th>Área</Table.Th>
            <Table.Th>Matrícula</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th w={48} />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {colaboradores.map((c) => (
            <Table.Tr key={c.id} data-selected={selecionados.includes(c.id) || undefined}>
              <Table.Td>
                <Checkbox
                  size="xs"
                  aria-label={`Selecionar ${c.nome}`}
                  checked={selecionados.includes(c.id)}
                  onChange={(event) => alternar(c.id, event.currentTarget.checked)}
                />
              </Table.Td>
              <Table.Td>
                <Group gap="sm" wrap="nowrap">
                  <Avatar name={c.nome} size="sm" color="initials" />
                  <div>
                    <Text fz="sm" fw={600} c="var(--ds-text)">
                      {c.nome}
                    </Text>
                    <Text fz="xs" c="var(--ds-text-3)">
                      {c.cargo}
                    </Text>
                  </div>
                </Group>
              </Table.Td>
              <Table.Td>{c.area}</Table.Td>
              <Table.Td ff="monospace" fz="xs">
                {c.id}
              </Table.Td>
              <Table.Td>
                <Badge color={c.color}>{c.status}</Badge>
              </Table.Td>
              <Table.Td>
                <Menu position="bottom-end">
                  <Menu.Target>
                    <ActionIcon variant="subtle" aria-label={`Ações de ${c.nome}`}>
                      <Icon name="dots" size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item leftSection={<Icon name="user" size={14} />}>Ver perfil</Menu.Item>
                    <Menu.Item leftSection={<Icon name="doc" size={14} />}>Documentos</Menu.Item>
                    <Menu.Item color="coral" leftSection={<Icon name="x" size={14} />}>
                      Iniciar desligamento
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
