import { Button, Paper, Text, Kicker } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Paper withBorder radius="lg" p="var(--sp-22)" maw={380}>
      <Kicker>Banco de horas</Kicker>
      <Text fw={700} fz="lg" mt="var(--sp-4)">
        Saldo positivo de 12h30
      </Text>
      <Text c="var(--ds-text-2)" fz="sm" mt="var(--sp-12)">
        As horas extras de outubro já foram compensadas. O próximo fechamento é em 30/11.
      </Text>
      <Button mt="var(--sp-20)" size="sm">
        Ver extrato
      </Button>
    </Paper>
  );
}
