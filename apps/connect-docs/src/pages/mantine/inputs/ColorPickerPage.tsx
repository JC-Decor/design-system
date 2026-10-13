import { ColorPicker } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ColorPickerPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="ColorPicker"
      source="mantine"
      mantineName="color-picker"
      description="Seletor de cor inline com área de saturação, matiz, transparência e amostras. Use quando a escolha da cor é o foco da tela, como o editor de capa de um comunicado."
      importCode={`import { ColorPicker } from '@jcdecor/connect-ui';`}
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
          Sem o seletor (<code>withPicker={'{false}'}</code>) o componente vira uma paleta fechada, como as cores das etiquetas de equipe.
        </P>
        <Demo id="color-picker/swatches-only" />
      </Section>

      <Section title="Tamanhos">
        <P>
          Os formatos com transparência (<code>rgba</code>, <code>hsla</code>, <code>hexa</code>) mostram o AlphaSlider.
        </P>
        <Demo id="color-picker/sizes" />
      </Section>

      <Section title="No tema Connect">
        <P>
          A área de saturação, os trilhos e as amostras usam raio de 6px (<code>xs</code>), e as amostras ganham um contorno de foco de 2px{' '}
          <code>--ds-primary</code>.
          Os thumbs dos sliders de cor recebem borda branca com sombra <code>--ds-shadow-sm</code>, para ficarem visíveis em qualquer cor e no tema
          escuro.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / onChange', type: 'string', description: 'Cor controlada no formato escolhido.' },
            { name: 'format', type: 'ColorFormat', default: 'hex', description: 'Formato do valor; rgba/hsla/hexa mostram transparência.' },
            { name: 'swatches', type: 'string[]', description: 'Amostras clicáveis.' },
            { name: 'swatchesPerRow', type: 'number', default: '7', description: 'Amostras por linha.' },
            { name: 'withPicker', type: 'boolean', default: 'true', description: 'Mostra saturação e sliders.' },
            { name: 'onChangeEnd', type: '(color) => void', description: 'Ao terminar de arrastar (ideal para salvar).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre sempre o nome ou o código da cor selecionada em texto. Use <code>onChangeEnd</code>{' '}para operações caras (salvar, regerar a prévia da capa), não <code>onChange</code>. Os sliders aceitam setas do teclado; dê <code>aria-label</code> em português (<code>saturationLabel</code>,{' '}
          <code>hueLabel</code>, <code>alphaLabel</code>).
        </P>
      </Section>
    </DocPage>
  );
}
