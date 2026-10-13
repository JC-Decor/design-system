import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ActivityTimelinePage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="ActivityTimeline"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ActivityTimeline"
      description="Linha do tempo de atividades: avatar da pessoa, frase com o novo estado num selo de prioridade e metadados em mono (quando · por quem)."
      importCode={`import { ActivityTimeline } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>O <code>tone</code> do evento escolhe a cor do selo: coral = alta, yellow = média, green = baixa, blue/lavender = info. Renderiza uma lista ordenada (<code>&lt;ol&gt;</code>).</P>
        <Demo id="cn-activity-timeline/usage" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'events', type: 'ActivityTimelineEvent[]', required: true, description: '{ when, who: { seed, tone, name, src? }, what, to, by, tone }' },
            { name: 'avatarSize', type: 'number', default: '36', description: 'Diâmetro dos avatares.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;Timeline events /&gt;</code> → <code>&lt;ActivityTimeline events /&gt;</code> (<code>Timeline</code> é do Mantine — use-o para linhas do tempo genéricas). O tipo <code>TimelineEvent</code> virou <code>ActivityTimelineEvent</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
