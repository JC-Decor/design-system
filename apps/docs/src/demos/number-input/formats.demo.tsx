import { NumberInput, SimpleGrid } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <NumberInput
        label="Área do ambiente"
        placeholder="0,00 m²"
        suffix=" m²"
        decimalScale={2}
        decimalSeparator=","
        min={0}
        defaultValue={18.5}
      />
      <NumberInput
        label="Preço por m²"
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        decimalSeparator=","
        thousandSeparator="."
        defaultValue={1289.9}
      />
      <NumberInput label="Largura da cortina" suffix=" m" decimalScale={2} decimalSeparator="," step={0.1} min={0.5} max={8} defaultValue={2.4} />
    </SimpleGrid>
  );
}
