import { useState } from 'react';
import { ActionBar, Badge, Button, Checkbox, Icon, Table, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = {};

const requests = [
  { id: 'r1', name: 'Ana Ribeiro', type: 'Férias · 15 dias', period: '04/11 – 18/11', status: 'Pendente' },
  { id: 'r2', name: 'Bruno Carvalho', type: 'Ajuste de ponto', period: '09/10', status: 'Pendente' },
  { id: 'r3', name: 'Camila Duarte', type: 'Férias · 10 dias', period: '16/12 – 25/12', status: 'Atrasada' },
  { id: 'r4', name: 'Diego Martins', type: 'Folga · banco de horas', period: '24/10', status: 'Pendente' },
];

export default function Demo() {
  const [selected, setSelected] = useState<string[]>([]);
  const allSelected = selected.length === requests.length;

  const toggle = (id: string) => setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));

  return (
    <>
      <Table highlightOnHover verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40}>
              <Checkbox
                aria-label="Selecionar todas"
                checked={allSelected}
                indeterminate={selected.length > 0 && !allSelected}
                onChange={() => setSelected(allSelected ? [] : requests.map((request) => request.id))}
              />
            </Table.Th>
            <Table.Th>Colaborador</Table.Th>
            <Table.Th>Solicitação</Table.Th>
            <Table.Th>Período</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {requests.map((request) => (
            <Table.Tr key={request.id} bg={selected.includes(request.id) ? 'var(--ds-primary-soft)' : undefined}>
              <Table.Td>
                <Checkbox
                  aria-label={`Selecionar solicitação de ${request.name}`}
                  checked={selected.includes(request.id)}
                  onChange={() => toggle(request.id)}
                />
              </Table.Td>
              <Table.Td fw={600}>{request.name}</Table.Td>
              <Table.Td>{request.type}</Table.Td>
              <Table.Td>{request.period}</Table.Td>
              <Table.Td>
                <Badge color={request.status === 'Atrasada' ? 'coral' : 'yellow'} variant="light">
                  {request.status}
                </Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <ActionBar opened={selected.length > 0} onClose={() => setSelected([])} closeOnEscape aria-label="Ações em massa das solicitações">
        <Text fz="sm" fw={600} px="xs">
          {selected.length} {selected.length === 1 ? 'selecionada' : 'selecionadas'}
        </Text>
        <ActionBar.Divider />
        <Button size="sm" variant="subtle" leftSection={<Icon name="check" size={16} />}>
          Aprovar
        </Button>
        <Button size="sm" variant="subtle" leftSection={<Icon name="send" size={16} />}>
          Lembrar gestor
        </Button>
        <Button size="sm" variant="subtle" leftSection={<Icon name="download" size={16} />}>
          Exportar
        </Button>
        <Button size="sm" variant="subtle" color="coral" leftSection={<Icon name="x" size={16} />}>
          Recusar
        </Button>
        <ActionBar.Divider />
        <ActionBar.CloseButton aria-label="Limpar seleção" />
      </ActionBar>
    </>
  );
}
