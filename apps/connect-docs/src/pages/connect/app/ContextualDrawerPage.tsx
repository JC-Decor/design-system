import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const tokensCode = `/* Folga em volta do painel — único ponto de ajuste do tamanho (tokens.css do Connect: --overlay-*) */
--cn-overlay-gap: min(4vw, 48px);
--cn-overlay-w: calc(100dvw - 2 * var(--cn-overlay-gap));
--cn-overlay-h: calc(100dvh - 2 * var(--cn-overlay-gap));`;

const migrationCode = `// connect-jc (Radix Dialog) → @jcdecor/connect-ui (Mantine Drawer), mesma API
import { ContextualDrawer } from '@jcdecor/connect-ui';

<ContextualDrawer
  open={open}
  onOpenChange={setOpen}
  title="Nova solicitação de ausência"
  description="O gestor recebe a solicitação para aprovar."
  footer={<Button onClick={enviar}>Enviar</Button>}
>
  …formulário…
</ContextualDrawer>`;

export default function ContextualDrawerPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="ContextualDrawer"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ContextualDrawer"
      description="Painel lateral para criar, editar ou ver detalhes sem sair da lista. Flutua com uma folga em volta, tem cabeçalho e rodapé fixos e corpo rolável."
      importCode={`import { ContextualDrawer } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          Título e descrição formam o cabeçalho, com o botão de fechar (34px). O <code>footer</code> recebe as ações, alinhadas à
          direita sobre o fundo <code>--ds-surface-tint</code>; abaixo de 760px elas empilham em largura total. Esc e clique no fundo fecham.
        </P>
        <Demo id="cn-contextual-drawer/basic" />
      </Section>

      <Section title="Tamanho e lado">
        <P>
          <code>md</code>, <code>lg</code> e <code>xl</code> ocupam a largura expandida (mantidos por compatibilidade); só{' '}
          <code>sm</code> continua estreito, até 360px. <code>side="left"</code> abre à esquerda. O tamanho vem dos tokens:
        </P>
        <CodeBlock code={tokensCode} language="css" />
        <Demo id="cn-contextual-drawer/sizes" />
      </Section>

      <Section title="Cabeçalho personalizado">
        <P>
          <code>header</code> substitui o cabeçalho inteiro (inclua seu próprio botão de fechar). Se <code>title</code> for texto,
          ele continua nomeando o painel para leitores de tela.
        </P>
        <Demo id="cn-contextual-drawer/custom-header" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'open', type: 'boolean', required: true, description: 'Controla a abertura.' },
            { name: 'onOpenChange', type: '(open: boolean) => void', required: true, description: 'Chamado com false ao fechar.' },
            { name: 'title', type: 'ReactNode', required: true, description: 'Título (20/700).' },
            { name: 'description', type: 'ReactNode', description: 'Linha explicativa sob o título.' },
            { name: 'header', type: 'ReactNode', description: 'Substitui o cabeçalho padrão.' },
            { name: 'children', type: 'ReactNode', required: true, description: 'Corpo rolável (padding 20/22).' },
            { name: 'footer', type: 'ReactNode', description: 'Rodapé fixo com as ações.' },
            { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'sm = até 360px; demais = --cn-overlay-w.' },
            { name: 'side', type: "'right' | 'left'", default: "'right'", description: 'Lado de entrada.' },
            { name: 'className / bodyClassName', type: 'string', description: 'Classes do painel e do corpo.' },
            { name: 'closeLabel', type: 'string', default: "'Fechar painel'", description: 'aria-label do botão de fechar.' },
            { name: '...DrawerRootProps', type: 'DrawerRootProps', description: 'Demais props do Drawer.Root (zIndex, trapFocus, returnFocus…).' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API: troque o import. As classes <code>.drawer-root/.drawer-panel/.drawer-header</code> saem; os tokens{' '}
          <code>--overlay-*</code> viram <code>--cn-overlay-*</code>, definidos no próprio componente.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
