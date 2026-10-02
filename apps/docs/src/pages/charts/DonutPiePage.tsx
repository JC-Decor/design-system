import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function DonutPiePage() {
  return (
    <DocPage
      kicker="Gráficos"
      title="DonutChart & PieChart"
      source="charts"
      sourcePath="packages/ui/src/charts/charts.tsx"
      description="Participação de um todo: acessos por canal, receita por categoria, formas de pagamento. Fatias sem cor recebem a paleta da marca."
      importCode={`import { DonutChart, PieChart } from '@jcdecor/ui/charts';`}
    >
      <Section title="DonutChart">
        <P>
          Tooltip ligado, espaçamento entre fatias e espessura 24 por padrão.{' '}
          <code>chartLabel</code> escreve no centro.
        </P>
        <Demo id="donut-pie/donut" />
      </Section>

      <Section title="Com legenda própria">
        <P>
          Use <code>paletteColor(i)</code> para que a legenda use exatamente a mesma cor de cada
          fatia. <code>tooltipDataSource="segment"</code> mostra só a fatia sob o mouse.
        </P>
        <Demo id="donut-pie/legend" />
      </Section>

      <Section title="Rótulos e semicírculo">
        <Demo id="donut-pie/labels" />
      </Section>

      <Section title="PieChart">
        <Demo id="donut-pie/pie" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'data',
              type: '{ name: string; value: number; color?: MantineColor }[]',
              required: true,
              description: 'Fatias; color é opcional (paleta JC).',
            },
            {
              name: 'withTooltip',
              type: 'boolean',
              default: 'true',
              description: 'Tooltip ao passar o mouse.',
            },
            {
              name: 'valueFormatter',
              type: '(value: number) => string',
              default: 'ptBRValueFormatter',
              description: 'Formatação dos valores.',
            },
            {
              name: 'paddingAngle',
              type: 'number',
              default: '2',
              description: 'Somente DonutChart: espaço entre fatias.',
            },
            {
              name: 'thickness',
              type: 'number',
              default: '24',
              description: 'Somente DonutChart: espessura do anel.',
            },
            {
              name: 'chartLabel',
              type: 'string | number',
              description: 'Somente DonutChart: texto no centro.',
            },
            { name: 'size', type: 'number', default: '160', description: 'Diâmetro (Mantine).' },
            {
              name: 'withLabels',
              type: 'boolean',
              default: 'false',
              description: 'Rótulos em cada fatia (Mantine).',
            },
            {
              name: 'labelsType',
              type: "'value' | 'percent' | 'name'",
              default: "'value'",
              description: 'Conteúdo dos rótulos (Mantine).',
            },
          ]}
        />
      </Section>
    </DocPage>
  );
}
