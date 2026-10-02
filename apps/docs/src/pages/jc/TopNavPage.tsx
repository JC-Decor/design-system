import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

const routerCode = `import { Link, useLocation } from 'react-router';
import { TopNav, ThemeToggle } from '@jcdecor/ui';

export function AppNav() {
  const { pathname } = useLocation();
  const links = [
    { label: 'Painéis', href: '/paineis' },
    { label: 'Design System', href: '/design-system' },
  ];

  return (
    <TopNav
      linkComponent={Link}
      links={links.map((link) => ({ ...link, active: pathname.startsWith(link.href) }))}
      rightSection={<ThemeToggle color="gray.0" />}
    />
  );
}`;

export default function TopNavPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="TopNav"
      source="jc"
      sourcePath="packages/ui/src/components/TopNav"
      description="Barra de navegação Obsidian dos painéis (ds-nav): marca à esquerda, links com estado ativo em Electric e slot à direita. Em telas pequenas os links viram um menu hambúrguer."
      importCode={`import { TopNav } from '@jcdecor/ui';`}
    >
      <Section title="Uso">
        <P>
          O exemplo da marca: <code>brand="JC Decor"</code>, links com <code>active</code> e <code>rightSection</code> com{' '}
          <code>ThemeToggle</code> e <code>Avatar</code>. Links sem <code>href</code> são renderizados como <code>&lt;button&gt;</code> e
          usam apenas <code>onClick</code>.
        </P>
        <Demo id="top-nav/usage" />
      </Section>

      <Section title="Marca customizada">
        <P><code>brand</code> aceita qualquer nó — logo, ícone ou um selo de ambiente.</P>
        <Demo id="top-nav/brand" />
      </Section>

      <Section title="Com react-router">
        <P>
          Passe o <code>Link</code> do roteador em <code>linkComponent</code>: links e marca recebem <code>to</code> (e <code>href</code>)
          a partir de <code>href</code>/<code>brandHref</code>. Calcule <code>active</code> a partir da rota atual.
        </P>
        <CodeBlock code={routerCode} />
      </Section>

      <Section title="Mobile">
        <P>
          Abaixo de 640px os links são escondidos e um <code>Burger</code> abre a lista em um <code>Collapse</code> logo abaixo da barra;
          clicar em um link fecha o menu. Desative com <code>collapseOnMobile={'{false}'}</code>.
        </P>
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'brand', type: 'ReactNode', default: "'JC Decor'", description: 'Marca à esquerda (sempre renderizada como link).' },
            { name: 'brandHref', type: 'string', default: "'/'", description: 'Destino do link da marca.' },
            { name: 'links', type: 'TopNavLink[]', default: '[]', description: '{ label, href?, active?, onClick? } — sem href vira <button>.' },
            { name: 'linkComponent', type: 'React.ElementType', default: "'a'", description: 'Componente dos links (ex.: Link do react-router), recebe to/href.' },
            { name: 'rightSection', type: 'ReactNode', description: 'Conteúdo à direita (ThemeToggle, avatar, botões).' },
            { name: 'collapseOnMobile', type: 'boolean', default: 'true', description: 'Esconde os links em telas pequenas e mostra um hambúrguer.' },
          ]}
        />
        <P>
          Styles API: <code>root · brand · links · link · right · burger · mobileLinks</code>. O link ativo recebe <code>data-active</code> e{' '}
          <code>aria-current="page"</code>.
        </P>
      </Section>
    </DocPage>
  );
}
