import { HeaderAction } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc: <Header> lia sessão, notificações e logout por conta própria.
// @jcdecor/connect-ui: tudo entra por props/slots.
import { AppHeader, GlobalSearchBox, HeaderAction } from '@jcdecor/connect-ui';

<AppHeader
  title="Colaboradores"
  breadcrumb={['Visão RH', 'Pessoas', 'Colaboradores']}
  user={perspective.user}
  search={<BuscaGlobal />}                    // wrapper com useGlobalSearch
  actions={<NotificationBell />}               // pode usar <HeaderAction icon="bell" badge={n} />
  userMenuItems={[
    { key: 'profile', label: 'Meu perfil', icon: 'user', onSelect: openNexusPortal },
    { key: 'sep', type: 'separator' },
    { key: 'logout', label: 'Sair', icon: 'x', tone: 'danger', onSelect: () => void logout() },
  ]}
/>`;

export default function AppHeaderPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="AppHeader"
      source="connect"
      sourcePath="packages/connect-ui/src/components/AppHeader"
      description="Cabeçalho das telas (.hd): trilha, título e subtítulo mono, busca, ações com selo, alternância de tema e chip do usuário com menu. Translúcido, com blur, fixo no topo da área principal."
      importCode={`import { AppHeader, HeaderAction } from '@jcdecor/connect-ui';`}
    >
      <Section title="Completo">
        <P>
          <code>search</code> recebe a busca (normalmente <code>GlobalSearchBox</code>), <code>actions</code> os ícones à direita e{' '}
          <code>userMenuItems</code> o menu do chip do usuário. O avatar usa as iniciais <code>seed</code> no tom <code>tone</code> ou a
          foto <code>picture</code>.
        </P>
        <Demo id="cn-app-header/basic" />
      </Section>

      <Section title="Variações">
        <P>
          Só o título; sem <code>userMenuItems</code> o chip do usuário é estático; <code>withThemeToggle=&#123;false&#125;</code> esconde
          a alternância de tema.
        </P>
        <Demo id="cn-app-header/minimal" />
      </Section>

      <Section title="Mobile">
        <P>
          <code>showMenuButton</code> mostra o hambúrguer (<code>aria-controls</code> aponta para a sidebar) e, por padrão, recolhe a
          busca atrás de um ícone (<code>compactSearch</code>): ao abrir, ela ocupa a linha inteira e recebe o foco. No{' '}
          <code>ConnectShell</code> isso é automático abaixo de 1024px.
        </P>
        <Demo id="cn-app-header/mobile" />
      </Section>

      <Section title="HeaderAction">
        <P>
          Botão de ícone 40×40 (<code>.hd-icon</code>) com selo coral opcional (<code>badge</code>; <code>0</code> esconde). Aceita{' '}
          <code>ref</code>, então serve de gatilho para <code>Popover</code>/<code>Menu</code> — como o sino de notificações.
        </P>
        <Demo id="cn-app-header/actions" />
        <Configurator
          component={HeaderAction}
          name="HeaderAction"
          controls={[
            { prop: 'icon', type: 'select', data: ['bell', 'chat', 'calendar', 'help', 'gear', 'search'], initialValue: 'bell' },
            { prop: 'label', type: 'string', initialValue: 'Notificações' },
            { prop: 'badge', type: 'number', initialValue: 3, min: 0 },
          ]}
        />
      </Section>

      <Section title="Props — AppHeader">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', description: 'Título da página (h1, 26/700; 22px ≤1024, 20px ≤560).' },
            { name: 'subtitle', type: 'ReactNode', description: 'Linha mono abaixo do título.' },
            { name: 'breadcrumb', type: 'ReactNode[]', description: 'Trilha; o último item é a página atual (some ≤560px).' },
            { name: 'user', type: 'UserConfig', description: '{ name, role, seed, tone, picture? }' },
            { name: 'userMenuItems', type: 'DropdownMenuEntry[]', description: 'Menu do chip do usuário.' },
            { name: 'search', type: 'ReactNode', description: 'Busca (GlobalSearchBox).' },
            { name: 'compactSearch', type: 'boolean', default: 'showMenuButton', description: 'Recolhe a busca atrás de um ícone.' },
            { name: 'actions', type: 'ReactNode', description: 'Ícones à direita (HeaderAction).' },
            { name: 'withThemeToggle', type: 'boolean', default: 'true', description: 'Mostra o ThemeToggle.' },
            { name: 'showMenuButton / menuOpen / onMenuToggle', type: 'boolean / boolean / () => void', description: 'Hambúrguer do mobile.' },
            { name: 'menuControls', type: 'string', default: "'app-sidebar'", description: 'id da sidebar controlada.' },
            { name: 'children', type: 'ReactNode', description: 'Linha extra abaixo (ex.: abas).' },
          ]}
        />
      </Section>

      <Section title="Props — HeaderAction">
        <PropsTable
          rows={[
            { name: 'icon', type: 'string | ReactNode', required: true, description: 'Ícone do Connect ou nó.' },
            { name: 'label', type: 'string', required: true, description: 'aria-label e title (o selo entra no nome acessível).' },
            { name: 'badge', type: 'ReactNode', description: 'Contador no canto.' },
            { name: '...button', type: 'ComponentPropsWithRef<"button">', description: 'onClick, ref, disabled…' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          O <code>Header</code> original dependia de autenticação, notificações e do hook de mídia. O <code>AppHeader</code> é
          apresentacional: passe busca, sino e itens do menu por props. Ao usar o <code>ConnectShell</code>, envie-os em{' '}
          <code>headerProps</code>.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
