import { SimpleGrid, Textarea } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <Textarea label="Redimensionável" placeholder="Arraste o canto" resize="vertical" minRows={3} />
      <Textarea label="Com erro" defaultValue="ok" error="Descreva o problema com mais detalhes" />
      <Textarea label="Desabilitado" defaultValue="Pedido já faturado" disabled />
    </SimpleGrid>
  );
}
