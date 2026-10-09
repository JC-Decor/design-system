import { SimpleGrid, TextInput } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <TextInput
        label="E-mail"
        description="Enviaremos a nota fiscal para este endereço"
        placeholder="voce@email.com"
        withAsterisk
      />
      <TextInput label="Nome completo" defaultValue="Ma" error="Informe nome e sobrenome" />
      <TextInput label="Código do pedido" defaultValue="#10482" disabled />
      <TextInput label="Loja de retirada" defaultValue="JC Decor · Moema" readOnly />
    </SimpleGrid>
  );
}
