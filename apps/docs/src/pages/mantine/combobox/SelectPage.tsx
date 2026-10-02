import { Select } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];

export default function SelectPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="Select"
      source="mantine"
      mantineName="select"
      description="Campo para escolher um único valor de uma lista. Herda a aparência dos inputs da marca (40px, texto de 16px) e o dropdown com opções em superfície suave e seleção em azul Horizon."
      importCode={`import { Select } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Select}
          name="Select"
          previewWidth={320}
          baseProps={{ data: categorias, comboboxProps: { withinPortal: true } }}
          codeProps={{ data: "['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', …]" }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Categoria' },
            { prop: 'placeholder', type: 'string', initialValue: 'Escolha uma categoria' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'variant', type: 'segmented', data: ['default', 'filled', 'unstyled'], initialValue: 'default' },
            { prop: 'checkIconPosition', type: 'segmented', data: ['left', 'right'], initialValue: 'left' },
            { prop: 'searchable', type: 'boolean', initialValue: false },
            { prop: 'clearable', type: 'boolean', initialValue: false },
            { prop: 'withAsterisk', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Busca">
        <P>
          Com <code>searchable</code> o usuário digita para filtrar. Sempre informe um <code>nothingFoundMessage</code> em português para
          quando nada combinar com a busca.
        </P>
        <Demo id="select/searchable" />
      </Section>

      <Section title="Valor padrão e limpar">
        <P>
          Use <code>allowDeselect={'{false}'}</code> quando sempre deve haver um valor (ordenação) e <code>clearable</code> quando o campo é
          um filtro opcional.
        </P>
        <Demo id="select/clearable" />
      </Section>

      <Section title="Grupos">
        <P>Passe objetos <code>{'{ group, items }'}</code> em <code>data</code>. O rótulo do grupo usa caption (12px, 600) em <code>--ds-text-3</code>.</P>
        <Demo id="select/groups" />
      </Section>

      <Section title="Opções personalizadas">
        <P>
          <code>renderOption</code> recebe a opção e o estado <code>checked</code>. Ideal para mostrar ícone da categoria e contagem de produtos.
        </P>
        <Demo id="select/render-option" />
      </Section>

      <Section title="Carregamento assíncrono">
        <P>Carregue os dados ao abrir o dropdown e mostre um <code>Loader</code> na seção direita enquanto a requisição acontece.</P>
        <Demo id="select/async" />
      </Section>

      <Section title="Estados">
        <Demo id="select/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Tamanho padrão <code>md</code> (40px, fonte 16px). No dropdown, o hover/teclado usa <code>--ds-surface-2</code>, a opção marcada
          usa <code>--ds-primary-soft</code> com texto <code>--ds-primary</code> em peso 500, raio de 8px nas opções e rótulos de grupo em
          caption. O dropdown usa <code>--ds-surface</code>, borda <code>--ds-border-soft</code> e <code>--ds-shadow-md</code>, corretos
          também no tema escuro.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'ComboboxData', description: 'Opções: strings, { value, label, disabled } ou { group, items }.' },
            { name: 'value / onChange', type: 'string | null', description: 'Valor controlado; onChange recebe (value, option).' },
            { name: 'searchable', type: 'boolean', default: 'false', description: 'Permite filtrar digitando.' },
            { name: 'clearable', type: 'boolean', default: 'false', description: 'Mostra o botão de limpar quando há valor.' },
            { name: 'allowDeselect', type: 'boolean', default: 'true', description: 'Clicar na opção marcada remove a seleção.' },
            { name: 'nothingFoundMessage', type: 'ReactNode', description: 'Mensagem quando a busca não encontra nada.' },
            { name: 'renderOption', type: '(input) => ReactNode', description: 'Renderização personalizada de cada opção.' },
            { name: 'comboboxProps', type: 'ComboboxProps', description: 'Props do Combobox/Popover (posição, largura, portal…).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Select para listas de 5 a ~50 itens; para 2–4 opções prefira <code>SegmentedControl</code> ou <code>Radio</code>. Ative{' '}
          <code>searchable</code> a partir de ~10 opções. Para vários valores use <code>MultiSelect</code>; para valor livre com sugestões,{' '}
          <code>Autocomplete</code>.
        </P>
      </Section>
    </DocPage>
  );
}
