import { Fieldset, SimpleGrid, TextInput } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '720px': 3 }} w="100%">
      {(['default', 'filled', 'unstyled'] as const).map((variant) => (
        <Fieldset key={variant} legend={`Variante ${variant}`} variant={variant}>
          <TextInput label="CEP" placeholder="00000-000" />
        </Fieldset>
      ))}
    </SimpleGrid>
  );
}
