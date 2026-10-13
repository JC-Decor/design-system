import { Button, Checkbox, Select, Stack, TextInput, Title } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stack gap="md" w="100%">
      <Title order={4}>Admissão de colaborador</Title>
      <TextInput label="Nome completo" placeholder="Como consta no documento" />
      <TextInput label="Cargo" placeholder="Ex.: Analista de RH" />
      <Select label="Equipe" placeholder="Selecione" data={['Comercial', 'Logística', 'Gente & Gestão', 'Financeiro']} />
      <Checkbox label="Enviar acesso ao Connect por e-mail" />
      <Button mt="xs">Cadastrar</Button>
    </Stack>
  );
}
