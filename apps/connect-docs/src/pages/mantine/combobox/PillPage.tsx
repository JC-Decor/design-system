import { Pill } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function PillPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="Pill"
      source="mantine"
      mantineName="pill"
      description="Item compacto e removível usado dentro de MultiSelect, TagsInput e PillsInput — e para listar filtros ativos."
      importCode={`import { Pill } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Pill}
          name="Pill"
          controls={[
            { prop: 'variant', type: 'segmented', data: ['default', 'contrast'], initialValue: 'default' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'withRemoveButton', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'Tecnologia' },
          ]}
        />
      </Section>

      <Section title="Variantes">
        <P>
          <code>default</code> é a tag neutra do Connect; <code>contrast</code> usa a tag primária (navy suave) e serve para destacar um
          filtro principal.
        </P>
        <Demo id="pill/basic" />
      </Section>

      <Section title="Filtros removíveis">
        <Demo id="pill/removable" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="pill/sizes" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Fundo <code>--ds-tag-neutral-bg</code>, texto <code>--ds-tag-neutral-color</code> e peso 500; <code>contrast</code> usa{' '}
          <code>--ds-tag-primary-bg</code> / <code>-color</code>. O botão de remover herda a cor do texto e tem hover em{' '}
          <code>--ds-tag-neutral-hover</code> (ou <code>--ds-tag-primary-hover</code>). Desabilitada, a pill fica com 60% de opacidade.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'default' | 'contrast'", default: "'default'", description: 'Neutra ou primária.' },
            { name: 'size', type: 'MantineSize', default: "'sm'", description: 'Altura e fonte.' },
            { name: 'withRemoveButton', type: 'boolean', default: 'false', description: 'Exibe o botão de remover.' },
            { name: 'onRemove', type: '() => void', description: 'Chamado ao clicar em remover.' },
            { name: 'removeButtonProps', type: 'object', description: 'Props do botão (ex.: aria-label).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Pill é para valores do usuário (filtros, tags escolhidas). Para status e rótulos fixos (Ativo, Pendente, Alta
          prioridade) use <code>Badge</code>.
        </P>
      </Section>
    </DocPage>
  );
}
