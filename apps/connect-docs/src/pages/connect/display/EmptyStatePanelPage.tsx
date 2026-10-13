import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { EmptyStatePanel } from '@jcdecor/connect-ui';

export default function EmptyStatePanelPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="EmptyStatePanel"
      source="connect"
      sourcePath="packages/connect-ui/src/components/EmptyStatePanel"
      description="Estados vazios do Connect: o simples (ícone em bloco lavanda + título + descrição) e o ilustrado, com arte à esquerda e até duas ações. As ilustrações são suas — o pacote não embute arte de terceiros."
      importCode={`import { EmptyStatePanel, EmptyStateIllustration } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={EmptyStatePanel}
          name="EmptyStatePanel"
          controls={[
            { prop: 'variant', type: 'select', data: ['empty', 'no-results', 'error', 'permission', 'building'], initialValue: 'empty' },
            { prop: 'icon', type: 'select', data: ['folder', 'search', 'palm', 'megaphone', 'doc', 'users', 'target'], initialValue: 'megaphone' },
            { prop: 'title', type: 'string', initialValue: 'Nenhum comunicado' },
          ]}
        />
      </Section>
      <Section title="Variantes semânticas">
        <P><code>variant</code> define o ícone e os textos padrão; <code>title</code> e <code>description</code> sobrescrevem.</P>
        <Demo id="cn-empty-state-panel/variants" />
      </Section>
      <Section title="Com ação">
        <Demo id="cn-empty-state-panel/actions" />
      </Section>
      <Section title="Por módulo">
        <P>Com <code>module</code> (ou <code>illustration</code>) usa o layout ilustrado em card; sem imagem, mostra o ícone do módulo num bloco tonal. <code>compact</code> reduz a arte.</P>
        <Demo id="cn-empty-state-panel/modules" />
      </Section>
      <Section title="EmptyStateIllustration">
        <P>Layouts <code>default</code>, <code>card</code>, <code>compact</code> e <code>full</code>. Passe a URL da ilustração em <code>illustration</code> (no app: <code>import arte from './undraw_….svg'</code>).</P>
        <Demo id="cn-empty-state-panel/illustrated" />
      </Section>
      <Section title="Props">
        <P>EmptyStatePanel:</P>
        <PropsTable
          rows={[
            { name: 'variant', type: "'empty' | 'no-results' | 'error' | 'permission' | 'building'", description: 'Ícone e textos padrão.' },
            { name: 'icon', type: 'string', description: 'Ícone do Connect.' },
            { name: 'title', type: 'ReactNode', description: 'Título.' },
            { name: 'description (desc)', type: 'ReactNode', description: 'Descrição.' },
            { name: 'action', type: 'ReactNode', description: 'Nó livre abaixo do texto.' },
            { name: 'actionLabel / onAction', type: 'string / () => void', description: 'Botão principal.' },
            { name: 'secondaryActionLabel / onSecondaryAction', type: 'string / () => void', description: 'Botão outline.' },
            { name: 'illustration', type: 'string', description: 'URL — ativa o layout ilustrado.' },
            { name: 'module', type: 'EmptyStateModule', description: 'Ícone do módulo — ativa o layout ilustrado.' },
            { name: 'compact', type: 'boolean', description: 'Layout ilustrado compacto.' },
          ]}
        />
        <P>EmptyStateIllustration (mais title, description e ações):</P>
        <PropsTable
          rows={[
            { name: 'variant', type: "'default' | 'card' | 'compact' | 'full'", default: "'default'", description: 'Layout.' },
            { name: 'illustration / illustrationAlt', type: 'string', description: 'Arte e texto alternativo.' },
            { name: 'module', type: 'EmptyStateModule', default: "'generic'", description: 'Ícone quando não há arte.' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo extra.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;EmptyState&gt;</code> → <code>&lt;EmptyStatePanel&gt;</code> (o <code>EmptyState</code> do pacote é o do Mantine); <code>variant</code>, <code>desc/description</code>, <code>action</code>, <code>module</code> e <code>compact</code> continuam.</li>
          <li><code>illustration="questions"</code> (nome) → <code>{'illustration={questions}'}</code> com o SVG importado no app.</li>
          <li><code>&lt;EmptyStateIllustration&gt;</code> mantém as props; <code>illustration</code> agora é URL.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
