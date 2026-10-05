import { Pill } from '@jcdecor/ui';
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
      importCode={`import { Pill } from '@jcdecor/ui';`}
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
            { prop: 'children', type: 'string', initialValue: 'Pisos vinílicos' },
          ]}
        />
      </Section>

      <Section title="Variantes">
        <P>
          <code>default</code> é a tag neutra da marca; <code>contrast</code> usa a tag primária (Horizon suave) e serve para destacar um
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

      <Section title="No tema JC">
        <P>
          Fundo <code>--ds-tag-neutral-bg</code>, texto <code>--ds-tag-neutral-color</code>, peso 500 e cantos arredondados (como o{' '}
          <code>.ds-tag</code>). O botão de remover tem hover em <code>--ds-tag-neutral-hover</code>. No escuro os tokens de tag já trazem as
          versões translúcidas.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'default' | 'contrast'", default: "'default'", description: 'Neutra ou primária.' },
            { name: 'size', type: 'MantineSize', default: "'sm'", description: 'Altura e fonte.' },
            { name: 'withRemoveButton', type: 'boolean', default: 'false', description: 'Exibe o botão de remover.' },
            { name: 'onRemove', vueName: '@remove', type: '() => void', description: 'Chamado ao clicar em remover.' },
            { name: 'removeButtonProps', type: 'object', description: 'Props do botão (ex.: aria-label).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Pill é para valores do usuário (filtros, tags escolhidas). Para status e rótulos fixos use <code>Badge</code> ou o <code>Tag</code>{' '}
          da marca.
        </P>
      </Section>
    </DocPage>
  );
}
