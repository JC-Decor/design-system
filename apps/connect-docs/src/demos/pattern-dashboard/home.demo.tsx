import { useState } from 'react';
import {
  ActivityTimeline,
  AlertsCard,
  AreaChart,
  Button,
  Card,
  CardHeader,
  ChartLegend,
  ConnectShell,
  GlobalSearchBox,
  HeaderAction,
  Icon,
  KpiCard,
  QuickActions,
  SimpleGrid,
  Stack,
  type Perspective,
} from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const perspective: Perspective = {
  key: 'gestor',
  label: 'Visão gestor',
  user: { name: 'Carlos Lima', role: 'Gerente de Operações', seed: 'CL', tone: 'blue' },
  nav: {
    primary: [
      { key: 'home', icon: 'home', label: 'Início' },
      { key: 'equipe', icon: 'users', label: 'Minha equipe' },
      { key: 'ferias', icon: 'palm', label: 'Férias', badge: 2 },
      { key: 'metas', icon: 'target', label: 'Metas' },
      { key: 'docs', icon: 'doc', label: 'Documentos' },
    ],
    secondary: [{ key: 'ajuda', icon: 'help', label: 'Ajuda' }],
  },
};

const movimento = [
  { m: 'Mai', extras: 132, faltas: 22 },
  { m: 'Jun', extras: 176, faltas: 30 },
  { m: 'Jul', extras: 150, faltas: 18 },
  { m: 'Ago', extras: 120, faltas: 26 },
  { m: 'Set', extras: 98, faltas: 20 },
  { m: 'Out', extras: 110, faltas: 14 },
];

const eventos = [
  { when: 'Hoje, 09:42', who: { seed: 'MS', tone: 'green', name: 'Marina Souza' }, what: 'teve a solicitação de férias', to: 'Aprovada', by: 'Carlos Lima', tone: 'green' },
  { when: 'Ontem, 17:10', who: { seed: 'RM', tone: 'lavender', name: 'Rafael Moura' }, what: 'mudou de etapa no onboarding para', to: 'Documentação', by: 'RH', tone: 'lavender' },
  { when: '12/10, 14:05', who: { seed: 'JL', tone: 'yellow', name: 'Júlia Lima' }, what: 'teve o ajuste de ponto', to: 'Em análise', by: 'Sistema', tone: 'yellow' },
] as const;

export default function Demo() {
  const [active, setActive] = useState('home');

  return (
    <ConnectShell
      mode="static"
      h={1250}
      perspective={perspective}
      activeKey={active}
      onNavigate={setActive}
      headerTitle="Bom dia, Carlos"
      headerSubtitle="Segunda, 13 de outubro"
      headerProps={{
        search: <GlobalSearchBox />,
        actions: <HeaderAction icon="bell" label="Notificações" badge={4} />,
      }}
    >
      <Stack gap={20}>
        <SimpleGrid type="container" cols={{ base: 1, '440px': 2, '820px': 4 }} spacing={16}>
          <KpiCard kpi={{ label: 'Colaboradores ativos', value: '48', delta: '+3', deltaTone: 'pos', sub: 'no trimestre', tone: 'blue', icon: 'users' }} />
          <KpiCard kpi={{ label: 'Férias no mês', value: '6', delta: '2 pendentes', deltaTone: 'neu', tone: 'green', icon: 'palm' }} />
          <KpiCard kpi={{ label: 'Banco de horas', value: '312h', delta: '-8%', deltaTone: 'pos', sub: 'vs. set', tone: 'yellow', icon: 'clock', sparkData: [40, 38, 42, 35, 33, 31, 30] }} />
          <KpiCard kpi={{ label: 'Metas no prazo', value: '82%', delta: '+5 p.p.', deltaTone: 'pos', tone: 'lavender', icon: 'target', spark: 'wave' }} />
        </SimpleGrid>

        <SimpleGrid type="container" cols={{ base: 1, '720px': 2 }} spacing={20}>
          <Card>
            <CardHeader
              title="Horas extras × faltas"
              sub="Equipe de Operações · últimos 6 meses"
              mb={14}
              actions={<ChartLegend items={[{ label: 'Horas extras', color: 'var(--cn-chart-1)' }, { label: 'Faltas', dashed: true }]} />}
            />
            <AreaChart data={movimento} keys={['extras', 'faltas']} height={200} labels={[{ key: 'extras', text: 'Horas extras' }, { key: 'faltas', text: 'Faltas' }]} />
          </Card>
          <AlertsCard
            items={[
              { tone: 'high', icon: 'doc-clock', title: '3 ASOs vencem esta semana', desc: 'Agende os exames periódicos.', meta: 'Vence em 2 dias' },
              { tone: 'med', icon: 'palm', title: 'Férias vencidas de 2 colaboradores', desc: 'Programe antes do fim do período concessivo.' },
              { tone: 'info', icon: 'megaphone', title: 'Novo comunicado do RH', desc: 'Calendário de feriados 2027 publicado.' },
            ]}
          />
        </SimpleGrid>

        <SimpleGrid type="container" cols={{ base: 1, '720px': 2 }} spacing={20}>
          <Card>
            <CardHeader title="Atividade recente" sub="Movimentações da sua equipe" mb="md" actions={<Button variant="ghost" size="sm">Ver tudo</Button>} />
            <ActivityTimeline events={[...eventos]} />
          </Card>
          <Card>
            <CardHeader title="Atalhos" sub="O que você mais faz por aqui" mb="md" />
            <QuickActions
              layout="grid"
              items={[
                { icon: 'user-plus', title: 'Abrir vaga', desc: 'Inicie uma contratação', onClick: () => {} },
                { icon: 'chat', title: 'Feedback 1:1', desc: 'Registre a conversa', onClick: () => {} },
                { icon: 'palm', title: 'Aprovar férias', desc: '2 aguardando você', onClick: () => {} },
                { icon: 'target', title: 'Definir metas', desc: 'Ciclo do 4º trimestre', onClick: () => {} },
              ]}
            />
            <Button mt="md" variant="outline" leftSection={<Icon name="doc" size={15} />}>Exportar relatório da equipe</Button>
          </Card>
        </SimpleGrid>
      </Stack>
    </ConnectShell>
  );
}
