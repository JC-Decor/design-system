import { Code, Table, Text } from '@mantine/core';
import { useFramework } from './framework';

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: React.ReactNode;
  required?: boolean;
  /** Nome no @jcdecor/vue quando difere (ex.: `onFavoriteChange` → `v-model:favorite`, `onCopy` → `@copy`) */
  vueName?: string;
  /** Tipo no Vue quando difere (ex.: ReactNode → `MantineNode | slot #title`) */
  vueType?: string;
  /** Descrição no Vue quando difere */
  vueDescription?: React.ReactNode;
  /** Linha só existe em um framework */
  only?: 'react' | 'vue';
}

export function PropsTable({ rows: allRows }: { rows: PropRow[] }) {
  const vue = useFramework().framework === 'vue';
  const rows = allRows
    .filter((row) => !row.only || row.only === (vue ? 'vue' : 'react'))
    .map((row) =>
      vue
        ? { ...row, name: row.vueName ?? row.name, type: row.vueType ?? row.type, description: row.vueDescription ?? row.description }
        : row,
    );
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
