import { MaskInput, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <MaskInput
        label="Código do treinamento"
        description="Duas letras + 4 números (ex.: NR-0035)"
        mask="AA-9999"
        transform={(char) => char.toUpperCase()}
        placeholder="NR-0000"
      />
      <MaskInput
        label="Placa do veículo"
        description="Cadastro do estacionamento · padrão Mercosul"
        mask="AAA-9*99"
        transform={(char) => char.toUpperCase()}
        placeholder="ABC-1D23"
      />
    </SimpleGrid>
  );
}
