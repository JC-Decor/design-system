import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { CodeBlock } from '../../../kit/CodeBlock';

export default function AppShellPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="AppShell"
      source="mantine"
      mantineName="app-shell"
      description="Estrutura de aplicação com header, navbar, aside, footer e área principal. É a base do Painel do Colaborador: sidebar navy, header com busca e avatar e conteúdo sobre o fundo da página."
      importCode={`import { AppShell } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso básico">
        <P>
          Configure as dimensões de cada região nas props <code>header</code>, <code>navbar</code>, <code>aside</code> e <code>footer</code> e
          coloque o conteúdo nos subcomponentes correspondentes. A navbar pode ser recolhida separadamente no mobile e no desktop com{' '}
          <code>collapsed</code>. Nas demos usamos <code>mode="static"</code> para o shell ficar dentro da prévia; na aplicação, o padrão{' '}
          <code>fixed</code> fixa as regiões na viewport. A demo reproduz o painel do Connect: sidebar de 264px, header de 64px e cards de KPI na área principal.
        </P>
        <Demo id="app-shell/basic" />
      </Section>

      <Section title="Layout alternativo, aside e footer">
        <P>
          Com <code>layout="alt"</code>, navbar e aside ocupam toda a altura e o header/footer ficam entre eles. Útil quando a sidebar
          carrega a marca e o header mostra o contexto da tela — aqui, o perfil de uma colaboradora com um resumo no aside.
        </P>
        <Demo id="app-shell/alt-layout" />
      </Section>

      <Section title="Estrutura recomendada">
        <CodeBlock
          code={`<AppShell
  header={{ height: 64 }}
  navbar={{ width: 264, breakpoint: 'sm', collapsed: { mobile: !opened } }}
  padding="lg"
>
  <AppShell.Header>…</AppShell.Header>
  <AppShell.Navbar>…</AppShell.Navbar>
  <AppShell.Main>…</AppShell.Main>
</AppShell>`}
        />
      </Section>

      <Section title="No tema Connect">
        <P>
          O fundo de <code>AppShell.Main</code> usa <code>--ds-bg</code> (fundo da página), enquanto header, navbar, aside e footer usam{' '}
          <code>--ds-surface</code> com bordas <code>--ds-border-soft</code> — no tema escuro, os mesmos tokens trocam automaticamente.
        </P>
        <P>
          A sidebar navy do Connect não é o padrão do tema: aplique <code>bg="var(--cn-sidebar)"</code>, <code>c="white"</code> e{' '}
          <code>withBorder={'{false}'}</code> no <code>AppShell.Navbar</code>, como nas demos. A largura recomendada é a do grid do painel,{' '}
          <code>264px</code>.
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
          Use <code>AppShell</code> só no nível da aplicação (um por página). O Connect também tem um shell pronto, com sidebar, header e
          troca de perfil — veja em “Componentes Connect”. Use o AppShell direto quando precisar de uma estrutura diferente.
        </P>
      </Section>
    </DocPage>
  );
}
