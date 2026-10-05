import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function CascaderPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="Cascader"
      source="mantine"
      mantineName="cascader"
      description="Novo no Mantine 9: seleção hierárquica em colunas — Estado → Cidade → Bairro de entrega, ou categoria → subcategoria."
      importCode={`import { Cascader } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          <code>data</code> é uma árvore de <code>{'{ value, label, children }'}</code>; o valor é o caminho completo (
          <code>['sp', 'sao-paulo', 'pinheiros']</code>). Por padrão só folhas podem ser escolhidas.
        </P>
        <Demo id="cascader/basic" />
      </Section>

      <Section title="Busca e hover">
        <P>
          <code>searchable</code> busca pelo caminho inteiro; <code>expandTrigger="hover"</code> abre a próxima coluna ao passar o mouse (com
          área segura para o cursor).
        </P>
        <Demo id="cascader/searchable" />
      </Section>

      <Section title="Qualquer nível e lista plana">
        <P>
          <code>changeOnSelect</code> permite escolher níveis intermediários; <code>withColumns={'{false}'}</code> mostra uma lista de caminhos,
          melhor em telas estreitas.
        </P>
        <Demo id="cascader/change-on-select" />
      </Section>

      <Section title="No tema JC">
        <P>
          A coluna em navegação usa <code>--ds-primary-soft</code> com texto <code>--ds-primary</code> (no lugar do azul sólido do Mantine), o
          caminho já percorrido nas colunas anteriores usa <code>--ds-surface-2</code> e os divisores de coluna usam{' '}
          <code>--ds-border-soft</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'CascaderOption[]', required: true, description: 'Árvore de opções.' },
            { name: 'value / onChange', vueName: 'v-model', type: 'string[] | null', description: 'Caminho da raiz até o nó.' },
            { name: 'changeOnSelect', type: 'boolean', default: 'false', description: 'Permite escolher níveis intermediários.' },
            { name: 'expandTrigger', type: "'click' | 'hover'", default: "'click'", description: 'Como a próxima coluna abre.' },
            { name: 'searchable', type: 'boolean', default: 'false', description: 'Busca pelos caminhos.' },
            { name: 'withColumns', type: 'boolean', default: 'true', description: 'Colunas ou lista plana.' },
            { name: 'separator / formatValue', type: 'ReactNode / fn', vueType: 'string | slot #separator / fn', description: 'Como o caminho aparece no campo.' },
            { name: 'maxDisplayedLevels', type: 'number', default: '3', description: 'Colunas visíveis lado a lado.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Bom para até 3–4 níveis. Para árvores com muitos nós por nível, ou quando é preciso marcar vários, prefira <code>TreeSelect</code>.
          No mobile use <code>withColumns={'{false}'}</code> + <code>searchable</code>.
        </P>
      </Section>
    </DocPage>
  );
}
