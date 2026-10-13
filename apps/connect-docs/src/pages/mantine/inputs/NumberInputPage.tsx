import { NumberInput } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function NumberInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="NumberInput"
      source="mantine"
      mantineName="number-input"
      description="Campo numérico com formatação, limites e botões de incremento. Ideal para dias de férias, horas do banco de horas, carga horária, percentuais e salários."
      importCode={`import { NumberInput } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={NumberInput}
          name="NumberInput"
          previewWidth={320}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Carga horária semanal' },
            { prop: 'placeholder', type: 'string', initialValue: '0' },
            { prop: 'suffix', type: 'string', initialValue: ' h' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'hideControls', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Formato brasileiro">
        <P>
          Use <code>decimalSeparator=","</code> e <code>thousandSeparator="."</code> para o padrão pt-BR, com <code>prefix</code>/<code>suffix</code>{' '}
          para moeda e unidades. O valor recebido em{' '}
          <code>onChange</code> continua sendo um <code>number</code>.
        </P>
        <Demo id="number-input/formats" />
      </Section>

      <Section title="Limites e estados">
        <P>
          <code>clampBehavior="strict"</code> impede digitar acima de <code>max</code>; o padrão (<code>"blur"</code>) corrige ao sair do campo.
        </P>
        <Demo id="number-input/min-max" />
      </Section>

      <Section title="Simulador de férias">
        <P>Exemplo controlado: dias de gozo + abono pecuniário → saldo restante do período aquisitivo.</P>
        <Demo id="number-input/calculator" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Herda o visual de <code>Input</code> (md = 40px, texto 13px/500, anel de foco <code>--ds-primary-soft</code>). Os botões de incremento usam as cores neutras do tema e a borda{' '}
          <code>--ds-border</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'min / max / step', type: 'number', description: 'Limites e passo dos controles e setas do teclado.' },
            { name: 'decimalScale', type: 'number', description: 'Casas decimais permitidas.' },
            { name: 'decimalSeparator / thousandSeparator', type: 'string', description: 'Separadores (use "," e "." em pt-BR).' },
            { name: 'prefix / suffix', type: 'string', description: 'Texto fixo antes/depois do número (R$, h, %).' },
            { name: 'clampBehavior', type: "'strict' | 'blur' | 'none'", default: 'blur', description: 'Quando aplicar min/max.' },
            { name: 'hideControls', type: 'boolean', default: 'false', description: 'Oculta os botões de incremento.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Coloque a unidade no label ou no <code>suffix</code> — nunca deixe o colaborador adivinhar se são horas ou dias. Para CPF, PIS e telefone use{' '}
          <code>MaskInput</code>: são códigos, não números. Explique limites no <code>description</code> antes que vire erro.
        </P>
      </Section>
    </DocPage>
  );
}
