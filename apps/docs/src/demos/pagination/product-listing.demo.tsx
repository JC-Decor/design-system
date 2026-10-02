import { useState } from 'react';
import { Group, Pagination, Text } from '@jcdecor/ui';

const total = 248;
const perPage = 20;

export default function Demo() {
  const [page, setPage] = useState(1);
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);

  return (
    <Group justify="space-between" w="100%">
      <Text fz="sm" c="var(--ds-text-3)">
        Mostrando {start}–{end} de {total} produtos
      </Text>
      <Pagination total={Math.ceil(total / perPage)} value={page} onChange={setPage} size="sm" />
    </Group>
  );
}
