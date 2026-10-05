import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

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
        <OnlyFor framework="react">
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
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>
            O módulo de gráficos é opcional e usa o <code>@mantine-vue/charts</code>, que desenha com
            o Apache ECharts (canvas). Instale-o junto com o <code>echarts</code> e o{' '}
            <code>vue-echarts</code>; não há CSS extra além dos estilos já importados.
          </P>
          <CodeBlock language="bash" code="npm install @mantine-vue/charts echarts vue-echarts" />
          <P>
            Como o canvas não lê variáveis CSS, os wrappers convertem todas as cores (
            <code>horizon.6</code>, <code>var(--jc-chart-1)</code>…) para hex do esquema atual e
            redesenham ao alternar claro/escuro. A altura é <code>height</code> (<code>h</code> é
            aceito como alias).
          </P>
        </OnlyFor>
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
        <OnlyFor framework="react">
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
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>
            Todas as props do <code>@mantine-vue/charts</code> continuam funcionando e têm
            prioridade sobre os padrões JC: <code>color</code> por série, <code>curve-type</code>,{' '}
            <code>:value-formatter</code>, <code>strokeDasharray</code>,{' '}
            <code>:reference-lines</code> etc. Os eixos recebem opções do ECharts (
            <code>:y-axis-props="{'{'} axisLabel: {'{'} formatter {'}'} {'}'}"</code>) e{' '}
            <code>option</code> mescla um <code>EChartsOption</code> por cima de tudo. Consulte a{' '}
            <a href="https://mantine-vue.dev/charts/getting-started/" target="_blank" rel="noreferrer">
              documentação do Mantine Vue Charts
            </a>
            .
          </P>
        </OnlyFor>
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
              vueType: 'MantineColor | hex | var(--jc-chart-N) (opcional)',
              vueDescription: 'Cor da série; se omitida, vem da paleta da marca. Convertida para hex do esquema atual.',
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
              vueDescription: 'Números em pt-BR em tooltips, rótulos e no eixo de valores.',
            },
            {
              name: 'h',
              vueName: 'height',
              type: 'number',
              vueType: 'number | string',
              default: '280',
              description:
                'Altura padrão (Line/Area/Bar/Composite); 300 no Radar; 48 no Sparkline.',
              vueDescription:
                'Altura padrão (Line/Area/Bar/Composite); 300 no Radar; 48 no Sparkline; 160 (ou size) em Donut/Pie. h é aceito como alias.',
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
              only: 'react',
            },
          ]}
        />
        <OnlyFor framework="react">
          <P>
            Também são reexportados, sem alterações: <code>CompositeChart</code>,{' '}
            <code>RadarChart</code> (com paleta), <code>ScatterChart</code>, <code>BubbleChart</code>,{' '}
            <code>FunnelChart</code>, <code>Heatmap</code>, <code>BarsList</code>,{' '}
            <code>RadialBarChart</code>, <code>ChartTooltip</code> e <code>ChartLegend</code>.
          </P>
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>
            Também são exportados, com paleta e cores do tema: <code>CompositeChart</code>,{' '}
            <code>RadarChart</code>, <code>ScatterChart</code>, <code>BubbleChart</code>,{' '}
            <code>FunnelChart</code>, <code>Heatmap</code>, <code>BarsList</code>,{' '}
            <code>RadialBarChart</code>, <code>GaugeChart</code>, <code>WaffleChart</code>,{' '}
            <code>Treemap</code>, <code>SankeyChart</code>, <code>CandlestickChart</code> e{' '}
            <code>MatrixChart</code>; <code>ChartTooltip</code> e <code>ChartLegend</code> vêm sem
            alterações.
          </P>
        </OnlyFor>
      </Section>
    </DocPage>
  );
}
