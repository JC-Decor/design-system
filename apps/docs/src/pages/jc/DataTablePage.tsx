import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function DataTablePage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="DataTable"
      source="jc"
      sourcePath="packages/ui/src/components/DataTable"
      description="Tabela de dados dos painéis: colunas declarativas, ordenação, números formatados em pt-BR, paginação local e estados de carregando e vazio."
      importCode={`import { DataTable, type DataTableColumn } from '@jcdecor/ui';`}
    >
      <Section title="Uso">
        <P>
          Declare as colunas com <code>key</code> (campo da linha) e <code>header</code>. Colunas <code>numeric</code> ficam alinhadas à
          direita, com algarismos tabulares e formatação pt-BR (<code>127237</code> → <code>127.237</code>). Clique no cabeçalho para
          alternar entre crescente, decrescente e sem ordenação.
        </P>
        <Demo id="data-table/usage" />
      </Section>

      <Section title="Paginação">
        <P><code>pageSize</code> ativa a paginação local. O rodapé só aparece quando há mais linhas do que uma página; ordenar volta para a página 1.</P>
        <Demo id="data-table/pagination" />
      </Section>

      <Section title="Células customizadas">
        <P>
          <OnlyFor framework="react"><code>render</code> recebe a linha e retorna qualquer nó — aqui um <code>Tag</code> de estoque.</OnlyFor>
          <OnlyFor framework="vue">
            O slot <code>#cell-&lt;coluna&gt;="{'{ row, index }'}"</code> renderiza a célula — aqui um <code>Tag</code> de estoque na coluna{' '}
            <code>status</code> (declarada só com <code>id</code>). Fora de templates, <code>render</code> também funciona.
          </OnlyFor> <code>format</code> repassa opções
          do <code>Intl.NumberFormat</code>, como moeda.
        </P>
        <Demo id="data-table/render" />
      </Section>

      <Section title="Linhas clicáveis">
        <Demo id="data-table/row-click" />
      </Section>

      <Section title="Carregando e vazio">
        <P>
          <code>loading</code> mostra linhas de skeleton (<code>loadingRows</code>). Sem dados, aparece um <code>EmptyState</code> padrão —
          substitua com <code>empty</code>.
        </P>
        <Demo id="data-table/states" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'columns', type: 'DataTableColumn<T>[]', required: true, description: 'Definição das colunas (veja abaixo).' },
            { name: 'data', type: 'T[]', required: true, description: 'Linhas.' },
            { name: 'rowKey', type: '(row, index) => React.Key', vueType: '(row, index) => PropertyKey', default: 'índice', description: 'Chave única de cada linha.' },
            { name: 'initialSort', type: 'DataTableSort<T>', description: 'Ordenação inicial (modo não controlado): { key, direction }.' },
            { name: 'sort', vueName: 'v-model:sort', type: 'DataTableSort<T> | null', description: 'Ordenação controlada.', vueDescription: 'Ordenação controlada (two-way).' },
            { name: 'onSortChange', vueName: '@sort-change', type: '(sort | null) => void', description: 'Chamado ao clicar em um cabeçalho ordenável.', vueDescription: 'Emitido ao mudar a ordenação (controlada ou não).' },
            { name: 'pageSize', type: 'number', description: 'Ativa paginação local com N linhas por página.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Mostra skeletons no lugar das linhas.' },
            { name: 'loadingRows', type: 'number', default: '5', description: 'Quantidade de linhas de skeleton.' },
            { name: 'empty', type: 'ReactNode', vueType: 'MantineNode | slot #empty', description: 'Conteúdo exibido quando não há linhas.' },
            { name: 'onRowClick', vueName: '@row-click', type: '(row, index) => void', description: 'Torna as linhas clicáveis (e focáveis: Enter/Espaço também acionam).' },
            { name: 'plain', type: 'boolean', default: 'false', description: 'Remove a moldura (card) em volta da tabela.' },
            { name: 'striped', type: 'boolean', default: 'false', description: 'Linhas zebradas.' },
            { name: 'stickyHeader', type: 'boolean', default: 'false', description: 'Cabeçalho fixo ao rolar.' },
            { name: 'tableProps', type: "Omit<TableProps, 'data'>", description: 'Props repassadas ao Table do Mantine.' },
            { name: '#cell-<coluna>', type: '{ row, index }', only: 'vue', description: <>Slot da célula da coluna (<code>key</code> ou <code>id</code>); tem prioridade sobre <code>render</code>.</> },
            { name: '#header-<coluna>', type: 'slot', only: 'vue', description: <>Slot do cabeçalho da coluna; tem prioridade sobre <code>header</code>.</> },
          ]}
        />
        <P>DataTableColumn&lt;T&gt;:</P>
        <PropsTable
          rows={[
            { name: 'key', type: 'keyof T & string', description: 'Campo da linha; também usado para ordenar. Omita em colunas calculadas.' },
            { name: 'id', type: 'string', description: 'Identificador de colunas sem `key` (ex.: status, ações) — use com `render`.' },
            { name: 'header', type: 'ReactNode', vueType: 'MantineNode', required: true, description: 'Conteúdo do cabeçalho.' },
            { name: 'render', type: '(row, index) => ReactNode', vueType: '(row, index) => VNodeChild', description: 'Renderização customizada da célula.', vueDescription: <>Renderização customizada da célula (função <code>h()</code>). Em templates, prefira o slot <code>#cell-&lt;coluna&gt;</code>.</> },
            { name: 'numeric', type: 'boolean', description: 'Alinha à direita, tabular-nums e formata em pt-BR.' },
            { name: 'format', type: 'Intl.NumberFormatOptions', description: 'Opções de formatação para colunas numéricas.' },
            { name: 'sortable', type: 'boolean', description: 'Permite ordenar pela coluna.' },
            { name: 'sortValue', type: '(row) => string | number', description: 'Valor usado na ordenação quando diferente do campo.' },
            { name: 'width', type: 'number | string', description: 'Largura da coluna.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
