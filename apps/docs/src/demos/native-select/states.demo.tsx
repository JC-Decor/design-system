import { NativeSelect, SimpleGrid } from '@jcdecor/ui';
import { IconArrowsSort } from '@tabler/icons-react';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <NativeSelect
        label="Ordenar por"
        leftSection={<IconArrowsSort size={16} />}
        data={['Relevância', 'Menor preço', 'Maior preço', 'Lançamentos']}
      />
      <NativeSelect label="Parcelas" data={['Selecione', '1x sem juros', '3x sem juros', '6x sem juros']} error="Escolha o número de parcelas" />
      <NativeSelect label="Transportadora" data={['Correios']} disabled />
    </SimpleGrid>
  );
}
