import { SegmentedControl, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack w="100%">
      <SegmentedControl fullWidth data={['Minhas solicitações', 'Da equipe']} defaultValue="Minhas solicitações" />
      <SegmentedControl color="navy" data={['Mensal', 'Anual']} defaultValue="Anual" w="fit-content" />
      <SegmentedControl size="sm" data={['P', 'M', 'G', 'GG']} defaultValue="M" w="fit-content" />
      <SegmentedControl
        data={[
          { value: 'presencial', label: 'Presencial' },
          { value: 'hibrido', label: 'Híbrido' },
          { value: 'remoto', label: 'Remoto', disabled: true },
        ]}
        defaultValue="hibrido"
        w="fit-content"
      />
    </Stack>
  );
}
