import { Alert, Icon, SimpleGrid } from '@jcdecor/connect-ui';

const variants = ['light', 'filled', 'outline', 'default', 'transparent'] as const;

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
      {variants.map((variant) => (
        <Alert key={variant} variant={variant} color="navy" title={`variant="${variant}"`} icon={<Icon name="megaphone" />}>
          O ciclo de avaliação de desempenho começa em 1º de novembro.
        </Alert>
      ))}
    </SimpleGrid>
  );
}
