import { Autocomplete } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

const sugestoes = ['Férias', 'Banco de horas', 'Holerite', 'Plano de saúde', 'Vale-refeição', 'Atestado médico', 'Feedback 1:1'];

export default function AutocompletePage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="Autocomplete"
      source="mantine"
      mantineName="autocomplete"
      description="Campo de texto livre com sugestões. Diferente do Select, o valor pode ser qualquer texto — ideal para a busca global do painel e para mencionar pessoas."
      importCode={`import { Autocomplete } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Autocomplete}
          name="Autocomplete"
          previewWidth={320}
          baseProps={{ data: sugestoes }}
          codeProps={{ data: "['Férias', 'Banco de horas', 'Holerite', …]" }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Buscar no painel' },
            { prop: 'placeholder', type: 'string', initialValue: 'Pessoas, documentos, solicitações…' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'clearable', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Busca com limite">
        <P>Use <code>limit</code> para mostrar só as primeiras sugestões em listas grandes.</P>
        <Demo id="autocomplete/basic" />
      </Section>

      <Section title="Grupos">
        <Demo id="autocomplete/groups" />
      </Section>

      <Section title="Sugestões ricas">
        <Demo id="autocomplete/render-option" />
      </Section>

      <Section title="Dados assíncronos">
        <P>
          Consulte a API com debounce e mostre um <code>Loader</code>. Passe <code>filter={'{({ options }) => options}'}</code> para não
          filtrar de novo o que a API já filtrou.
        </P>
        <Demo id="autocomplete/async" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Mesmo campo dos inputs do Connect (md, 40px) e mesmo dropdown do Select: hover e navegação por teclado em{' '}
          <code>--ds-surface-2</code>, rótulos de grupo em caption <code>--ds-text-3</code>, dropdown em <code>--ds-surface</code> com{' '}
          <code>--ds-shadow-md</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'ComboboxStringData', description: 'Sugestões (strings ou grupos).' },
            { name: 'value / onChange', type: 'string', description: 'Texto do campo.' },
            { name: 'limit', type: 'number', description: 'Máximo de sugestões exibidas.' },
            { name: 'filter', type: 'OptionsFilter', description: 'Filtro personalizado das sugestões.' },
            { name: 'renderOption', type: '(input) => ReactNode', description: 'Renderização personalizada.' },
            { name: 'clearable', type: 'boolean', default: 'false', description: 'Botão de limpar.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Se o valor precisa obrigatoriamente vir da lista, use <code>Select</code> com <code>searchable</code>. Mostre poucas sugestões (5–8)
          e destaque buscas recentes em um grupo próprio.
        </P>
      </Section>
    </DocPage>
  );
}
