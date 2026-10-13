import { ColorInput } from '@jcdecor/connect-ui';
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
      description="Campo de cor com prévia e seletor em dropdown. Use na administração do Painel para definir a cor de etiquetas de departamento, eventos do calendário ou capas de comunicados."
      importCode={`import { ColorInput } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ColorInput}
          name="ColorInput"
          previewWidth={320}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Cor do departamento' },
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

      <Section title="Somente cores da paleta">
        <P>
          Com <code>withPicker={'{false}'}</code>, <code>disallowInput</code> e <code>swatches</code>, a escolha fica restrita às cores da paleta do
          Connect — as mesmas dos tons de avatares e etiquetas.
        </P>
        <Demo id="color-input/swatches" />
      </Section>

      <Section title="Formatos">
        <Demo id="color-input/formats" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Campo com o visual de <code>Input</code> (md = 40px, texto 13px). O dropdown usa a superfície e a sombra dos popovers do tema; swatches e prévia com raio
          de 6px (<code>xs</code>) e o seletor herda os ajustes de <code>ColorPicker</code>.
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
          Sempre acompanhe a cor de um nome (“Navy”, “Coral”) e do texto que ela representa (“Comercial”) — pessoas com daltonismo dependem do texto.
          Prefira restringir às cores da paleta para manter o contraste do Painel.
        </P>
      </Section>
    </DocPage>
  );
}
