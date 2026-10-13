import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc → @jcdecor/connect-ui: mesma API
import { PageToolbar } from '@jcdecor/connect-ui';

<PageToolbar
  chips={[{ key: 'todos', label: 'Todos', count: 248 }, { key: 'pendentes', label: 'Pendentes', tone: 'yellow', count: 9 }]}
  activeChip={aba}
  onChipClick={setAba}
  searchValue={busca}
  onSearchChange={setBusca}
  filters={filtros}
  onFiltersClear={limparFiltros}
  columnOptions={colunas}
  columnVisibility={visiveis}
  onColumnVisibilityChange={setVisiveis}
  actions={<Button>Novo</Button>}
/>`;

export default function PageToolbarPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="PageToolbar"
      source="connect"
      sourcePath="packages/connect-ui/src/components/PageToolbar"
      description="Barra acima das listas (.ptb): chips de filtro rápido à esquerda; busca, filtros, colunas visíveis e ações à direita."
      importCode={`import { PageToolbar } from '@jcdecor/connect-ui';\nimport type { ToolbarChip, ToolbarFilterField } from '@jcdecor/connect-ui';`}
    >
      <Section title="Chips, busca e ações">
        <P>
          Os chips (<code>aria-pressed</code>) mostram contagem e assumem o tom (<code>tone</code>, padrão lavender) quando ativos. A busca
          pode ser controlada (<code>searchValue</code> + <code>onSearchChange</code>) ou guardar o próprio estado; esconda-a com{' '}
          <code>search=&#123;false&#125;</code>. <code>actions</code> fica no fim da linha.
        </P>
        <Demo id="cn-page-toolbar/basic" />
      </Section>

      <Section title="Filtros e colunas">
        <P>
          <code>filters</code> abre um popover com um <code>AppSelect</code> por campo (a opção vazia vira "Todos" ou o{' '}
          <code>placeholder</code>); um ponto indica filtros ativos e "Limpar filtros" aparece com <code>onFiltersClear</code>.{' '}
          <code>columnOptions</code> + <code>onColumnVisibilityChange</code> abrem o menu "Colunas" — a última coluna visível não pode
          ser escondida. Passe o mesmo objeto para <code>columnVisibility</code> do <code>DataTable</code>.
        </P>
        <Demo id="cn-page-toolbar/filters-columns" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'chips', type: 'ToolbarChip[]', description: '{ key, label, tone?, count?, icon? }' },
            { name: 'activeChip / onChipClick', type: 'string / (key) => void', description: 'Chip ativo e clique.' },
            { name: 'search', type: 'boolean', default: 'true', description: 'Mostra o campo de busca.' },
            { name: 'searchValue / onSearchChange', type: 'string / (value) => void', description: 'Busca controlada.' },
            { name: 'searchPlaceholder', type: 'string', default: "'Buscar...'", description: 'Placeholder e aria-label.' },
            { name: 'filters', type: 'ToolbarFilterField[]', description: '{ key, label, value, onChange, options, placeholder? }' },
            { name: 'onFiltersClear', type: '() => void', description: 'Mostra "Limpar filtros" quando há filtro ativo.' },
            { name: 'columnOptions', type: '{ key, label }[]', description: 'Colunas do menu "Colunas".' },
            { name: 'columnVisibility / onColumnVisibilityChange', type: 'Record<string, boolean>', description: 'false = oculta.' },
            { name: 'actions', type: 'ReactNode', description: 'Botões à direita.' },
            { name: 'className / style', type: '—', description: 'Repasse para a raiz.' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API. Os menus agora são <code>Popover</code>/<code>Menu</code> do Mantine (foco preso, Esc fecha, navegação por setas).
          Novidade: <code>icon</code> nos chips. O <code>PillBar</code> que vivia no mesmo arquivo não faz parte deste componente.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
