import { Checkbox, FormGrid, TextInput, Textarea } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <FormGrid>
      <TextInput label="Nome" />
      <TextInput label="E-mail" type="email" />
      <TextInput label="Data de início" type="date" />
      <Textarea label="Observações" autosize minRows={3} />
      <Checkbox label="Enviar convite por e-mail" data-span="auto" />
    </FormGrid>
  );
}
