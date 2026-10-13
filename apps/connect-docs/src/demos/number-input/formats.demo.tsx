import { NumberInput, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <NumberInput
        label="Salário base"
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        decimalSeparator=","
        thousandSeparator="."
        defaultValue={4850}
      />
      <NumberInput label="Carga horária semanal" suffix=" h" min={0} max={44} allowDecimal={false} defaultValue={44} />
      <NumberInput label="Adicional de hora extra" suffix="%" decimalScale={1} decimalSeparator="," step={5} min={50} max={100} defaultValue={50} />
    </SimpleGrid>
  );
}
