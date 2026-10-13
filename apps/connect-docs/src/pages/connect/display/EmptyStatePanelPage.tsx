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
      description="Estados vazios do Connect: o simples (ícone em bloco lavanda + título + descrição) e o ilustrado, com arte à esquerda e até duas ações. Cada variante e módulo já vem com a ilustração do Connect."
      importCode={`import { EmptyStatePanel, EmptyStateIllustration } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={EmptyStatePanel}
          name="EmptyStatePanel"
          controls={[
            { prop: 'variant', type: 'select', data: ['empty', 'no-results', 'error', 'permission', 'building'], initialValue: 'empty' },
            { prop: 'illustration', type: 'select', data: ['questions', 'news', 'dayOff', 'document', 'meetTeam', 'teamSpirit', 'confirmed'], initialValue: 'news' },
            { prop: 'compact', type: 'boolean', initialValue: false },
            { prop: 'title', type: 'string', initialValue: 'Nenhum comunicado' },
          ]}
        />
      </Section>
      <Section title="Variantes semânticas">
        <P><code>variant</code> define a ilustração e os textos padrão (os mesmos do connect-jc); <code>title</code>, <code>description</code> e <code>illustration</code> sobrescrevem. Com <code>illustration={'{false}'}</code> fica o layout simples, com o ícone da variante em bloco lavanda.</P>
        <Demo id="cn-empty-state-panel/variants" />
      </Section>
      <Section title="Com ação">
        <Demo id="cn-empty-state-panel/actions" />
      </Section>
      <Section title="Por módulo">
        <P>Com <code>variant</code>, <code>module</code> ou <code>illustration</code> usa o layout ilustrado em card, com a arte padrão de cada variante/módulo (mesmo mapa do connect-jc). <code>illustration={'{false}'}</code> volta ao layout simples com ícone; <code>compact</code> reduz a arte.</P>
        <Demo id="cn-empty-state-panel/modules" />
      </Section>
      <Section title="EmptyStateIllustration">
        <P>Layouts <code>default</code>, <code>card</code>, <code>compact</code> e <code>full</code>. Passe um nome do catálogo (ver Illustration) ou uma URL em <code>illustration</code>.</P>
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
            { name: 'illustration', type: 'IllustrationName | string | false', description: 'Nome ou URL — ativa o layout ilustrado. Padrão: arte da variante; false = layout simples.' },
            { name: 'module', type: 'EmptyStateModule', description: 'Arte do módulo — ativa o layout ilustrado.' },
            { name: 'compact', type: 'boolean', description: 'Layout ilustrado compacto.' },
          ]}
        />
        <P>EmptyStateIllustration (mais title, description e ações):</P>
        <PropsTable
          rows={[
            { name: 'variant', type: "'default' | 'card' | 'compact' | 'full'", default: "'default'", description: 'Layout.' },
            { name: 'illustration / illustrationAlt', type: 'IllustrationName | string | false / string', description: 'Arte (padrão: a do módulo; false = ícone) e texto alternativo.' },
            { name: 'module', type: 'EmptyStateModule', default: "'generic'", description: 'Arte padrão (e ícone com illustration={false}).' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo extra.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;EmptyState&gt;</code> → <code>&lt;EmptyStatePanel&gt;</code> (o <code>EmptyState</code> do pacote é o do Mantine); <code>variant</code>, <code>desc/description</code>, <code>action</code>, <code>module</code> e <code>compact</code> continuam.</li>
          <li><code>illustration="questions"</code> continua igual: os nomes do catálogo são os mesmos.</li>
          <li><code>&lt;EmptyStateIllustration&gt;</code> mantém as props; <code>illustration</code> aceita nome ou URL.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
