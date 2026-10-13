import { Fieldset, SimpleGrid, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '720px': 3 }} w="100%">
      {(['default', 'filled', 'unstyled'] as const).map((variant) => (
        <Fieldset key={variant} legend={`Variante ${variant}`} variant={variant}>
          <TextInput label="Cargo" placeholder="Analista de RH" />
        </Fieldset>
      ))}
    </SimpleGrid>
  );
}
