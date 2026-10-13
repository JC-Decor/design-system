import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc: o componente chamava useGlobalSearch e navegava sozinho.
// @jcdecor/connect-ui: apresentacional — a consulta e a navegação ficam no app.
import { GlobalSearchBox } from '@jcdecor/connect-ui';

function BuscaGlobal() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const { isLoading, hasError, results } = useGlobalSearch(q);
  return (
    <GlobalSearchBox
      value={q}
      onChange={setQ}
      loading={isLoading}
      error={hasError}
      groups={[
        { key: 'pessoas', title: 'Pessoas', icon: 'users', items: results.people },
        { key: 'documentos', title: 'Documentos', icon: 'book', items: results.documents },
        { key: 'comunicados', title: 'Comunicados', icon: 'chat', items: results.comunicados },
      ]}
      onSelect={(item, group) => navigate(rotaDoResultado(group.key, item.id))}
    />
  );
}`;

export default function GlobalSearchBoxPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="GlobalSearchBox"
      source="connect"
      sourcePath="packages/connect-ui/src/components/GlobalSearchBox"
      description="A busca do cabeçalho (.hd-search): campo com painel de resultados agrupados (Pessoas, Documentos, Comunicados), estados de carregando, vazio e erro, e atalho de teclado opcional."
      importCode={`import { GlobalSearchBox } from '@jcdecor/connect-ui';\nimport type { GlobalSearchGroup } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          O componente é apresentacional: você faz a consulta a partir de <code>onChange</code> e devolve <code>groups</code>,{' '}
          <code>loading</code> e <code>error</code>. O painel abre a partir de <code>minChars</code> (2) caracteres. ↑/↓ navegam, Enter
          abre o resultado (o primeiro já vem pré-selecionado), Esc fecha. <code>shortcut="mod+K"</code> foca a busca com ⌘K/Ctrl K e
          mostra a dica em <code>&lt;kbd&gt;</code>.
        </P>
        <Demo id="cn-global-search-box/basic" />
      </Section>

      <Section title="Estados">
        <Demo id="cn-global-search-box/states" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'value / defaultValue / onChange', type: 'string', description: 'Texto da busca (controlado ou não).' },
            { name: 'groups', type: 'GlobalSearchGroup[]', default: '[]', description: '{ key, title, icon?, items: { id, label, meta?, icon? }[] }' },
            { name: 'onSelect', type: '(item, group) => void', description: 'Resultado escolhido; a busca é limpa e o painel fecha.' },
            { name: 'loading', type: 'boolean', description: 'Mostra "Buscando…".' },
            { name: 'error', type: 'boolean | string', description: 'true = "Não foi possível concluir a busca."; string personaliza.' },
            { name: 'minChars', type: 'number', default: '2', description: 'Mínimo de caracteres para abrir o painel.' },
            { name: 'placeholder', type: 'string', default: "'Buscar pessoas, documentos, comunicados...'", description: 'Placeholder e aria-label.' },
            { name: 'shortcut', type: 'string', description: "Atalho no formato do useHotkeys (ex.: 'mod+K')." },
            { name: 'expanded / onCloseExpanded / inputRef', type: '—', description: 'Modo expandido do mobile (usado pelo AppHeader).' },
            { name: 'footer', type: 'ReactNode', description: 'Conteúdo no fim do painel (ex.: "Ver todos").' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          O original buscava (<code>useGlobalSearch</code>) e navegava (<code>useNavigate</code>) por conta própria. Agora isso fica num
          pequeno wrapper do app, como abaixo; o visual e o teclado continuam no componente.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
