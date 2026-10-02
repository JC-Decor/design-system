import { SegmentedControl, Stack } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack w="100%">
      <SegmentedControl fullWidth data={['Entrega', 'Retirada na loja']} defaultValue="Entrega" />
      <SegmentedControl color="horizon" data={['Mensal', 'Anual']} defaultValue="Anual" w="fit-content" />
      <SegmentedControl size="sm" data={['P', 'M', 'G', 'GG']} defaultValue="M" w="fit-content" />
      <SegmentedControl
        data={[
          { value: 'pix', label: 'Pix' },
          { value: 'cartao', label: 'Cartão' },
          { value: 'boleto', label: 'Boleto', disabled: true },
        ]}
        defaultValue="pix"
        w="fit-content"
      />
    </Stack>
  );
}
