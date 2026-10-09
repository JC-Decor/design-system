import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

const vueRouterCode = `<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { TopNav, ThemeToggle } from '@jcdecor/vue';

const route = useRoute();
const links = computed(() =>
  [
    { label: 'Painéis', href: '/paineis' },
    { label: 'Design System', href: '/design-system' },
  ].map((link) => ({ ...link, active: route.path.startsWith(link.href) })),
);
</script>

<template>
  <TopNav :link-component="RouterLink" :links="links">
    <template #rightSection><ThemeToggle color="gray.0" /></template>
  </TopNav>
</template>`;

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

      <OnlyFor framework="react">
      <Section title="Com react-router">
        <P>
          Passe o <code>Link</code> do roteador em <code>linkComponent</code>: links e marca recebem <code>to</code> (e <code>href</code>)
          a partir de <code>href</code>/<code>brandHref</code>. Calcule <code>active</code> a partir da rota atual.
        </P>
        <CodeBlock code={routerCode} />
      </Section>
      </OnlyFor>
      <OnlyFor framework="vue">
      <Section title="Com vue-router">
        <P>
          Passe o <code>RouterLink</code> em <code>:link-component</code>: links e marca recebem <code>to</code> (e <code>href</code>) a
          partir de <code>href</code>/<code>brand-href</code>. Calcule <code>active</code> a partir da rota atual.
        </P>
        <CodeBlock code={vueRouterCode} language="vue" />
      </Section>
      </OnlyFor>

      <Section title="Mobile">
        <P>
          Abaixo de 640px os links são escondidos e um <code>Burger</code> abre a lista em um <code>Collapse</code> logo abaixo da barra;
          clicar em um link fecha o menu. O hambúrguer informa <code>aria-expanded</code> e aponta para o menu com{' '}
          <code>aria-controls</code>; <kbd>Esc</kbd> fecha o menu aberto e, se o foco estava na barra ou no menu, devolve o foco ao
          hambúrguer. Desative com <OnlyFor framework="react"><code>collapseOnMobile={'{false}'}</code></OnlyFor><OnlyFor framework="vue"><code>:collapse-on-mobile="false"</code></OnlyFor>.
        </P>
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'brand', type: 'ReactNode', vueType: 'MantineNode | slot #brand', default: '<JcLogo variant="dark" />', description: 'Marca à esquerda (renderizada como link, exceto com brandHref={null}).', vueDescription: <>Marca à esquerda (renderizada como link, exceto com <code>:brand-href="null"</code>).</> },
            { name: 'brandHref', type: 'string | null', default: "'/'", description: 'Destino do link da marca; null renderiza a marca como texto.' },
            { name: 'links', type: 'TopNavLink[]', default: '[]', description: '{ label, href?, active?, leftSection?, rightSection?, disabled?, aria-label?, onClick? } — sem href (ou disabled) vira <button>. Link só com ícone: label vazio + aria-label.', vueDescription: '{ label, href?, active?, leftSection?, rightSection?, disabled?, aria-label?, onClick? } — sem href (ou disabled) vira <button>. onClick é uma função no próprio objeto do link; seções aceitam MantineNode.' },
            { name: 'linkComponent', type: 'React.ElementType', vueType: 'string | Component', default: "'a'", description: 'Componente dos links (ex.: Link do react-router), recebe to/href.', vueDescription: 'Componente dos links (ex.: RouterLink do vue-router), recebe to/href.' },
            { name: 'rightSection', type: 'ReactNode', vueType: 'MantineNode | slot #rightSection', description: 'Conteúdo à direita (ThemeToggle, avatar, botões).' },
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
