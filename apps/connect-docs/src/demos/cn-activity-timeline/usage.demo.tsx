import { ActivityTimeline, Card, CardHeader } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 560, centered: true };

const eventos = [
  { when: 'Hoje, 09:42', who: { seed: 'MS', tone: 'green', name: 'Marina Souza' }, what: 'teve a solicitação de férias', to: 'Aprovada', by: 'Carlos Lima', tone: 'green' },
  { when: 'Ontem, 17:10', who: { seed: 'RM', tone: 'lavender', name: 'Rafael Moura' }, what: 'mudou de etapa no onboarding para', to: 'Documentação', by: 'RH', tone: 'lavender' },
  { when: '12/10, 14:05', who: { seed: 'JL', tone: 'yellow', name: 'Júlia Lima' }, what: 'teve o ajuste de ponto', to: 'Em análise', by: 'Sistema', tone: 'yellow' },
  { when: '10/10, 08:30', who: { seed: 'TN', tone: 'coral', name: 'Tiago Nunes' }, what: 'teve o desligamento marcado como', to: 'Urgente', by: 'Beatriz Prado', tone: 'coral' },
  { when: '08/10, 11:00', who: { seed: 'AS', tone: 'blue', name: 'Ana Souza' }, what: 'recebeu o comunicado', to: 'Lido', by: 'Comunicação', tone: 'blue' },
] as const;

export default function Demo() {
  return (
    <Card>
      <CardHeader title="Atividade recente" sub="Movimentações da sua equipe" mb="md" />
      <ActivityTimeline events={[...eventos]} />
    </Card>
  );
}
