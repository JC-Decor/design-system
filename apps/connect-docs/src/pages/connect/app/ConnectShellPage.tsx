import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc
import { Shell } from '@/components/ui/Shell';
<Shell primary={primary} perspective={perspective} activeKey="rh.colab" onNavigate={onNavigate}
  headerTitle="Colaboradores" breadcrumb={['Visão RH', 'Colaboradores']}>
  …
</Shell>

// @jcdecor/connect-ui — mesmas props + slots do cabeçalho
import { ConnectShell, PerspectiveSwitcherContext } from '@jcdecor/connect-ui';
<ConnectShell perspective={perspective} activeKey="rh.colab" onNavigate={onNavigate}
  headerTitle="Colaboradores" breadcrumb={['Visão RH', 'Colaboradores']}
  sidebarProps={{ logo: <img src="/logo.png" alt="JC Decor" height={40} /> }}
  headerProps={{ search: <BuscaGlobal />, actions: <NotificationBell />, userMenuItems }}>
  …
</ConnectShell>`;

export default function ConnectShellPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="ConnectShell"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ConnectShell"
      mantineName="app-shell"
      description="A casca de todas as telas: AppSidebar à esquerda, AppHeader fixo no topo e o conteúdo. Construída sobre o AppShell do Mantine; abaixo de 1024px a sidebar vira gaveta com hambúrguer e fundo escurecido."
      importCode={`import { ConnectShell } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          Passe a <code>perspective</code>, o <code>activeKey</code> e <code>onNavigate</code>; o cabeçalho recebe{' '}
          <code>headerTitle</code>, <code>headerSubtitle</code> e <code>breadcrumb</code>, e o resto (busca, ações, menu do usuário) vai
          em <code>headerProps</code>. O conteúdo fica em uma coluna com padding 24/32 e espaço de 22px entre blocos. Nos exemplos,{' '}
          <code>mode="static"</code> prende o shell a uma caixa; no app, use o padrão (<code>fixed</code>).
        </P>
        <Demo id="cn-connect-shell/basic" />
      </Section>

      <Section title="Mobile (gaveta)">
        <P>
          Abaixo de 1024px o cabeçalho mostra o hambúrguer e a sidebar entra pela esquerda (até 280px) sobre um fundo escurecido.
          Ela fecha ao navegar, ao tocar no fundo, com Esc ou no botão "Fechar menu"; enquanto aberta, a rolagem da página trava e,
          fechada, fica <code>inert</code> (fora da ordem de tabulação). <code>forceMobile</code> força esse modo.
        </P>
        <Demo id="cn-connect-shell/mobile" />
      </Section>

      <Section title="Troca de perspectiva">
        <P>
          Com um <code>PerspectiveSwitcherContext.Provider</code> acima (como no <code>AppProviders</code> do connect-jc), a pílula da
          sidebar vira o seletor de perspectiva.
        </P>
        <Demo id="cn-connect-shell/perspectives" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'perspective', type: 'Perspective', required: true, description: 'Navegação e usuário.' },
            { name: 'activeKey', type: 'string', required: true, description: 'Item ativo (a gaveta fecha quando muda).' },
            { name: 'onNavigate', type: '(key, opts?) => void', required: true, description: 'Navegação.' },
            { name: 'headerTitle / headerSubtitle / breadcrumb', type: 'ReactNode / ReactNode / ReactNode[]', description: 'Cabeçalho.' },
            { name: 'primary', type: 'string', description: 'Fundo da sidebar.' },
            { name: 'sidebarWidth', type: 'number', default: '248', description: 'Largura da sidebar no desktop.' },
            { name: 'sidebarProps', type: 'Partial<AppSidebarProps>', description: 'logo, footer, id…' },
            { name: 'headerProps', type: 'Partial<AppHeaderProps>', description: 'search, actions, userMenuItems, withThemeToggle…' },
            { name: 'forceMobile', type: 'boolean', description: 'Força o modo gaveta.' },
            { name: 'contentClassName / contentStyle', type: '—', description: 'Área de conteúdo (.content).' },
            { name: 'mode', type: "'fixed' | 'static'", default: "'fixed'", description: 'static = dentro de um contêiner (prévias, iframes).' },
            { name: '...AppShellProps', type: 'AppShellProps', description: 'Demais props do AppShell (h, transitionDuration…).' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          <code>Shell</code> vira <code>ConnectShell</code> com as mesmas props. O cabeçalho deixou de buscar sessão/notificações sozinho:
          envie busca, sino e menu do usuário em <code>headerProps</code>. O <code>PerspectiveSwitcherContext</code> também é exportado
          pelo pacote.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
