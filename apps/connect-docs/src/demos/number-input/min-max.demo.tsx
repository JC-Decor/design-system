import { NumberInput, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <NumberInput
        label="Dias de férias"
        description="Mínimo de 5 dias por período · saldo de 30"
        min={5}
        max={30}
        clampBehavior="strict"
        allowDecimal={false}
        defaultValue={15}
      />
      <NumberInput label="Abono pecuniário" suffix=" dias" min={0} max={10} defaultValue={12} error="O abono é de no máximo 10 dias" />
      <NumberInput label="Sem controles" hideControls placeholder="Horas a compensar" />
      <NumberInput label="Desabilitado" suffix=" h" defaultValue={8} disabled />
    </SimpleGrid>
  );
}
