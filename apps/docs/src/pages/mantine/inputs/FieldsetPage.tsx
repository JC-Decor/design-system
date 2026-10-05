import { Fieldset, TextInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import FieldsetPreviewVue from '../../../vue-demos/fieldset/FieldsetPreview.vue';

function FieldsetPreview(props: React.ComponentProps<typeof Fieldset>) {
  return (
    <Fieldset {...props}>
      <TextInput label="Nome" placeholder="Maria Souza" />
    </Fieldset>
  );
}

export default function FieldsetPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Fieldset"
      source="mantine"
      mantineName="fieldset"
      description="Agrupa campos relacionados sob um título (legend), como “Dados pessoais” ou “Endereço de entrega”. Também desabilita todos os campos de uma vez."
      importCode={`import { Fieldset } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={FieldsetPreview}
          name="Fieldset"
          vue={{ component: FieldsetPreviewVue }}
          previewWidth={360}
          controls={[
            { prop: 'legend', type: 'string', initialValue: 'Dados pessoais' },
            { prop: 'variant', type: 'segmented', data: ['default', 'filled', 'unstyled'], initialValue: 'default' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Uso básico">
        <Demo id="fieldset/basic" />
      </Section>

      <Section title="Variantes">
        <Demo id="fieldset/variants" />
      </Section>

      <Section title="Desabilitado">
        <P>
          <code>disabled</code> usa o atributo nativo do <code>&lt;fieldset&gt;</code>: todos os campos e botões dentro dele ficam desabilitados.
        </P>
        <Demo id="fieldset/disabled" />
      </Section>

      <Section title="Checkout">
        <Demo id="fieldset/checkout" />
      </Section>

      <Section title="No tema JC">
        <P>
          Raio padrão <code>md</code> (12px, como os cards), borda <code>--ds-border-soft</code> e fundo <code>--ds-surface</code>; a variante{' '}
          <code>filled</code> usa <code>--ds-surface-2</code>. A legenda segue a escala tipográfica: 14px, peso 600, cor <code>--ds-text</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'legend', type: 'ReactNode', vueType: 'string | slot', description: 'Título do grupo (acessível como nome do grupo).' },
            { name: 'variant', type: "'default' | 'filled' | 'unstyled'", default: 'default', description: 'Estilo do contêiner.' },
            { name: 'radius', type: 'MantineRadius', default: 'md', description: 'Raio da borda.' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Desabilita todos os controles internos.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Agrupe por assunto, com legendas curtas. Leitores de tela anunciam a legenda ao entrar no grupo, então ela substitui títulos soltos. Para
          grupos de Radio/Checkbox use <code>Radio.Group</code>/<code>Checkbox.Group</code>, que já renderizam um fieldset.
        </P>
      </Section>
    </DocPage>
  );
}
