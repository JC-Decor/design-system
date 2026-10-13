import { Display, Kicker, Subheadline, Disclaimer, Button, Group, Stack, Icon } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="xs" maw={640}>
      <Kicker>Segunda, 13 de outubro</Kicker>
      <Display size="sm">Bom dia, Rafael</Display>
      <Subheadline size="lg" c="var(--ds-text-2)">
        Você tem 3 solicitações de férias para aprovar e 2 feedbacks 1:1 agendados esta semana.
      </Subheadline>
      <Group mt="sm">
        <Button leftSection={<Icon name="check" size={16} />}>Ver pendências</Button>
        <Button variant="ghost">Abrir agenda</Button>
      </Group>
      <Disclaimer mt="xs">Dados atualizados há 5 minutos.</Disclaimer>
    </Stack>
  );
}
