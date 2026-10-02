import { SemiCircleProgress } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function SemiCircleProgressPage() {
  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="SemiCircleProgress"
      source="mantine"
      mantineName="semi-circle-progress"
      description="Medidor em meio círculo para metas de vendas por loja ou vendedor e indicadores de desempenho."
      importCode={`import { SemiCircleProgress } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={SemiCircleProgress}
          name="SemiCircleProgress"
          controls={[
            { prop: 'value', type: 'number', initialValue: 74, min: 0, max: 100 },
            { prop: 'size', type: 'number', initialValue: 200, min: 80, max: 320, step: 10 },
            { prop: 'thickness', type: 'number', initialValue: 12, min: 2, max: 30 },
            { prop: 'filledSegmentColor', type: 'color', initialValue: 'horizon' },
            { prop: 'orientation', type: 'segmented', data: ['up', 'down'], initialValue: 'up' },
            { prop: 'fillDirection', type: 'segmented', data: ['left-to-right', 'right-to-left'], initialValue: 'left-to-right' },
            { prop: 'labelPosition', type: 'segmented', data: ['bottom', 'center'], initialValue: 'bottom' },
            { prop: 'label', type: 'string', initialValue: '74%' },
          ]}
        />
      </Section>

      <Section title="Meta de vendas">
        <P>
          Com <code>labelPosition="center"</code> o rótulo fica dentro do arco. <code>transitionDuration</code> anima a mudança de valor.
        </P>
        <Demo id="semi-circle-progress/sales-goal" />
      </Section>

      <Section title="Cores por desempenho">
        <P>
          Troque <code>filledSegmentColor</code> conforme a faixa: Evergreen acima da meta, Horizon no caminho, Danger abaixo do esperado.
        </P>
        <Demo id="semi-circle-progress/colors" />
      </Section>

      <Section title="Orientação e direção">
        <Demo id="semi-circle-progress/orientation" />
      </Section>

      <Section title="No tema JC">
        <P>
          O segmento vazio usa <code>--ds-border-soft</code> (em vez de <code>gray.2</code>/<code>dark.4</code>) e o rótulo usa{' '}
          <code>--ds-text</code> em peso 600, acompanhando o RingProgress.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'number', required: true, description: 'Progresso de 0 a 100.' },
            { name: 'size', type: 'number', default: '200', description: 'Largura em px (a altura é a metade).' },
            { name: 'thickness', type: 'number', default: '12', description: 'Espessura do arco em px.' },
            { name: 'filledSegmentColor', type: 'MantineColor', default: "'horizon'", description: 'Cor do segmento preenchido.' },
            { name: 'emptySegmentColor', type: 'MantineColor', default: '--ds-border-soft', description: 'Cor do segmento vazio.' },
            { name: 'orientation', type: "'up' | 'down'", default: "'up'", description: 'Arco para cima ou para baixo.' },
            { name: 'label / labelPosition', type: "ReactNode / 'bottom' | 'center'", description: 'Rótulo e sua posição.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          O valor máximo é 100 — para metas superadas (ex.: 104%), limite o arco em 100 e mostre o número real no rótulo. Não use cor como única
          indicação de desempenho.
        </P>
      </Section>
    </DocPage>
  );
}
