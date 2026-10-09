import { AngleSlider } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function AngleSliderPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="AngleSlider"
      source="mantine"
      mantineName="angle-slider"
      description="Controle circular para escolher um ângulo de 0° a 360°. Use para direção de degradês, rotação de imagens ou paginação de pisos (ex.: espinha de peixe a 45°)."
      importCode={`import { AngleSlider } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={AngleSlider}
          name="AngleSlider"
          baseProps={{ 'aria-label': 'Ângulo' }}
          controls={[
            { prop: 'size', type: 'number', initialValue: 80, min: 40, max: 200 },
            { prop: 'step', type: 'number', initialValue: 1, min: 1, max: 90 },
            { prop: 'withLabel', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Controlado">
        <Demo id="angle-slider/basic" />
      </Section>

      <Section title="Marcas">
        <P>
          <code>marks</code> desenha referências na borda; com <code>restrictToMarks</code> o valor só para nelas.
        </P>
        <Demo id="angle-slider/marks" />
      </Section>

      <Section title="Prévia ao vivo">
        <Demo id="angle-slider/preview" />
      </Section>

      <Section title="No tema JC">
        <P>
          O fundo usa <code>--ds-surface-2</code> com borda <code>--ds-border-soft</code>, o thumb usa a cor primária (<code>--ds-primary</code>) e o
          label o peso 600 da escala. No foco, o anel de 3px <code>--ds-primary-soft</code> é o mesmo dos campos.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / defaultValue', vueName: 'v-model / defaultValue', type: 'number', description: 'Ângulo em graus.' },
            { name: 'onChange / onChangeEnd', vueName: '@change / @change-end', type: '(value: number) => void', description: 'Durante e ao fim do arraste.' },
            { name: 'size', type: 'number', default: '60', description: 'Diâmetro em px.' },
            { name: 'step', type: 'number', default: '1', description: 'Passo do valor.' },
            { name: 'marks', type: '{ value, label? }[]', description: 'Marcas na borda.' },
            { name: 'formatLabel', type: '(value) => ReactNode', vueType: '(value) => VNodeChild', description: 'Formata o label central.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre forneça <code>aria-label</code> — o controle aceita setas do teclado. Mostre o valor com a unidade (<code>formatLabel</code>{' '}
          retornando “45°”). Para valores que o usuário precisa digitar com precisão, ofereça também um NumberInput.
        </P>
      </Section>
    </DocPage>
  );
}
