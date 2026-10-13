import { SimpleGrid, Select } from '@jcdecor/connect-ui';

const data = ['Pessoas & Cultura', 'Tecnologia', 'Financeiro'];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }}>
      <Select label="Padrão" placeholder="Selecione" data={data} description="Departamento de lotação" />
      <Select label="Com erro" placeholder="Selecione" data={data} error="Escolha um departamento" withAsterisk />
      <Select label="Desabilitado" placeholder="Selecione" data={data} defaultValue="Financeiro" disabled />
    </SimpleGrid>
  );
}
