import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function AreaChartPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="AreaChart & MoveChart"
      source="connect"
      sourcePath="packages/connect-ui/src/components/AreaChart"
      description="Gráfico de área do Connect em SVG puro (sem dependências): série principal em área com gradiente, secundária tracejada, grade pontilhada e tooltip com crosshair no mouse e no toque."
      importCode={`import { AreaChart, ChartLegend, MoveChart } from '@jcdecor/connect-ui';`}
    >
      <Section title="MoveChart">
        <P>Card pronto de movimentação de pessoas (admissões × desligamentos, com quadro ativo no tooltip), legenda e seletor de período.</P>
        <Demo id="cn-area-chart/move-chart" />
      </Section>
      <Section title="AreaChart avulso">
        <P>
          Escolha as duas séries em <code>keys</code>, as linhas do tooltip em <code>labels</code> (a última com <code>muted</code> vira rodapé) e as cores em
          <code>primary</code>/<code>secondary</code> — use variáveis CSS (<code>--cn-chart-N</code>, <code>--ds-primary</code>) para o tema escuro funcionar.
          O eixo Y é calculado pelo maior valor (ou fixe com <code>maxA</code>). O SVG tem <code>aria-label</code> com o resumo dos dados.
        </P>
        <Demo id="cn-area-chart/custom" />
      </Section>
      <Section title="Props">
        <P>AreaChart:</P>
        <PropsTable
          rows={[
            { name: 'data', type: 'ChartDataPoint[]', required: true, description: '{ m: rótulo do eixo X, [chave]: número }' },
            { name: 'labels', type: 'ChartLabel[]', required: true, description: '{ key, text, muted? } — linhas do tooltip.' },
            { name: 'keys', type: '[string, string]', default: "['admissoes', 'desligamentos']", description: 'Série principal e secundária.' },
            { name: 'primary', type: 'string', default: "'var(--ds-primary)'", description: 'Cor da área/linha.' },
            { name: 'secondary', type: 'string', default: "'var(--cn-tone-coral-fg)'", description: 'Cor do tracejado.' },
            { name: 'height', type: 'number', default: '240', description: 'Altura.' },
            { name: 'maxA', type: 'number', description: 'Topo do eixo Y (padrão automático).' },
            { name: 'tipTitle', type: '(ponto) => ReactNode', default: 'ponto.m', description: 'Título do tooltip.' },
          ]}
        />
        <P>MoveChart (mais as props do Card):</P>
        <PropsTable
          rows={[
            { name: 'data', type: 'ChartDataPoint[]', required: true, description: 'Com admissoes, desligamentos e ativo.' },
            { name: 'title / sub', type: 'ReactNode', description: 'Cabeçalho.' },
            { name: 'periodLabel', type: 'string', default: "'Últimos 6 meses'", description: 'Seletor de período.' },
            { name: 'onPeriodClick', type: '() => void', description: 'Abre seu menu de períodos.' },
          ]}
        />
        <P>ChartLegend:</P>
        <PropsTable
          rows={[
            { name: 'items', type: '{ label; color?; dashed? }[]', required: true, description: 'Itens da legenda.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;AreaChart primary data keys height labels maxA /&gt;</code> mantém as props; <code>primary</code> e <code>maxA</code> agora são opcionais.</li>
          <li>O sufixo fixo “· 2026” do tooltip saiu: use <code>{'tipTitle={(p) => `${p.m} · 2026`}'}</code>.</li>
          <li><code>&lt;MoveChart primary height data /&gt;</code> mantém as props; o seletor de período ganhou <code>onPeriodClick</code>.</li>
          <li><code>.legend</code>/<code>.lg-dot</code> → <code>&lt;ChartLegend items /&gt;</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
