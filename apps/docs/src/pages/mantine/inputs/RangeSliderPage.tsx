import { RangeSlider } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function RangeSliderPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="RangeSlider"
      source="mantine"
      mantineName="slider"
      description="Slider com dois thumbs para escolher um intervalo — o clássico filtro de faixa de preço da listagem de produtos."
      importCode={`import { RangeSlider } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={RangeSlider}
          name="RangeSlider"
          previewWidth={360}
          baseProps={{ defaultValue: [25, 75], thumbFromLabel: 'Mínimo', thumbToLabel: 'Máximo' }}
          controls={[
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
            { prop: 'minRange', type: 'number', initialValue: 10, min: 0, max: 50, step: 1 },
            { prop: 'labelAlwaysOn', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Filtro de preço">
        <P>
          Sincronize o slider com dois NumberInput para quem prefere digitar. <code>minRange</code> evita que os thumbs se encontrem.
        </P>
        <Demo id="range-slider/price-filter" />
      </Section>

      <Section title="Marcas e passo decimal">
        <Demo id="range-slider/marks" />
      </Section>

      <Section title="Label sempre visível e desabilitado">
        <Demo id="range-slider/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Mesmo visual do <code>Slider</code>: trilho <code>--ds-border-soft</code>, faixa na cor primária, thumbs brancos com borda primária e{' '}
          <code>--ds-shadow-sm</code>, anel de foco <code>--ds-primary-soft</code> e balão Obsidian.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / defaultValue', type: '[number, number]', description: 'Intervalo selecionado.' },
            { name: 'onChange / onChangeEnd', type: '(value: [number, number]) => void', description: 'Durante / ao soltar.' },
            { name: 'min / max / step', type: 'number', default: '0 / 100 / 1', description: 'Limites e passo.' },
            { name: 'minRange / maxRange', type: 'number', default: '10 / ∞', description: 'Distância mínima/máxima entre os thumbs.' },
            { name: 'thumbFromLabel / thumbToLabel', type: 'string', description: 'aria-label de cada thumb.' },
            { name: 'pushOnOverlap', type: 'boolean', default: 'true', description: 'Empurra o outro thumb ao encostar.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre nomeie os thumbs (<code>thumbFromLabel</code>/<code>thumbToLabel</code>) e mostre os valores em texto. Use <code>onChangeEnd</code>{' '}
          para recarregar a lista de produtos só quando o cliente soltar o thumb.
        </P>
      </Section>
    </DocPage>
  );
}
