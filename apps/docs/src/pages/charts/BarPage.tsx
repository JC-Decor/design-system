import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function BarPage() {
  return (
    <DocPage
      kicker="Gráficos"
      title="BarChart"
      source="charts"
      sourcePath="packages/ui/src/charts/charts.tsx"
      description="Comparações entre períodos e categorias. Barras com cantos arredondados e paleta da marca."
      importCode={`import { BarChart } from '@jcdecor/ui/charts';`}
    >
      <Section title="Uso">
        <P>Vendas mensais de 2025 vs. 2026 (R$), séries lado a lado.</P>
        <Demo id="bar/usage" />
      </Section>

      <Section title="Empilhado">
        <P>
          <code>type="stacked"</code> empilha a receita por categoria — cada categoria recebe uma
          cor da paleta.
        </P>
        <Demo id="bar/stacked" />
      </Section>

      <Section title="Horizontal">
        <P>
          <code>orientation="vertical"</code> desenha barras horizontais, melhor para rótulos
          longos.{' '}
          <OnlyFor framework="react">
            Ajuste a largura do eixo com <code>yAxisProps</code>.
          </OnlyFor>
          <OnlyFor framework="vue">O eixo se ajusta sozinho à largura dos rótulos.</OnlyFor>
        </P>
        <Demo id="bar/horizontal" />
      </Section>

      <Section title="Percentual">
        <P>
          <code>type="percent"</code> normaliza cada barra para 100%.
        </P>
        <Demo id="bar/percent" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'data',
              type: 'Record<string, any>[]',
              required: true,
              description: 'Linhas de dados.',
            },
            {
              name: 'dataKey',
              type: 'string',
              required: true,
              description: 'Campo das categorias.',
            },
            {
              name: 'series',
              type: '{ name; label?; color?; stackId? }[]',
              required: true,
              description: 'Séries; color é opcional (paleta JC).',
            },
            {
              name: 'type',
              type: "'default' | 'stacked' | 'percent' | 'waterfall'",
              default: "'default'",
              description: 'Modo de agrupamento (Mantine).',
            },
            {
              name: 'orientation',
              type: "'horizontal' | 'vertical'",
              default: "'horizontal'",
              description: "'vertical' = barras horizontais (Mantine).",
            },
            {
              name: 'h',
              vueName: 'height',
              type: 'number | string',
              default: '280',
              description: 'Altura do gráfico.',
              vueDescription: 'Altura do gráfico (h é aceito como alias).',
            },
            {
              name: 'gridAxis',
              type: "'x' | 'y' | 'xy' | 'none'",
              default: "'y'",
              description: 'Linhas de grade.',
              only: 'react',
            },
            {
              name: 'barProps',
              type: 'BarProps',
              default: '{ radius: 4 }',
              description: 'Props do Bar do recharts.',
              vueType: 'ChartOptionProps | ((series) => ChartOptionProps)',
              vueDescription:
                'Opções da série bar do ECharts; radius (ou borderRadius) define o raio da ponta (0 em stacked/percent).',
            },
            {
              name: 'valueFormatter',
              type: '(value: number) => string',
              default: 'ptBRValueFormatter',
              description: 'Formatação dos valores.',
              vueDescription: 'Formatação dos valores no tooltip e no eixo de valores.',
            },
          ]}
        />
      </Section>
    </DocPage>
  );
}
