import { Button, Group, Select, TextInput } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Group align="flex-end" gap="sm">
      <TextInput label="Nome do produto" placeholder="Ex.: Piso vinílico" w={220} />
      <Select label="Categoria" data={['Pisos', 'Tecidos', 'Cortinas']} defaultValue="Pisos" allowDeselect={false} w={160} />
      <Button>Buscar</Button>
    </Group>
  );
}
