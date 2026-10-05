import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';
import { CodeBlock } from '../../../kit/CodeBlock';

export default function AppShellPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="AppShell"
      source="mantine"
      mantineName="app-shell"
      description="Estrutura de aplicação com header, navbar, aside, footer e área principal. Use em painéis internos e áreas logadas, como o painel de pedidos."
      importCode={`import { AppShell } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          Configure as dimensões de cada região nas props <code>header</code>, <code>navbar</code>, <code>aside</code> e <code>footer</code> e
          coloque o conteúdo nos subcomponentes correspondentes. A navbar pode ser recolhida separadamente no mobile e no desktop com{' '}
          <code>collapsed</code>. Nas demos usamos <code>mode="static"</code> para o shell ficar dentro da prévia; na aplicação, o padrão{' '}
          <code>fixed</code> fixa as regiões na viewport.
        </P>
        <Demo id="app-shell/basic" />
      </Section>

      <Section title="Layout alternativo, aside e footer">
        <P>
          Com <code>layout="alt"</code>, navbar e aside ocupam toda a altura e o header/footer ficam entre eles. Útil quando a navegação lateral
          carrega a marca.
        </P>
        <Demo id="app-shell/alt-layout" />
      </Section>

      <Section title="Estrutura recomendada">
        <OnlyFor framework="react">
        <CodeBlock
          code={`<AppShell
  header={{ height: 64 }}
  navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
  padding="lg"
>
  <AppShell.Header>…</AppShell.Header>
  <AppShell.Navbar>…</AppShell.Navbar>
  <AppShell.Main>…</AppShell.Main>
</AppShell>`}
        />
        </OnlyFor>
        <OnlyFor framework="vue">
          <CodeBlock
            language="vue"
            code={`<AppShell
  :header="{ height: 64 }"
  :navbar="{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }"
  padding="lg"
>
  <AppShellHeader>…</AppShellHeader>
  <AppShellNavbar>…</AppShellNavbar>
  <AppShellMain>…</AppShellMain>
</AppShell>`}
          />
        </OnlyFor>
      </Section>

      <Section title="No tema JC">
        <P>
          O fundo de <OnlyFor framework="react"><code>AppShell.Main</code></OnlyFor><OnlyFor framework="vue"><code>AppShellMain</code></OnlyFor> usa <code>--ds-bg</code> (cinza-frio da página), enquanto header, navbar, aside e footer usam{' '}
          <code>--ds-surface</code> com bordas <code>--ds-border-soft</code> — no tema escuro, os mesmos tokens trocam automaticamente.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'header / footer', type: '{ height, collapsed?, offset? }', description: 'Altura (responsiva) e estado das barras.' },
            { name: 'navbar / aside', type: '{ width, breakpoint, collapsed? }', description: 'Largura e breakpoint a partir do qual a região fica fixa ao lado.' },
            { name: 'layout', type: "'default' | 'alt'", default: "'default'", description: 'Como navbar/aside se posicionam em relação a header/footer.' },
            { name: 'mode', type: "'fixed' | 'static'", default: "'fixed'", description: 'static coloca as regiões no fluxo (embutido em outra página).' },
            { name: 'padding', type: 'MantineSpacing', default: '0', description: 'Padding da área principal.' },
            { name: 'withBorder', type: 'boolean', default: 'true', description: 'Bordas entre as regiões.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use <code>AppShell</code> só no nível da aplicação (um por página). Na loja, prefira a <code>TopNav</code> da marca com{' '}
          <code>Container</code>; o AppShell é para painéis com navegação lateral persistente.
        </P>
      </Section>
    </DocPage>
  );
}
