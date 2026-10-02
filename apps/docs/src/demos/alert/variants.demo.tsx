import { Alert, SimpleGrid } from '@jcdecor/ui';
import { IconInfoCircle } from '@tabler/icons-react';

const variants = ['light', 'filled', 'outline', 'default', 'transparent'] as const;

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
      {variants.map((variant) => (
        <Alert key={variant} variant={variant} color="horizon" title={`variant="${variant}"`} icon={<IconInfoCircle />}>
          Frete grátis para o Sudeste acima de R$ 499.
        </Alert>
      ))}
    </SimpleGrid>
  );
}
