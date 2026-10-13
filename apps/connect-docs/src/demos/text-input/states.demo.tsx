import { SimpleGrid, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <TextInput
        label="E-mail corporativo"
        description="Usado para login e para receber comunicados"
        placeholder="nome@empresa.com.br"
        withAsterisk
      />
      <TextInput label="Nome completo" defaultValue="Ma" error="Informe nome e sobrenome" />
      <TextInput label="Matrícula" defaultValue="000482" disabled />
      <TextInput label="Gestor direto" defaultValue="Rafael Souza · Comercial" readOnly />
    </SimpleGrid>
  );
}
