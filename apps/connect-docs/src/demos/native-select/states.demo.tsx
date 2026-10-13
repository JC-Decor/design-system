import { Icon, NativeSelect, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <NativeSelect
        label="Ordenar por"
        leftSection={<Icon name="sliders" size={16} />}
        data={['Nome', 'Data de admissão', 'Departamento', 'Cargo']}
      />
      <NativeSelect label="Tipo de ausência" data={['Selecione', 'Atestado médico', 'Licença', 'Folga compensada']} error="Escolha o tipo de ausência" />
      <NativeSelect label="Regime de contratação" data={['CLT']} disabled />
    </SimpleGrid>
  );
}
