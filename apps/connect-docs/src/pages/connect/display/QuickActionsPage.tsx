import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function QuickActionsPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="QuickActions"
      source="connect"
      sourcePath="packages/connect-ui/src/components/QuickActions"
      description="Atalhos do painel: cards-botão com ícone lavanda, título, descrição e chevron, com brilho lavanda e elevação no hover."
      importCode={`import { QuickActions } from '@jcdecor/connect-ui';`}
    >
      <Section title="Linha (row)">
        <P>Quatro colunas que viram duas e uma conforme a largura do contêiner. Itens <code>disabled</code> ficam a 55%.</P>
        <Demo id="cn-quick-actions/row" />
      </Section>
      <Section title="Coluna (grid)">
        <Demo id="cn-quick-actions/grid" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'items', type: 'QuickActionItem[]', required: true, description: '{ icon, title, desc, onClick?, disabled? }' },
            { name: 'layout', type: "'row' | 'grid'", default: "'row'", description: '4 colunas ou 1 coluna.' },
            { name: 'aria-label', type: 'string', default: "'Ações rápidas'", description: 'Rótulo da região.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props. <code>layout="grid"</code> agora tem estilo próprio (uma coluna — no connect-jc a classe não existia) e <code>row</code> é responsivo.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
