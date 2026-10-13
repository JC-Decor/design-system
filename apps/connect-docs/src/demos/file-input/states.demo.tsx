import { FileInput, Icon, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <FileInput label="Certificado do treinamento" placeholder="Anexar PDF" accept=".pdf" leftSection={<Icon name="award" size={16} />} withAsterisk />
      <FileInput label="Comprovante de residência" placeholder="Anexar arquivo" error="Envie um comprovante dos últimos 3 meses" />
      <FileInput label="Contrato de trabalho" placeholder="Bloqueado após assinatura" disabled />
    </SimpleGrid>
  );
}
