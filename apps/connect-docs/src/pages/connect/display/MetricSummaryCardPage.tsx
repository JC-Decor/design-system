import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { MetricSummaryCard } from '@jcdecor/connect-ui';

export default function MetricSummaryCardPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="MetricSummaryCard"
      source="connect"
      sourcePath="packages/connect-ui/src/components/MetricSummaryCard"
      description="Pílula-resumo de métrica (.sumpill): ícone tonal, rótulo e valor com complemento. Usada em faixas de 3 a 4 indicadores no topo das telas."
      importCode={`import { MetricSummaryCard } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={MetricSummaryCard}
          name="MetricSummaryCard"
          previewWidth={300}
          controls={[
            { prop: 'tone', type: 'color', data: ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'], initialValue: 'blue' },
            { prop: 'icon', type: 'select', data: ['users', 'clock', 'palm', 'doc', 'target', 'briefcase'], initialValue: 'users' },
            { prop: 'label', type: 'string', initialValue: 'Colaboradores' },
            { prop: 'value', type: 'string', initialValue: '248' },
            { prop: 'sub', type: 'string', initialValue: '+3 no mês' },
          ]}
        />
      </Section>
      <Section title="Tons">
        <Demo id="cn-metric-summary-card/tones" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'tone', type: 'ToneName', default: "'blue'", description: 'Cor do ícone.' },
            { name: 'icon', type: 'string', required: true, description: 'Ícone do Connect.' },
            { name: 'label', type: 'ReactNode', required: true, description: 'Rótulo.' },
            { name: 'value', type: 'ReactNode', required: true, description: 'Valor.' },
            { name: 'sub', type: 'ReactNode', description: 'Complemento ao lado do valor.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props; <code>sub</code> agora é opcional e <code>label/value/sub</code> aceitam nós.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
