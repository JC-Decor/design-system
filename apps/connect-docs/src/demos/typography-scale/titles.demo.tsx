import { Stack, Title } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="sm">
      <Title order={1}>Painel do Colaborador</Title>
      <Title order={2}>Minha equipe</Title>
      <Title order={3}>Aprovar férias de Mariana?</Title>
      <Title order={4}>Banco de horas</Title>
      <Title order={5}>Feedbacks 1:1</Title>
      <Title order={6}>Documentos pendentes</Title>
    </Stack>
  );
}
