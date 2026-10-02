import { NumberInput, SimpleGrid } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <NumberInput
        label="Quantidade de caixas"
        description="Cada caixa cobre 2,2 m² · máximo de 20 por pedido"
        min={1}
        max={20}
        clampBehavior="strict"
        allowDecimal={false}
        defaultValue={4}
      />
      <NumberInput label="Rolos de papel de parede" min={1} max={10} defaultValue={12} error="Temos apenas 10 rolos em estoque" />
      <NumberInput label="Sem controles" hideControls placeholder="Digite um valor" />
      <NumberInput label="Desabilitado" defaultValue={3} disabled />
    </SimpleGrid>
  );
}
