import { MaskInput, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <MaskInput label="CPF" mask="999.999.999-99" placeholder="000.000.000-00" inputMode="numeric" />
      <MaskInput label="PIS/PASEP" mask="999.99999.99-9" placeholder="000.00000.00-0" inputMode="numeric" />
      <MaskInput label="CEP do endereço" mask="99999-999" placeholder="00000-000" inputMode="numeric" />
      <MaskInput label="Data de admissão" mask="99/99/9999" placeholder="dd/mm/aaaa" inputMode="numeric" />
    </SimpleGrid>
  );
}
