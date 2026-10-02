import { FileInput, SimpleGrid } from '@jcdecor/ui';
import { IconFileInvoice } from '@tabler/icons-react';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <FileInput label="Nota fiscal" placeholder="Anexar XML" accept=".xml" leftSection={<IconFileInvoice size={16} />} withAsterisk />
      <FileInput label="Comprovante" placeholder="Anexar arquivo" error="Envie o comprovante de pagamento" />
      <FileInput label="Contrato" placeholder="Bloqueado após assinatura" disabled />
    </SimpleGrid>
  );
}
