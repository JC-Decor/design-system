import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function ChartCardPage() {
  return (
    <DocPage
      kicker="Gráficos"
      title="ChartCard"
      source="charts"
      sourcePath="packages/ui/src/charts/ChartCard.tsx"
      description="Moldura padrão dos gráficos nos dashboards: kicker, título, valor em destaque, seletor de período e ações."
      importCode={`import { ChartCard } from '@jcdecor/ui/charts';`}
    >
      <Section title="Uso com períodos">
        <P>
          <code>periods</code> renderiza um <code>SegmentedControl</code>; o card não guarda estado
          — controle <code>period</code> e troque os dados em <code>onPeriodChange</code>. O total
          em destaque é recalculado a cada período.
        </P>
        <Demo id="chart-card/usage" />
      </Section>

      <Section title="Ações">
        <P>
          <code>actions</code> recebe qualquer elemento à direita do cabeçalho — menus de
          exportação, links “ver mais”…
        </P>
        <Demo id="chart-card/actions" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', required: true, description: 'Título do card.' },
            { name: 'children', type: 'ReactNode', required: true, description: 'O gráfico.' },
            {
              name: 'kicker',
              type: 'ReactNode',
              description: 'Rótulo em caixa-alta acima do título.',
            },
            {
              name: 'description',
              type: 'ReactNode',
              description: 'Texto de apoio abaixo do título.',
            },
            {
              name: 'value',
              type: 'ReactNode',
              description: 'Valor em destaque (ex.: total do período).',
            },
            {
              name: 'periods',
              type: 'string[]',
              description: "Opções de período (ex.: ['7d', '30d', '90d']).",
            },
            { name: 'period', type: 'string', description: 'Período selecionado.' },
            {
              name: 'onPeriodChange',
              type: '(period: string) => void',
              description: 'Chamado ao trocar o período.',
            },
            { name: 'actions', type: 'ReactNode', description: 'Ações extras no cabeçalho.' },
          ]}
        />
        <P>
          Aceita também as props de <code>Card</code> do Mantine.
        </P>
      </Section>
    </DocPage>
  );
}
