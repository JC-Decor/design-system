import { ColorPicker } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function ColorPickerPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="ColorPicker"
      source="mantine"
      mantineName="color-picker"
      description="Seletor de cor inline com área de saturação, matiz, transparência e amostras. Use quando a escolha da cor é o foco da tela, como um configurador de tecido."
      importCode={`import { ColorPicker } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ColorPicker}
          name="ColorPicker"
          controls={[
            { prop: 'format', type: 'select', data: ['hex', 'hexa', 'rgb', 'rgba', 'hsl', 'hsla'], initialValue: 'hex' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'fullWidth', type: 'boolean', initialValue: false },
            { prop: 'withPicker', type: 'boolean', initialValue: true },
          ]}
        />
      </Section>

      <Section title="Controlado">
        <Demo id="color-picker/basic" />
      </Section>

      <Section title="Com amostras">
        <Demo id="color-picker/swatches" />
      </Section>

      <Section title="Somente amostras">
        <P>
          Sem o seletor (<code>withPicker={'{false}'}</code>) o componente vira uma paleta de cores do produto.
        </P>
        <Demo id="color-picker/swatches-only" />
      </Section>

      <Section title="Tamanhos">
        <P>
          Os formatos com transparência (<code>rgba</code>, <code>hsla</code>, <code>hexa</code>) mostram o AlphaSlider.
        </P>
        <Demo id="color-picker/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          A área de saturação e as amostras usam raio de 4px (<code>xs</code>) em vez de cantos retos, e as amostras ganham um anel de foco Horizon.
          Os thumbs dos sliders de cor recebem borda branca com sombra <code>--ds-shadow-sm</code>, para ficarem visíveis em qualquer cor e no tema
          escuro.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / onChange', vueName: 'v-model', type: 'string', description: 'Cor controlada no formato escolhido.' },
            { name: 'format', type: 'ColorFormat', default: 'hex', description: 'Formato do valor; rgba/hsla/hexa mostram transparência.' },
            { name: 'swatches', type: 'string[]', description: 'Amostras clicáveis.' },
            { name: 'swatchesPerRow', type: 'number', default: '7', description: 'Amostras por linha.' },
            { name: 'withPicker', type: 'boolean', default: 'true', description: 'Mostra saturação e sliders.' },
            { name: 'onChangeEnd', vueName: '@change-end', type: '(color) => void', description: 'Ao terminar de arrastar (ideal para salvar).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre sempre o nome ou o código da cor selecionada em texto. Use <code>onChangeEnd</code>
          <OnlyFor framework="vue">
            {' '}
            (<code>@change-end</code>)
          </OnlyFor>{' '}
          para operações caras (salvar, renderizar prévia 3D), não <code>onChange</code>
          <OnlyFor framework="vue">
            {' '}
            (<code>v-model</code>)
          </OnlyFor>
          . Os sliders aceitam setas do teclado; dê <code>aria-label</code> em português (<code>saturationLabel</code>,{' '}
          <code>hueLabel</code>, <code>alphaLabel</code>).
        </P>
      </Section>
    </DocPage>
  );
}
