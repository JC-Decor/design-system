import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function LineAreaPage() {
  return (
    <DocPage
      kicker="Gráficos"
      title="LineChart & AreaChart"
      source="charts"
      sourcePath="packages/ui/src/charts/charts.tsx"
      description="Séries temporais: sessões por canal, vendas mensais, taxa de conversão. Curvas suaves e paleta da marca por padrão."
      importCode={`import { LineChart, AreaChart } from '@jcdecor/ui/charts';`}
    >
      <Section title="LineChart">
        <P>
          Sessões semanais por canal. As três séries não definem cor, então recebem horizon,
          evergreen e electric.
        </P>
        <Demo id="line-area/line" />
      </Section>

      <Section title="AreaChart com valores em R$">
        <P>
          Passe um <code>valueFormatter</code> para o tooltip e um <code>tickFormatter</code> no{' '}
          <code>yAxisProps</code> para o eixo — aqui com <code>formatCurrency</code> e{' '}
          <code>formatCompact</code> do <code>@jcdecor/ui</code>.
        </P>
        <Demo id="line-area/area" />
      </Section>

      <Section title="Área empilhada">
        <P>
          <code>type="stacked"</code> soma os acessos por canal mês a mês (também há{' '}
          <code>percent</code> e <code>split</code>).
        </P>
        <Demo id="line-area/stacked" />
      </Section>

      <Section title="Linhas de referência">
        <P>
          <code>referenceLines</code> marca metas e limites; <code>withDots</code> destaca cada
          ponto e <code>unit</code> é somado aos valores.
        </P>
        <Demo id="line-area/reference" />
      </Section>

      <Section title="Props">
        <P>Padrões JC (todas as props do Mantine continuam disponíveis e têm prioridade):</P>
        <PropsTable
          rows={[
            {
              name: 'data',
              type: 'Record<string, any>[]',
              required: true,
              description: 'Linhas de dados.',
            },
            { name: 'dataKey', type: 'string', required: true, description: 'Campo do eixo X.' },
            {
              name: 'series',
              type: '{ name; label?; color?; strokeDasharray?; … }[]',
              required: true,
              description: 'Séries; color é opcional (paleta JC).',
            },
            {
              name: 'h',
              type: 'number | string',
              default: '280',
              description: 'Altura do gráfico.',
            },
            {
              name: 'curveType',
              type: "'monotone' | 'linear' | 'natural' | 'step' | …",
              default: "'monotone'",
              description: 'Tipo de curva.',
            },
            {
              name: 'gridAxis',
              type: "'x' | 'y' | 'xy' | 'none'",
              default: "'y'",
              description: 'Linhas de grade.',
            },
            {
              name: 'strokeWidth',
              type: 'number',
              default: '2.5',
              description: 'Espessura das linhas.',
            },
            {
              name: 'fillOpacity',
              type: 'number',
              default: '0.25',
              description: 'Somente AreaChart: opacidade do preenchimento.',
            },
            {
              name: 'valueFormatter',
              type: '(value: number) => string',
              default: 'ptBRValueFormatter',
              description: 'Formatação dos valores no tooltip.',
            },
            {
              name: 'type',
              type: "'default' | 'stacked' | 'percent' | 'split'",
              default: "'default'",
              description: 'Somente AreaChart (Mantine).',
            },
          ]}
        />
      </Section>
    </DocPage>
  );
}
