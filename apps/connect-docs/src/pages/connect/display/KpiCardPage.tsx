import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function KpiCardPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="KpiCard, Spark & MiniSpark"
      source="connect"
      sourcePath="packages/connect-ui/src/components/KpiCard"
      description="Card de KPI dos painéis: ícone tonal, rótulo, valor grande, variação com seta e uma sparkline em área que sangra até as bordas."
      importCode={`import { KpiCard, Spark, MiniSpark } from '@jcdecor/connect-ui';`}
    >
      <Section title="Grade de KPIs">
        <P><code>deltaTone</code>: <code>pos</code> (verde ↑), <code>neg</code> (coral ↓) ou <code>neu</code>. O botão “⋯” só aparece com <code>onMore</code>. A sparkline usa um formato decorativo (<code>spark</code>) ou a série real (<code>sparkData</code>).</P>
        <Demo id="cn-kpi-card/grid" />
      </Section>
      <Section title="Compacto">
        <Demo id="cn-kpi-card/compact" />
      </Section>
      <Section title="Spark e MiniSpark">
        <P><code>Spark</code> é a área com gradiente do tom (formatos up, down, wave, flat ou <code>data</code>); <code>MiniSpark</code> é só a linha, para tabelas.</P>
        <Demo id="cn-kpi-card/sparks" />
      </Section>
      <Section title="Props">
        <P>KpiCard:</P>
        <PropsTable
          rows={[
            { name: 'kpi', type: 'KpiData', required: true, description: '{ label, value, delta?, deltaTone?, sub?, tone?, icon?, spark?, sparkData? }' },
            { name: 'compact', type: 'boolean', description: 'Versão baixa (valor 24px).' },
            { name: 'onMore', type: '(event) => void', description: 'Mostra e trata o botão ⋯.' },
            { name: 'moreLabel', type: 'string', default: "'Mais opções'", description: 'Rótulo acessível do ⋯.' },
          ]}
        />
        <P>Spark / MiniSpark:</P>
        <PropsTable
          rows={[
            { name: 'tone', type: 'ToneName', default: "'blue'", description: 'Cor.' },
            { name: 'variant', type: "'up' | 'down' | 'wave' | 'flat'", default: "'up'", description: 'Formato decorativo (Spark).' },
            { name: 'data', type: 'number[]', description: 'Série real (obrigatória no MiniSpark).' },
            { name: 'w / h', type: 'number', default: '80 / 22', description: 'Tamanho do MiniSpark.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;KpiCard kpi compact /&gt;</code> mantém as props. O “⋯” antes era sempre exibido sem ação: agora passe <code>onMore</code> para mostrá-lo.</li>
          <li>Nova chave <code>kpi.sparkData</code> para desenhar a série real em vez do formato decorativo.</li>
          <li><code>Spark</code> e <code>MiniSpark</code> mantêm as props.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
