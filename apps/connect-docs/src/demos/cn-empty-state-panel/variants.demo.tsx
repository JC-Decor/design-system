import { EmptyStatePanel, SimpleGrid, Stack } from '@jcdecor/connect-ui';

const variants = ['empty', 'no-results', 'error', 'permission', 'building'] as const;

export default function Demo() {
  return (
    <Stack gap="lg">
      <SimpleGrid type="container" cols={{ base: 1, '640px': 2 }}>
        {variants.map((variant) => (
          <EmptyStatePanel key={variant} variant={variant} compact />
        ))}
      </SimpleGrid>
      {/* Layout simples: ícone da variante, sem ilustração */}
      <SimpleGrid type="container" cols={{ base: 1, '640px': 2 }}>
        <EmptyStatePanel variant="no-results" illustration={false} />
        <EmptyStatePanel variant="permission" illustration={false} />
      </SimpleGrid>
    </Stack>
  );
}
