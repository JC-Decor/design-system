import { useState } from 'react';
import { Group, Pagination, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const total = 6;

export default function Demo() {
  const [page, setPage] = useState(2);

  return (
    <Pagination.Root total={total} value={page} onChange={setPage}>
      <Group gap="sm" justify="center">
        <Pagination.Previous />
        <Text fz="sm" c="var(--ds-text-2)" miw={120} ta="center">
          Página {page} de {total}
        </Text>
        <Pagination.Next />
      </Group>
    </Pagination.Root>
  );
}
