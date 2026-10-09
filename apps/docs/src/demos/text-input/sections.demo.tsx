import { SimpleGrid, TextInput } from '@jcdecor/ui';
import { IconAt, IconSearch, IconTicket } from '@tabler/icons-react';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <TextInput label="Buscar" leftSection={<IconSearch size={16} />} placeholder="Piso, cortina, papel…" />
      <TextInput label="E-mail" leftSection={<IconAt size={16} />} placeholder="seu@email.com" type="email" />
      <TextInput label="Cupom" leftSection={<IconTicket size={16} />} rightSection="%" placeholder="JCDECOR10" />
    </SimpleGrid>
  );
}
