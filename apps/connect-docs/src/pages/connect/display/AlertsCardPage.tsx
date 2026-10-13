import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function AlertsCardPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="AlertsCard"
      source="connect"
      sourcePath="packages/connect-ui/src/components/AlertsCard"
      description="Card de alertas do painel: lista de itens com ícone na cor da prioridade, selo, descrição e meta, mais filtro no cabeçalho e link “Ver todos”."
      importCode={`import { AlertsCard, AlertItem } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>Itens com <code>onClick</code> viram botões (Enter/Espaço) e mostram a seta no hover/foco. O filtro aparece com <code>onFilter</code>; <code>{'footLink={null}'}</code> esconde o rodapé.</P>
        <Demo id="cn-alerts-card/usage" />
      </Section>
      <Section title="AlertItem avulso">
        <Demo id="cn-alerts-card/items" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'items', type: 'AlertData[]', required: true, description: '{ tone, icon, title, desc, meta?, onClick? }' },
            { name: 'title', type: 'ReactNode', default: "'Alertas importantes'", description: 'Título.' },
            { name: 'sub', type: 'ReactNode', default: "'Itens que precisam da sua atenção'", description: 'Subtítulo.' },
            { name: 'footLink', type: 'string | null', default: "'Ver todos os alertas'", description: 'Texto do link.' },
            { name: 'footHref / onFootLinkClick', type: 'string / () => void', description: 'Destino do link.' },
            { name: 'onFilter', type: '() => void', description: 'Mostra o botão de filtro.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;AlertsCard items title sub footLink /&gt;</code> mantém as props. O botão de filtro e o link agora só aparecem com ação (<code>onFilter</code>, <code>footHref</code>/<code>onFootLinkClick</code>).</li>
          <li><code>AlertData</code> ganhou <code>onClick</code> por item.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
