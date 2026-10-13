import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { PrioBadge } from '@jcdecor/connect-ui';

export default function PrioBadgePage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="PrioBadge & StatusBadge"
      source="connect"
      sourcePath="packages/connect-ui/src/components/PrioBadge"
      description="Selos em pílula do Connect: prioridade (Alta, Média, Baixa, Info) com bolinha opcional e status de registros com bolinha colorida. Badge light do Mantine por baixo."
      importCode={`import { PrioBadge, StatusBadge } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PrioBadge}
          name="PrioBadge"
          controls={[
            { prop: 'tone', type: 'segmented', data: ['high', 'med', 'low', 'info'], initialValue: 'info' },
            { prop: 'dot', type: 'boolean', initialValue: false },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'children', type: 'string', initialValue: 'Férias vencendo' },
          ]}
        />
      </Section>
      <Section title="Prioridades">
        <P>Sem <code>children</code>, mostra o rótulo padrão da prioridade. <code>dot</code> adiciona a bolinha na cor do texto.</P>
        <Demo id="cn-prio-badge/priorities" />
      </Section>
      <Section title="StatusBadge">
        <P>Seis status de registro, sempre com bolinha no tom 500. <code>children</code> troca o rótulo mantendo a cor.</P>
        <Demo id="cn-prio-badge/status" />
      </Section>
      <Section title="Tamanhos">
        <P>O <code>md</code> segue o <code>.badge</code> do Connect: 20px, 10,5px/600. Os demais tamanhos vêm do Badge do Mantine.</P>
        <Demo id="cn-prio-badge/sizes" />
      </Section>
      <Section title="Props">
        <P>PrioBadge (mais as props do Badge, exceto color/variant):</P>
        <PropsTable
          rows={[
            { name: 'tone', type: "'high' | 'med' | 'low' | 'info'", default: "'info'", description: 'Prioridade (coral, amarelo, verde, azul).' },
            { name: 'dot', type: 'boolean', description: 'Bolinha antes do texto.' },
            { name: 'children', type: 'ReactNode', description: 'Texto; padrão = rótulo da prioridade.' },
          ]}
        />
        <P>StatusBadge:</P>
        <PropsTable
          rows={[
            { name: 'status', type: "'ativo' | 'pendente' | 'atrasado' | 'concl' | 'rascunho' | 'pausado'", default: "'ativo'", description: 'Status do registro.' },
            { name: 'children', type: 'ReactNode', description: 'Rótulo alternativo.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;Badge tone="high" dot&gt;</code> → <code>&lt;PrioBadge tone="high" dot&gt;</code> (o <code>Badge</code> do pacote é o do Mantine).</li>
          <li><code>&lt;StatusBadge status /&gt;</code> continua igual.</li>
          <li>Cores vêm de <code>priorities</code>/<code>statuses</code> em <code>@jcdecor/connect-ui</code> (antes <code>PRIO_MAP</code>/<code>STATUS_MAP</code>).</li>
        </ul>
      </Section>
    </DocPage>
  );
}
