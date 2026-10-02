import { AlphaSlider } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function AlphaSliderPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="AlphaSlider"
      source="mantine"
      mantineName="alpha-slider"
      description="Slider de transparência (0 a 1) para uma cor. É uma peça do ColorPicker que pode ser usada sozinha, por exemplo para a opacidade de um tecido voil ou de uma sobreposição."
      importCode={`import { AlphaSlider } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={AlphaSlider}
          name="AlphaSlider"
          previewWidth={320}
          baseProps={{ value: 0.6, 'aria-label': 'Opacidade' }}
          controls={[
            { prop: 'color', type: 'string', initialValue: '#2F3E46' },
            { prop: 'size', type: 'size', initialValue: 'md' },
          ]}
        />
      </Section>

      <Section title="Controlado">
        <P>
          <code>value</code> vai de 0 a 1. Combine com um ColorSwatch para mostrar o resultado.
        </P>
        <Demo id="alpha-slider/basic" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="alpha-slider/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          Compartilha os ajustes dos sliders de cor do <code>ColorPicker</code>: trilho com raio de 4px e thumb com borda branca e{' '}
          <code>--ds-shadow-sm</code>, visível sobre qualquer cor e no tema escuro.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'color', type: 'string', required: true, description: 'Cor base exibida no gradiente.' },
            { name: 'value', type: 'number', required: true, description: 'Transparência de 0 a 1.' },
            { name: 'onChange / onChangeEnd', type: '(value: number) => void', description: 'Durante e ao fim do arraste.' },
            { name: 'size', type: 'MantineSize', default: 'md', description: 'Altura do slider.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          O slider não tem label visível: dê sempre um <code>aria-label</code> e mostre o valor em porcentagem ao lado, em texto.
        </P>
      </Section>
    </DocPage>
  );
}
