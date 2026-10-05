import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

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
          <OnlyFor framework="react">
            Tooltip ligado, espaçamento entre fatias e espessura 24 por padrão.{' '}
            <code>chartLabel</code> escreve no centro.
          </OnlyFor>
          <OnlyFor framework="vue">
            Tooltip ligado, espaçamento entre fatias e anel com raio interno de 52% por padrão
            (no ECharts, <code>thickness</code> é o raio interno em %).{' '}
            <code>chart-label</code> escreve no centro. <code>size</code> define a altura; a
            largura é 100% do container, então passe <code>width</code> para pôr gráficos lado a
            lado.
          </OnlyFor>
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
              only: 'react',
            },
            {
              name: 'thickness',
              type: 'number',
              default: '52',
              description: 'Somente DonutChart: raio interno do anel, em % (maior = anel mais fino).',
              only: 'vue',
            },
            {
              name: 'chartLabel',
              type: 'string | number',
              vueType: 'string',
              description: 'Somente DonutChart: texto no centro.',
            },
            {
              name: 'chartLabelFontSize',
              type: 'number',
              default: '18',
              description: 'Somente DonutChart: tamanho da fonte do texto no centro.',
              only: 'vue',
            },
            {
              name: 'size',
              type: 'number',
              default: '160',
              description: 'Diâmetro (Mantine).',
              vueDescription: 'Altura do gráfico (a pizza ocupa 75% dela).',
            },
            {
              name: 'width',
              type: 'number | string',
              default: "'100%'",
              description: 'Largura do gráfico; fixe-a para alinhar gráficos lado a lado.',
              only: 'vue',
            },
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
              vueType: "'value' | 'percent'",
              vueDescription:
                "Conteúdo dos rótulos. Para o nome da fatia, use :pie-props=\"{ label: { show: true, formatter: '{b}' } }\".",
            },
          ]}
        />
      </Section>
    </DocPage>
  );
}
