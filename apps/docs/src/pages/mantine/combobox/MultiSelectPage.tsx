import { MultiSelect } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];

export default function MultiSelectPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="MultiSelect"
      source="mantine"
      mantineName="multi-select"
      description="Seleção de vários valores de uma lista, exibidos como pills no estilo das tags da marca."
      importCode={`import { MultiSelect } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={MultiSelect}
          name="MultiSelect"
          previewWidth={360}
          baseProps={{ data: categorias, defaultValue: ['Pisos vinílicos', 'Cortinas'] }}
          codeProps={{ data: "['Pisos vinílicos', 'Papel de parede', …]" }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Categorias' },
            { prop: 'placeholder', type: 'string', initialValue: 'Escolha categorias' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'searchable', type: 'boolean', initialValue: false },
            { prop: 'clearable', type: 'boolean', initialValue: false },
            { prop: 'hidePickedOptions', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Busca e limpar">
        <Demo id="multi-select/searchable" />
      </Section>

      <Section title="Máximo de valores">
        <P>
          <code>maxValues</code> limita a quantidade de itens; com <code>hidePickedOptions</code> os escolhidos saem da lista, útil em
          comparadores.
        </P>
        <Demo id="multi-select/max-values" />
      </Section>

      <Section title="Grupos">
        <Demo id="multi-select/groups" />
      </Section>

      <Section title="Opções personalizadas">
        <P>
          Exemplo com amostras de acabamento. As cores das amostras são dados do produto, não cores de interface.
          <OnlyFor framework="vue">
            {' '}
            No Vue, personalize a opção com o slot <code>#renderOption="{'{ option, checked }'}"</code>.
          </OnlyFor>
        </P>
        <Demo id="multi-select/render-option" />
      </Section>

      <Section title="No tema JC">
        <P>
          As pills usam os tokens de tag neutra (<code>--ds-tag-neutral-bg</code> / <code>-color</code>), peso 500 e cantos arredondados, igual
          ao <code>.ds-tag</code>; o botão de remover ganha hover em <code>--ds-tag-neutral-hover</code>. Opções marcadas ficam em{' '}
          <code>--ds-primary-soft</code> com texto <code>--ds-primary</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'ComboboxData', description: 'Opções ou grupos.' },
            { name: 'value / onChange', vueName: 'v-model', type: 'string[]', description: 'Valores controlados.' },
            { name: 'maxValues', type: 'number', description: 'Limite de itens selecionados.' },
            { name: 'hidePickedOptions', type: 'boolean', default: 'false', description: 'Remove da lista os itens já escolhidos.' },
            { name: 'searchable', type: 'boolean', default: 'false', description: 'Permite filtrar digitando.' },
            { name: 'clearable', type: 'boolean', default: 'false', description: 'Botão para limpar todos os valores.' },
            { name: 'renderPill', vueName: 'renderPill / #renderPill', type: '(props) => ReactNode', vueType: '(props) => VNode | slot', description: 'Renderização personalizada das pills.' },
            { name: 'withPillsReorder', type: 'boolean', default: 'false', description: 'Permite reordenar as pills arrastando (v9).', only: 'react' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Para poucos itens visíveis de uma vez (até ~6), <code>Checkbox.Group</code> ou <code>Chip</code> são mais rápidos. Se o usuário
          pode criar valores novos, use <code>TagsInput</code>.
        </P>
      </Section>
    </DocPage>
  );
}
