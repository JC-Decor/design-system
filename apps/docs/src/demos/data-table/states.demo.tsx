import { DataTable, SimpleGrid, Stack, EmptyState, Button, type DataTableColumn } from '@jcdecor/ui';
import { IconSearchOff } from '@tabler/icons-react';

interface Keyword {
  keyword: string;
  volume: number;
  ctr: number;
}

const columns: DataTableColumn<Keyword>[] = [
  { key: 'keyword', header: 'Palavra-chave' },
  { key: 'volume', header: 'Buscas/mês', numeric: true },
  { key: 'ctr', header: 'CTR (%)', numeric: true },
];

export default function Demo() {
  return (
    <Stack>
      <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
        <DataTable columns={columns} data={[]} loading loadingRows={4} />
        <DataTable columns={columns} data={[]} />
      </SimpleGrid>
      <DataTable
        columns={columns}
        data={[]}
        empty={
          <EmptyState
            py="lg"
            size="sm"
            icon={<IconSearchOff size={22} />}
            title="Nenhuma palavra-chave"
            description="Tente outro período."
          >
            <Button size="xs" variant="outline">Limpar filtros</Button>
          </EmptyState>
        }
      />
    </Stack>
  );
}
