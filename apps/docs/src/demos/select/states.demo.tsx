import { SimpleGrid, Select } from '@jcdecor/ui';

const data = ['Pisos vinílicos', 'Papel de parede', 'Carpetes'];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }}>
      <Select label="Padrão" placeholder="Selecione" data={data} description="Categoria principal" />
      <Select label="Com erro" placeholder="Selecione" data={data} error="Escolha uma categoria" withAsterisk />
      <Select label="Desabilitado" placeholder="Selecione" data={data} defaultValue="Carpetes" disabled />
    </SimpleGrid>
  );
}
