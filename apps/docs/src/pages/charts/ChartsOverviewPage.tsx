import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

export default function ChartsOverviewPage() {
  return (
    <DocPage
      kicker="Gráficos"
      title="Visão geral"
      source="charts"
      sourcePath="packages/ui/src/charts"
      description="Wrappers finos do @mantine/charts com os padrões JC Decor: paleta da marca aplicada automaticamente, números em pt-BR e curvas suaves."
      importCode={`import { LineChart, AreaChart, BarChart, DonutChart, PieChart, Sparkline, ChartCard } from '@jcdecor/ui/charts';`}
    >
      <Section title="Instalação">
        <P>
          O módulo de gráficos é opcional e depende do <code>@mantine/charts</code> e do{' '}
          <code>recharts</code>, que devem ser instalados no projeto. Importe o CSS do Mantine
          Charts uma vez, junto com os demais estilos.
        </P>
        <CodeBlock language="bash" code="npm install @mantine/charts recharts" />
        <CodeBlock
          code={`import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@jcdecor/ui/styles.css';`}
        />
      </Section>

      <Section title="Uso">
        <P>
          Basta informar <code>data</code>, <code>dataKey</code> e <code>series</code>. Séries{' '}
          <b>sem</b> <code>color</code> recebem a paleta da marca na ordem; o tooltip e os eixos já
          saem formatados em pt-BR (<code>54.959</code>, <code>1.618,2</code>).
        </P>
        <Demo id="charts/usage" />
      </Section>

      <Section title="Paleta da marca">
        <P>
          A ordem abaixo (<code>chartPalette</code>) é aplicada às séries que não definem{' '}
          <code>color</code> e cicla depois da 8ª. Use <code>paletteColor(i)</code> para pegar a cor
          de uma série em legendas próprias e <code>withPalette(items)</code> para preencher uma
          lista.
        </P>
        <Demo id="charts/palette" />
      </Section>

      <Section title="Sobrescrevendo os padrões">
        <P>
          Todas as props do <code>@mantine/charts</code> continuam funcionando e têm prioridade
          sobre os padrões JC: <code>color</code> por série, <code>curveType</code>,{' '}
          <code>valueFormatter</code>, <code>strokeDasharray</code>, <code>referenceLines</code>,
          eixos etc. Consulte a{' '}
          <a href="https://mantine.dev/charts/getting-started/" target="_blank" rel="noreferrer">
            documentação do Mantine Charts
          </a>
          .
        </P>
        <Demo id="charts/override" />
      </Section>

      <Section title="O que muda em relação ao Mantine">
        <PropsTable
          rows={[
            {
              name: 'series[].color',
              type: 'MantineColor (opcional)',
              default: 'chartPalette[i]',
              description: 'Cor da série; se omitida, vem da paleta da marca.',
            },
            {
              name: 'data[].color',
              type: 'MantineColor (opcional)',
              default: 'chartPalette[i]',
              description: 'DonutChart e PieChart: cor da fatia.',
            },
            {
              name: 'valueFormatter',
              type: '(value: number) => string',
              default: 'ptBRValueFormatter',
              description: 'Números em pt-BR em tooltips e rótulos.',
            },
            {
              name: 'h',
              type: 'number',
              default: '280',
              description:
                'Altura padrão (Line/Area/Bar/Composite); 300 no Radar; 48 no Sparkline.',
            },
            {
              name: 'curveType',
              type: 'string',
              default: "'monotone'",
              description: 'Curvas suaves em Line, Area, Composite e Sparkline.',
            },
            {
              name: 'gridAxis',
              type: "'x' | 'y' | 'xy' | 'none'",
              default: "'y'",
              description: 'Eixo das linhas de grade (repassado ao Mantine).',
            },
          ]}
        />
        <P>
          Também são reexportados, sem alterações: <code>CompositeChart</code>,{' '}
          <code>RadarChart</code> (com paleta), <code>ScatterChart</code>, <code>BubbleChart</code>,{' '}
          <code>FunnelChart</code>, <code>Heatmap</code>, <code>BarsList</code>,{' '}
          <code>RadialBarChart</code>, <code>ChartTooltip</code> e <code>ChartLegend</code>.
        </P>
      </Section>
    </DocPage>
  );
}
