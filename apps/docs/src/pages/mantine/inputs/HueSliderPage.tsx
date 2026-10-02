import { HueSlider } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function HueSliderPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="HueSlider"
      source="mantine"
      mantineName="hue-slider"
      description="Slider de matiz (0° a 360°). Peça do ColorPicker que pode ser usada sozinha para variar o tom de uma cor mantendo saturação e luminosidade."
      importCode={`import { HueSlider } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={HueSlider}
          name="HueSlider"
          previewWidth={320}
          baseProps={{ 'aria-label': 'Matiz' }}
          controls={[
            { prop: 'value', type: 'number', initialValue: 210, min: 0, max: 360 },
            { prop: 'size', type: 'size', initialValue: 'md' },
          ]}
        />
      </Section>

      <Section title="Controlado">
        <Demo id="hue-slider/basic" />
      </Section>

      <Section title="Com AlphaSlider">
        <P>Monte um seletor compacto combinando matiz e transparência.</P>
        <Demo id="hue-slider/combined" />
      </Section>

      <Section title="No tema JC">
        <P>
          Mesmos ajustes dos sliders de cor do <code>ColorPicker</code>: trilho com raio de 4px e thumb branco com <code>--ds-shadow-sm</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'number', required: true, description: 'Matiz de 0 a 360.' },
            { name: 'onChange / onChangeEnd', type: '(value: number) => void', description: 'Durante e ao fim do arraste.' },
            { name: 'size', type: 'MantineSize', default: 'md', description: 'Altura do slider.' },
            { name: 'focusable', type: 'boolean', default: 'true', description: 'Permite foco e setas do teclado.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Dê um <code>aria-label</code> e mostre a cor resultante ao lado. Para o cliente final, prefira amostras com nome; sliders de matiz são para
          ferramentas de criação.
        </P>
      </Section>
    </DocPage>
  );
}
