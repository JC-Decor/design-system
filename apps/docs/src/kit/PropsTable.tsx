import { Code, Table, Text } from '@mantine/core';

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: React.ReactNode;
  required?: boolean;
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <Table.ScrollContainer minWidth={640} my="md">
      <Table withTableBorder verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Prop</Table.Th>
            <Table.Th>Tipo</Table.Th>
            <Table.Th>Padrão</Table.Th>
            <Table.Th>Descrição</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row) => (
            <Table.Tr key={row.name}>
              <Table.Td style={{ whiteSpace: 'nowrap' }}>
                <Code fw={600}>{row.name}</Code>
                {row.required && <Text component="span" c="var(--ds-error)" fw={700}> *</Text>}
              </Table.Td>
              <Table.Td><Code c="var(--ds-primary)" style={{ whiteSpace: 'pre-wrap' }}>{row.type}</Code></Table.Td>
              <Table.Td>{row.default ? <Code>{row.default}</Code> : <Text c="var(--ds-text-3)" fz="sm">—</Text>}</Table.Td>
              <Table.Td fz="sm">{row.description}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
