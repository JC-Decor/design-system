import { Disclaimer, Headline, Kicker, Stack, Subheadline } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap={6}>
      <Kicker>Comunicados · RH</Kicker>
      <Headline size="lg">Novo calendário de férias coletivas</Headline>
      <Subheadline c="var(--ds-text-2)" maw={560}>
        As férias coletivas de fim de ano vão de 22/12 a 02/01. Quem tiver saldo inferior a 10 dias deve falar com o gestor até 30/11.
      </Subheadline>
      <Disclaimer mt={4}>Publicado por Equipe Pessoas · visível para todos os colaboradores</Disclaimer>
    </Stack>
  );
}
