import { Icon, SimpleGrid, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <TextInput label="Buscar" leftSection={<Icon name="search" size={16} />} placeholder="Nome, cargo, equipe…" />
      <TextInput label="E-mail corporativo" leftSection={<Icon name="send" size={16} />} placeholder="nome@empresa.com.br" type="email" />
      <TextInput label="Matrícula" leftSection={<Icon name="hash" size={16} />} rightSection={<Icon name="user" size={16} />} placeholder="000482" />
    </SimpleGrid>
  );
}
