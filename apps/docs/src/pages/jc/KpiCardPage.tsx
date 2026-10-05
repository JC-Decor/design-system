import { KpiCard } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';

export default function KpiCardPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="KpiCard"
      source="jc"
      sourcePath="packages/ui/src/components/KpiCard"
      description="Tile de KPI dos dashboards (ds-kpi): rótulo em caixa-alta, valor tabular, variação com cor/seta automática e slot para mini-gráfico."
      importCode={`import { KpiCard, KpiGroup } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={KpiCard}
          name="KpiCard"
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Acessos (60d)' },
            { prop: 'value', type: 'string', initialValue: '54.959' },
            { prop: 'delta', type: 'number', initialValue: -5.6, step: 0.1 },
            { prop: 'deltaLabel', type: 'string', initialValue: 'vs. período anterior' },
            { prop: 'invertDelta', type: 'boolean', initialValue: false },
            { prop: 'colorValue', type: 'boolean', initialValue: false },
            { prop: 'loading', type: 'boolean', initialValue: false },
          ]}
          baseProps={{}}
          previewWidth={260}
        />
      </Section>

      <Section title="Uso">
        <P>Números passados em <code>value</code> são formatados em pt-BR. <code>delta</code> é a variação em pontos percentuais.</P>
        <Demo id="kpi-card/usage" />
      </Section>

      <Section title="KpiGroup">
        <P>Grade responsiva: 1 coluna no mobile, 2 no tablet e 4 no desktop. Use <code>invertDelta</code> quando queda for algo positivo.</P>
        <Demo id="kpi-card/group" />
      </Section>

      <Section title="Com Sparkline">
        <Demo id="kpi-card/sparkline" />
      </Section>

      <Section title="Carregando">
        <Demo id="kpi-card/loading" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', vueType: 'MantineNode | slot #label', required: true, description: 'Rótulo em caixa-alta.' },
            { name: 'value', type: 'ReactNode', vueType: 'MantineNode | slot #value', required: true, description: 'Valor principal; números são formatados em pt-BR.' },
            { name: 'delta', type: 'number', description: 'Variação em p.p. — positiva verde ↑, negativa vermelha ↓.' },
            { name: 'deltaLabel', type: 'ReactNode', vueType: 'MantineNode | slot #deltaLabel', description: 'Texto ao lado da variação.' },
            { name: 'invertDelta', type: 'boolean', default: 'false', description: 'Inverte as cores (queda = bom).' },
            { name: 'colorValue', type: 'boolean', default: 'false', description: 'Pinta o valor com a cor da variação.' },
            { name: 'icon', type: 'ReactNode', vueType: 'MantineNode | slot #icon', description: 'Ícone no canto superior direito.' },
            { name: 'chart', type: 'ReactNode', vueType: 'MantineNode | slot #chart', description: 'Slot para Sparkline/mini-gráfico.', vueDescription: <>Sparkline/mini-gráfico, normalmente via slot <code>#chart</code>.</> },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Mostra skeleton no lugar do valor.' },
          ]}
        />
        <P>Styles API: <code>root · header · label · icon · value · footer · delta · chart</code>. Variáveis: <code>--kpi-delta-color</code>, <code>--kpi-value-color</code>.</P>
      </Section>
    </DocPage>
  );
}
