import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc
import { Sidebar } from '@/components/ui/Sidebar';
import type { Perspective } from '@/components/ui/types';

// @jcdecor/connect-ui — mesmas props e tipos (Perspective, NavItem, NavConfig, UserConfig…)
import { AppSidebar, type Perspective } from '@jcdecor/connect-ui';

<AppSidebar
  perspective={perspective}
  activeKey={activeKey}
  onNavigate={onNavigate}
  logo={<img src="/logo.png" alt="JC Decor" height={40} />}
/>`;

export default function AppSidebarPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="AppSidebar"
      source="connect"
      sourcePath="packages/connect-ui/src/components/AppSidebar"
      description="A sidebar navy do Connect (.sb): textura sutil, marca, pílula ou seletor de perspectiva, navegação primária e secundária com grupos expansíveis, indicador do item ativo, selos e rodapé com arte."
      importCode={`import { AppSidebar } from '@jcdecor/connect-ui';\nimport type { Perspective, NavItem } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          A navegação vem de <code>perspective.nav</code> (<code>primary</code> e <code>secondary</code>, separadas por uma linha).
          Itens com <code>children</code> viram grupos expansíveis (<code>aria-expanded</code>); o grupo do filho ativo abre sozinho e,
          recolhido, fica em destaque suave. O item ativo ganha fundo, <code>aria-current="page"</code> e o indicador branco à
          esquerda. <code>badge</code> mostra um contador coral em itens e filhos.
        </P>
        <Demo id="cn-app-sidebar/basic" />
      </Section>

      <Section title="Seletor de perspectiva">
        <P>
          Com <code>perspectiveOptions</code> + <code>onSwitchPerspective</code>, a pílula vira um menu (teclado e Esc) com avatar no
          tom de cada visão e check na atual. Sem eles, é só uma etiqueta.
        </P>
        <Demo id="cn-app-sidebar/perspectives" />
      </Section>

      <Section title="Personalização e gaveta">
        <P>
          <code>primary</code> troca o fundo (cor ou gradiente), <code>logo</code> substitui a marca e <code>footer=&#123;null&#125;</code>{' '}
          remove o rodapé. <code>isDrawer</code> + <code>onClose</code> é o modo gaveta do mobile: largura fluida e botão "Fechar menu"
          — o <code>ConnectShell</code> cuida disso automaticamente.
        </P>
        <Demo id="cn-app-sidebar/custom" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'perspective', type: 'Perspective', required: true, description: '{ key, label, user, nav: { primary, secondary } }' },
            { name: 'activeKey', type: 'string', required: true, description: 'Item ou filho ativo.' },
            { name: 'onNavigate', type: '(key, opts?) => void', required: true, description: 'Clique em item/filho.' },
            { name: 'primary', type: 'string', default: 'navy', description: 'Fundo (cor ou gradiente CSS).' },
            { name: 'width', type: 'number', default: '248', description: 'Largura no desktop.' },
            { name: 'perspectiveOptions / onSwitchPerspective', type: 'PerspectiveOption[] / (key) => void', description: 'Seletor de perspectiva.' },
            { name: 'isDrawer / onClose', type: 'boolean / () => void', description: 'Modo gaveta com botão de fechar.' },
            { name: 'logo', type: 'ReactNode', description: 'Marca no topo (padrão: selo "JC" + Painel do Colaborador).' },
            { name: 'footer', type: 'ReactNode | null', description: 'Rodapé (padrão: Painel do Colaborador + copyright); null remove.' },
            { name: 'id', type: 'string', default: "'app-sidebar'", description: 'Alvo do aria-controls do hambúrguer.' },
            { name: 'aria-label', type: 'string', default: "'Menu principal'", description: 'Nome da região.' },
          ]}
        />
        <PropsTable
          rows={[
            { name: 'NavItem', type: '{ key, label, icon?, children?, badge? }', description: 'icon = nome de ícone do Connect (padrão home).' },
            { name: 'NavChild', type: '{ key, label, badge? }', description: 'Subitem de um grupo.' },
            { name: 'UserConfig', type: '{ name, role, seed, tone, picture? }', description: 'Usuário da perspectiva (usado pelo cabeçalho).' },
            { name: 'PerspectiveOption', type: '{ key, label, userSeed, userTone }', description: 'Opção do seletor.' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Renomeie <code>Sidebar</code> para <code>AppSidebar</code>; props e tipos são os mesmos. O logo deixa de ser o{' '}
          <code>/logo.png</code> fixo: passe-o em <code>logo</code>. Novidades: <code>badge</code> nos itens, <code>footer</code> e{' '}
          <code>primary</code> opcional.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
