import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { TablePagination } from '@jcdecor/connect-ui';

const migrationCode = `// connect-jc (TanStack Table por baixo)
import { DataTable, TablePagination } from '@/components/ui/DataTable';

// @jcdecor/connect-ui — mesma API, sem dependência do TanStack
import { DataTable, TablePagination, CellPerson, type TableColumn } from '@jcdecor/connect-ui';

// Antes: <div className="cell-person"><Avatar …/><div><div className="cell-person-name">…
// Agora:
{ label: 'Colaborador', key: 'nome', render: (r) => <CellPerson name={r.nome} role={r.cargo} seed={r.iniciais} /> }`;

export default function DataTablePage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="DataTable"
      source="connect"
      sourcePath="packages/connect-ui/src/components/DataTable"
      description="A tabela das listas do Connect (.tbl): cabeçalho em caixa alta, ordenação, seleção, linhas expansíveis, ações por linha, esqueleto, estado vazio e paginação. No celular, cada linha vira um cartão."
      importCode={`import { DataTable, TablePagination, CellPerson, CellTitle } from '@jcdecor/connect-ui';\nimport type { TableColumn, SortingState, RowId } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          Defina as colunas com <code>label</code> e <code>key</code> (campo exibido como texto) ou <code>render</code> para conteúdo
          rico. <code>w</code> fixa a largura e <code>align</code> alinha (números à direita). Use <code>getRowId</code> para ids
          estáveis. A tabela foi feita para viver dentro de um card sem padding, encostando nas bordas.
        </P>
        <Demo id="cn-data-table/basic" />
      </Section>

      <Section title="Ordenação">
        <P>
          Com <code>sortable</code> na tabela e <code>sortable</code> na coluna, o cabeçalho vira um botão (↕ → ↑ → ↓ → sem ordem) com{' '}
          <code>aria-sort</code>. A ordenação no cliente compara números, datas e textos em pt-BR (com números naturais). Para ordenar no
          servidor, controle <code>sorting</code>/<code>onSortingChange</code> e passe <code>manualSorting</code>. <code>dense</code>{' '}
          reduz a altura das linhas.
        </P>
        <Demo id="cn-data-table/sorting" />
      </Section>

      <Section title="Seleção">
        <P>
          <code>selectable</code> adiciona checkboxes (o do cabeçalho seleciona a página e fica indeterminado em seleção parcial).
          Controle com <code>selectedRows</code>/<code>onSelectedRowsChange</code> — ids de outras páginas são preservados, e os ids
          voltam com o tipo original. Combine com o <code>SelectionBanner</code> para ações em massa.
        </P>
        <Demo id="cn-data-table/selection" />
      </Section>

      <Section title="Linhas expansíveis">
        <P>
          <code>renderExpandedRow</code> + <code>rowExpandable</code> (booleano ou função por linha) mostram um botão de expandir na
          coluna de ações; sem <code>rowActions</code>, clicar na linha (ou Enter/Espaço) também expande.
        </P>
        <Demo id="cn-data-table/expandable" />
      </Section>

      <Section title="Clique e ações por linha">
        <P>
          <code>onRowClick</code> torna a linha focável e clicável (Enter/Espaço). <code>rowActions</code> devolve as entradas do{' '}
          <code>DropdownMenu</code> do botão ⋮. Use <code>rowAriaLabel</code> para dar nome às linhas.
        </P>
        <Demo id="cn-data-table/row-actions" />
      </Section>

      <Section title="Carregando e vazio">
        <P>
          <code>loading</code> mostra um esqueleto com o número de linhas atual (mínimo 4). Sem linhas, aparece o estado vazio:
          personalize <code>emptyTitle</code>, <code>emptyDescription</code> e o ícone (<code>emptyModule</code>), ou passe seu próprio{' '}
          <code>emptyState</code>.
        </P>
        <Demo id="cn-data-table/states" />
      </Section>

      <Section title="Paginação">
        <P>
          <code>TablePagination</code> (<code>.tbl-pag</code>) mostra "Mostrando 1-5 de 48" e os botões de página, com reticências
          acima de 7 páginas. Sem <code>onPageChange</code>, fica só informativa.
        </P>
        <Demo id="cn-data-table/pagination" />
        <Configurator
          component={TablePagination}
          name="TablePagination"
          centered={false}
          controls={[
            { prop: 'total', type: 'number', initialValue: 248, min: 0 },
            { prop: 'page', type: 'number', initialValue: 6, min: 1 },
            { prop: 'pageSize', type: 'number', initialValue: 10, min: 1 },
          ]}
          baseProps={{ onPageChange: () => {} }}
        />
      </Section>

      <Section title="Células prontas">
        <P>
          <code>CellPerson</code> (<code>.cell-person</code>: avatar + nome + cargo) e <code>CellTitle</code> (<code>.cell-title</code>:
          ícone em quadrado tonal + título + linha secundária).
        </P>
        <Demo id="cn-data-table/cells" />
      </Section>

      <Section title="Props — DataTable">
        <PropsTable
          rows={[
            { name: 'columns', type: 'TableColumn<T>[]', required: true, description: '{ label, key?, w?, align?, render?(row, i), sortable? }' },
            { name: 'rows', type: 'T[]', required: true, description: 'Linhas.' },
            { name: 'getRowId', type: '(row, i) => string | number', default: 'índice', description: 'Id estável (seleção/expansão).' },
            { name: 'onRowClick', type: '(row) => void', description: 'Torna a linha clicável e focável.' },
            { name: 'dense', type: 'boolean', description: 'Linhas com 10px de padding vertical.' },
            { name: 'selectable', type: 'boolean', description: 'Coluna de checkboxes.' },
            { name: 'selectedRows / onSelectedRowsChange', type: 'RowId[] / (ids) => void', description: 'Seleção controlada.' },
            { name: 'sortable', type: 'boolean', default: 'false', description: 'Habilita ordenação nas colunas com sortable.' },
            { name: 'sorting / onSortingChange', type: 'SortingState / (sorting) => void', description: 'Ordenação controlada ([{ id, desc }]).' },
            { name: 'manualSorting', type: 'boolean', default: 'false', description: 'Não reordena no cliente.' },
            { name: 'rowExpandable', type: 'boolean | (row, i) => boolean', description: 'Quais linhas expandem.' },
            { name: 'renderExpandedRow', type: '(row, i) => ReactNode', description: 'Conteúdo da linha expandida.' },
            { name: 'rowActions', type: '(row, i) => DropdownMenuEntry[]', description: 'Menu ⋮ por linha.' },
            { name: 'showRowActions', type: 'boolean', default: 'true', description: 'Mostra a coluna de ações.' },
            { name: 'columnVisibility', type: 'Record<string, boolean>', description: 'false esconde a coluna (id = key).' },
            { name: 'loading', type: 'boolean', description: 'Esqueleto.' },
            { name: 'toolbar', type: 'ReactNode', description: 'Conteúdo acima da tabela.' },
            { name: 'emptyState / emptyTitle / emptyDescription / emptyModule', type: '—', description: "Estado vazio. emptyModule: 'news' | 'people' | 'hierarchy' | 'documents' | 'approvals' | 'generic'." },
            { name: 'rowAriaLabel / getRowClassName / aria-label', type: '—', description: 'Acessibilidade e classes por linha.' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesmas props. Diferenças: o TanStack Table não é mais necessário (o tipo <code>SortingState</code> tem o mesmo formato e{' '}
          <code>onSortingChange</code> recebe o novo valor, não um updater); <code>onSelectedRowsChange</code> devolve os ids com o tipo
          original; o estado vazio usa um ícone em vez da ilustração. Troque os <code>div.cell-*</code> por <code>CellPerson</code>/
          <code>CellTitle</code>.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
