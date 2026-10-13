import { Group, MiniSpark, Spark, Stack, Table } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

const equipes = [
  { nome: 'Comercial', horas: [12, 14, 11, 16, 18, 21], tone: 'green' },
  { nome: 'Operações', horas: [22, 20, 19, 17, 15, 12], tone: 'coral' },
  { nome: 'Pessoas & Cultura', horas: [8, 9, 8, 10, 9, 10], tone: 'blue' },
] as const;

export default function Demo() {
  return (
    <Stack>
      <Group grow>
        {(['up', 'down', 'wave', 'flat'] as const).map((variant) => (
          <Spark key={variant} variant={variant} tone="lavender" />
        ))}
      </Group>
      <Table>
        <Table.Thead>
          <Table.Tr><Table.Th>Equipe</Table.Th><Table.Th>Banco de horas (6 meses)</Table.Th></Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {equipes.map((e) => (
            <Table.Tr key={e.nome}>
              <Table.Td>{e.nome}</Table.Td>
              <Table.Td><MiniSpark data={[...e.horas]} tone={e.tone} /></Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}
