import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function SparklinePage() {
  return (
    <DocPage
      kicker="Gráficos"
      title="Sparkline"
      source="charts"
      sourcePath="packages/ui/src/charts/charts.tsx"
      description="Mini-gráfico de tendência, sem eixos — para KPIs, tabelas e listas."
      importCode={`import { Sparkline } from '@jcdecor/ui/charts';`}
    >
      <Section title="Uso">
        <P>
          <code>data</code> é um array de números. Altura padrão de 48px e cor da 1ª série da paleta
          (horizon).
        </P>
        <Demo id="sparkline/usage" />
      </Section>

      <Section title="Cores">
        <Demo id="sparkline/colors" />
      </Section>

      <Section title="Cor pela tendência">
        <P>
          <code>trendColors</code> escolhe a cor comparando o primeiro e o último valor: alta, queda
          ou estável.
        </P>
        <Demo id="sparkline/trend" />
      </Section>

      <Section title="Em tabelas">
        <P>
          Dentro de um <code>DataTable</code>, use <code>render</code> na coluna. Para KPIs, passe o
          Sparkline no slot <code>chart</code> do <code>KpiCard</code>.
        </P>
        <Demo id="sparkline/table" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'data',
              type: '(number | null)[]',
              required: true,
              description: 'Valores da série.',
            },
            {
              name: 'color',
              type: 'MantineColor',
              default: "chartPalette[0]",
              description: 'Cor da linha e do preenchimento.',
            },
            { name: 'h', type: 'number | string', default: '48', description: 'Altura.' },
            {
              name: 'curveType',
              type: 'AreaChartCurveType',
              default: "'monotone'",
              description: 'Tipo de curva.',
            },
            {
              name: 'fillOpacity',
              type: 'number',
              default: '0.3',
              description: 'Opacidade do preenchimento.',
            },
            {
              name: 'strokeWidth',
              type: 'number',
              default: '2',
              description: 'Espessura da linha.',
            },
            {
              name: 'withGradient',
              type: 'boolean',
              default: 'true',
              description: 'Preenchimento em degradê (Mantine).',
            },
            {
              name: 'trendColors',
              type: '{ positive; negative; neutral? }',
              description: 'Cor pela tendência (Mantine).',
            },
          ]}
        />
      </Section>
    </DocPage>
  );
}
