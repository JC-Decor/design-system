import { Fieldset, SimpleGrid, TextInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 560 };

export default function Demo() {
  return (
    <Fieldset legend="Dados pessoais" w="100%">
      <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
        <TextInput label="Nome" placeholder="Maria" />
        <TextInput label="Sobrenome" placeholder="Souza" />
      </SimpleGrid>
      <TextInput label="E-mail" placeholder="maria@email.com" mt="md" />
    </Fieldset>
  );
}
