import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ExpandableCardPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="ExpandableCard"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ExpandableCard"
      description="Card que expande para mostrar detalhes: cabeçalho clicável e acessível por teclado, ícone, resumo, ações que não alternam o card e chevron girando."
      importCode={`import { ExpandableCard } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <Demo id="cn-expandable-card/usage" />
      </Section>
      <Section title="Controlado">
        <Demo id="cn-expandable-card/controlled" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', required: true, description: 'Título.' },
            { name: 'children', type: 'ReactNode', required: true, description: 'Conteúdo revelado.' },
            { name: 'subtitle', type: 'ReactNode', description: 'Ao lado do título.' },
            { name: 'icon', type: 'string', description: 'Ícone do Connect.' },
            { name: 'summary', type: 'ReactNode', description: 'Resumo sempre visível.' },
            { name: 'actions', type: 'ReactNode', description: 'Ações à direita.' },
            { name: 'defaultExpanded', type: 'boolean', default: 'false', description: 'Estado inicial.' },
            { name: 'expanded / onExpandedChange', type: 'boolean / (v) => void', description: 'Modo controlado.' },
            { name: 'disabled', type: 'boolean', description: 'Não expande.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props. A animação de abertura respeita <code>prefers-reduced-motion</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
