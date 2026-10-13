import { EmptyStatePanel, SimpleGrid } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

const variants = ['empty', 'no-results', 'error', 'permission', 'building'] as const;

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
      {variants.map((variant) => (
        <EmptyStatePanel key={variant} variant={variant} />
      ))}
    </SimpleGrid>
  );
}
