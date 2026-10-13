import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function MetricRevealCardPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="MetricRevealCard"
      source="connect"
      sourcePath="packages/connect-ui/src/components/MetricRevealCard"
      description="Card de métrica que revela um detalhe ao clicar: rótulo, valor 28px, descrição, selo informativo e tendência."
      importCode={`import { MetricRevealCard } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>Com <code>children</code> o card vira um botão com <code>aria-expanded</code>; só com <code>onClick</code> é um botão simples; sem nenhum dos dois é estático.</P>
        <Demo id="cn-metric-reveal-card/usage" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', required: true, description: 'Rótulo.' },
            { name: 'value', type: 'ReactNode', required: true, description: 'Valor.' },
            { name: 'description', type: 'ReactNode', description: 'Linha de apoio.' },
            { name: 'status', type: 'ReactNode', description: 'Selo info.' },
            { name: 'trend', type: 'ReactNode', description: 'Tendência.' },
            { name: 'children', type: 'ReactNode', description: 'Detalhe revelado.' },
            { name: 'onClick', type: '() => void', description: 'Clique.' },
            { name: 'expandable', type: 'boolean', default: 'true com children', description: 'Permite revelar.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
