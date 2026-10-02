import { ColorInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ColorInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="ColorInput"
      source="mantine"
      mantineName="color-input"
      description="Campo de cor com prévia e seletor em dropdown. Use para escolher a cor de tecidos, acabamentos ou elementos de banners no painel."
      importCode={`import { ColorInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ColorInput}
          name="ColorInput"
          previewWidth={320}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Cor do tecido' },
            { prop: 'placeholder', type: 'string', initialValue: '#000000' },
            { prop: 'format', type: 'select', data: ['hex', 'hexa', 'rgb', 'rgba', 'hsl', 'hsla'], initialValue: 'hex' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'withPreview', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Uso básico">
        <Demo id="color-input/basic" />
      </Section>

      <Section title="Somente cores do catálogo">
        <P>
          Com <code>withPicker={'{false}'}</code>, <code>disallowInput</code> e <code>swatches</code>, o cliente só escolhe entre as cores disponíveis
          do produto.
        </P>
        <Demo id="color-input/swatches" />
      </Section>

      <Section title="Formatos">
        <Demo id="color-input/formats" />
      </Section>

      <Section title="No tema JC">
        <P>
          Campo com o visual de <code>Input</code> (md = 40px). O dropdown usa a superfície e a sombra dos popovers do tema; swatches e prévia com raio
          de 4px (<code>xs</code>) e o seletor herda os ajustes de <code>ColorPicker</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'format', type: "'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla'", default: 'hex', description: 'Formato do valor.' },
            { name: 'swatches', type: 'string[]', description: 'Cores pré-definidas no dropdown.' },
            { name: 'withPicker', type: 'boolean', default: 'true', description: 'Mostra o seletor de saturação/matiz.' },
            { name: 'disallowInput', type: 'boolean', default: 'false', description: 'Impede digitar a cor.' },
            { name: 'withEyeDropper', type: 'boolean', default: 'true', description: 'Conta-gotas (quando o navegador suporta).' },
            { name: 'fixOnBlur', type: 'boolean', default: 'true', description: 'Restaura o último valor válido ao sair.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre acompanhe a cor de um nome (“Musgo”, “Linho cru”) — o cliente não reconhece códigos HEX e pessoas com daltonismo dependem do texto.
          Cores de produto são dados do catálogo, não tokens do DS.
        </P>
      </Section>
    </DocPage>
  );
}
