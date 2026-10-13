import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { ProgressBar, ToneRing } from '@jcdecor/connect-ui';

export default function ProgressBarPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="ProgressBar, ToneRing & SegmentBar"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ProgressBar"
      description="Indicadores de progresso do Connect sobre o Progress e o RingProgress do Mantine: barra fina no tom, anel com rótulo central e barra segmentada de distribuição."
      importCode={`import { ProgressBar, ToneRing, SegmentBar } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ProgressBar}
          name="ProgressBar"
          previewWidth={360}
          controls={[
            { prop: 'value', type: 'number', initialValue: 64, min: 0, max: 100, step: 1 },
            { prop: 'tone', type: 'color', data: ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'], initialValue: 'blue' },
            { prop: 'size', type: 'number', initialValue: 6, min: 2, max: 16, step: 1 },
          ]}
        />
      </Section>
      <Section title="Tons">
        <P>O preenchimento usa o texto do tom (mais escuro) sobre o trilho surface-2.</P>
        <Demo id="cn-progress-bar/tones" />
      </Section>
      <Section title="Alturas">
        <Demo id="cn-progress-bar/sizes" />
      </Section>
      <Section title="ToneRing">
        <Configurator
          component={ToneRing}
          name="ToneRing"
          controls={[
            { prop: 'value', type: 'number', initialValue: 72, min: 0, max: 100, step: 1 },
            { prop: 'tone', type: 'color', data: ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'], initialValue: 'blue' },
            { prop: 'size', type: 'number', initialValue: 64, min: 32, max: 140, step: 4 },
            { prop: 'stroke', type: 'number', initialValue: 6, min: 2, max: 14, step: 1 },
          ]}
        />
        <P>Trilho no fundo do tom, arco e rótulo no texto do tom. Sem <code>label</code>, mostra a porcentagem.</P>
        <Demo id="cn-progress-bar/ring" />
      </Section>
      <Section title="SegmentBar">
        <P>Distribui um total em segmentos (2px de respiro, sobe no hover, tooltip com rótulo e valor). Sem <code>color</code>, usa a paleta de gráficos do tema.</P>
        <Demo id="cn-progress-bar/segment" />
      </Section>
      <Section title="Props">
        <P>ProgressBar:</P>
        <PropsTable
          rows={[
            { name: 'value', type: 'number', required: true, description: 'Valor atual.' },
            { name: 'max', type: 'number', default: '100', description: 'Valor que vale 100%.' },
            { name: 'tone', type: 'ToneName', default: "'blue'", description: 'Cor do preenchimento.' },
            { name: 'size', type: 'number', default: '6', description: 'Altura em px.' },
            { name: 'aria-label', type: 'string', default: "'Progresso'", description: 'Rótulo acessível.' },
          ]}
        />
        <P>ToneRing:</P>
        <PropsTable
          rows={[
            { name: 'value / max / tone', type: '', description: 'Como na ProgressBar.' },
            { name: 'size', type: 'number', default: '64', description: 'Diâmetro.' },
            { name: 'stroke', type: 'number', default: '6', description: 'Espessura.' },
            { name: 'label', type: 'ReactNode', description: 'Texto central; padrão = %.' },
          ]}
        />
        <P>SegmentBar:</P>
        <PropsTable
          rows={[
            { name: 'segments', type: '{ label; value; color? }[]', required: true, description: 'Segmentos.' },
            { name: 'height', type: 'number', default: '8', description: 'Altura.' },
            { name: 'withTooltip', type: 'boolean', default: 'true', description: 'Tooltip por segmento.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;ProgressBar value max tone size /&gt;</code> continua igual.</li>
          <li><code>&lt;RingProgress value max size stroke tone label /&gt;</code> → <code>&lt;ToneRing /&gt;</code> (<code>RingProgress</code> é do Mantine).</li>
          <li><code>&lt;PillBar segments height /&gt;</code> (do PageToolbar) → <code>&lt;SegmentBar /&gt;</code>; <code>color</code> agora é opcional.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
