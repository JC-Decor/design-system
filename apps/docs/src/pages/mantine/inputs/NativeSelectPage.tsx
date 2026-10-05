import { NativeSelect } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function NativeSelectPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="NativeSelect"
      source="mantine"
      mantineName="native-select"
      description="Seleção usando o <select> nativo do navegador. Leve e com o seletor do sistema no celular — use para listas simples sem busca, como estado, parcelas ou ordenação."
      importCode={`import { NativeSelect } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={NativeSelect}
          name="NativeSelect"
          previewWidth={320}
          baseProps={{ data: ['Relevância', 'Menor preço', 'Maior preço', 'Lançamentos'] }}
          codeProps={{ data: "['Relevância', 'Menor preço', 'Maior preço', 'Lançamentos']" }}
          // Mantine Vue: sem defaultValue o <select> abre vazio (value undefined → selectedIndex -1)
          vue={{
            baseProps: { data: ['Relevância', 'Menor preço', 'Maior preço', 'Lançamentos'], defaultValue: 'Relevância' },
            codeProps: { ':data': "['Relevância', 'Menor preço', 'Maior preço', 'Lançamentos']", 'default-value': '"Relevância"' },
          }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Ordenar por' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'variant', type: 'segmented', data: ['default', 'filled', 'unstyled'], initialValue: 'default' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Uso básico">
        <Demo id="native-select/basic" />
      </Section>

      <Section title="Grupos e opções desabilitadas">
        <P>
          <code>data</code> aceita strings, objetos <code>{'{ label, value, disabled }'}</code> e grupos <code>{'{ group, items }'}</code>{' '}
          (renderizados como <code>&lt;optgroup&gt;</code>).
        </P>
        <Demo id="native-select/groups" />
      </Section>

      <Section title="Ícone, erro e desabilitado">
        <Demo id="native-select/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Visual de <code>Input</code> com tamanho <code>md</code>. A seta usa <code>--ds-text-3</code> e as opções do menu nativo recebem{' '}
          <code>--ds-surface</code>/<code>--ds-text</code> para ficarem legíveis também no tema escuro.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'string[] | { label, value }[] | { group, items }[]', description: 'Opções da lista.' },
            { name: 'value / onChange', type: 'string / ChangeEvent', description: 'Uso controlado (evento nativo).', vueName: 'v-model', vueType: 'string', vueDescription: 'Uso controlado (recebe o valor selecionado).' },
            { name: 'rightSection', type: 'ReactNode', vueType: 'string | slot', description: 'Substitui a seta padrão.' },
            { name: 'error', type: 'ReactNode', vueType: 'string | slot', description: 'Mensagem de erro.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Para listas longas (cidades, produtos) ou com busca, use <code>Select</code>. Com até 4–5 opções sempre visíveis, prefira{' '}
          <code>Radio</code> ou <code>SegmentedControl</code>. Evite uma primeira opção vazia sem texto: use “Selecione…” ou um valor padrão.
        </P>
      </Section>
    </DocPage>
  );
}
