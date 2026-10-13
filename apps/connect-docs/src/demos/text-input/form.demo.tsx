import { Button, Group, Select, TextInput } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group align="flex-end" gap="sm">
      <TextInput label="Colaborador" placeholder="Nome ou matrícula" w={220} />
      <Select label="Departamento" data={['Comercial', 'Logística', 'RH']} defaultValue="Comercial" allowDeselect={false} w={160} />
      <Button>Filtrar</Button>
    </Group>
  );
}
