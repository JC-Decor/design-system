import { Fieldset, SimpleGrid, TextInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 560 };

export default function Demo() {
  return (
    <Fieldset legend="Dados pessoais" w="100%">
      <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }}>
        <TextInput label="Nome" placeholder="Mariana" />
        <TextInput label="Sobrenome" placeholder="Costa" />
      </SimpleGrid>
      <TextInput label="E-mail pessoal" placeholder="mariana@email.com" mt="md" />
    </Fieldset>
  );
}
