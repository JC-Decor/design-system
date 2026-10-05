import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

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
          —{' '}
          <OnlyFor framework="react">
            controle <code>period</code> e troque os dados em <code>onPeriodChange</code>.
          </OnlyFor>
          <OnlyFor framework="vue">
            ligue o período com <code>v-model:period</code> e derive os dados com{' '}
            <code>computed</code>.
          </OnlyFor>{' '}
          O total em destaque é recalculado a cada período.
        </P>
        <Demo id="chart-card/usage" />
      </Section>

      <Section title="Ações">
        <P>
          <OnlyFor framework="react">
            <code>actions</code> recebe qualquer elemento
          </OnlyFor>
          <OnlyFor framework="vue">
            O slot <code>#actions</code> recebe qualquer conteúdo
          </OnlyFor>{' '}
          à direita do cabeçalho — menus de exportação, links “ver mais”…
        </P>
        <Demo id="chart-card/actions" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'title',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #title',
              required: true,
              description: 'Título do card.',
            },
            {
              name: 'children',
              vueName: 'slot padrão',
              type: 'ReactNode',
              vueType: 'slot',
              required: true,
              description: 'O gráfico.',
            },
            {
              name: 'kicker',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #kicker',
              description: 'Rótulo em caixa-alta acima do título.',
            },
            {
              name: 'description',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #description',
              description: 'Texto de apoio abaixo do título.',
            },
            {
              name: 'value',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #value',
              description: 'Valor em destaque (ex.: total do período).',
            },
            {
              name: 'periods',
              type: 'string[]',
              description: "Opções de período (ex.: ['7d', '30d', '90d']).",
            },
            {
              name: 'period',
              vueName: 'v-model:period',
              type: 'string',
              description: 'Período selecionado.',
            },
            {
              name: 'onPeriodChange',
              vueName: '@period-change',
              type: '(period: string) => void',
              description: 'Chamado ao trocar o período.',
              vueDescription: 'Emitido ao trocar o período (além de update:period).',
            },
            {
              name: 'actions',
              vueName: '#actions',
              type: 'ReactNode',
              vueType: 'slot',
              description: 'Ações extras no cabeçalho.',
            },
          ]}
        />
        <P>
          Aceita também as props de <code>Card</code> do Mantine.
        </P>
      </Section>
    </DocPage>
  );
}
