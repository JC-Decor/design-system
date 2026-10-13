import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function CardHeaderPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="Card: CardHeader, SectionLabel…"
      source="connect"
      sourcePath="packages/connect-ui/src/components/CardHeader"
      description="O Card do Mantine já vem com o visual do .card do Connect (raio 20, padding 22, borda suave, sombra 1). Aqui ficam as peças que faltavam: cabeçalho, rótulo de seção, link de rodapé e o card interativo."
      importCode={`import { Card, CardHeader, SectionLabel, CardFootLink } from '@jcdecor/connect-ui';`}
    >
      <Section title="CardHeader">
        <P>Sobrelinha mono opcional, título 16/700, subtítulo e ações à direita. <code>order</code> escolhe o nível do título (padrão h3).</P>
        <Demo id="cn-card-header/card-header" />
      </Section>
      <Section title="SectionLabel">
        <P>Rótulo entre blocos de cards: título 15/700 com a ação alinhada à base.</P>
        <Demo id="cn-card-header/section-label" />
      </Section>
      <Section title="CardFootLink">
        <P>Link de rodapé com chevron que se afasta no hover. Vira <code>&lt;a&gt;</code> quando recebe <code>href</code>, senão é um botão.</P>
        <Demo id="cn-card-header/foot-link" />
      </Section>
      <Section title="Variantes do Card">
        <P>
          <code>mod="hover"</code> deixa o Card interativo (sobe 2px, sombra 3 e borda navy) e <code>{'padding={0}'}</code> remove o espaçamento interno.
          O Card do Connect empilhava os filhos com 14px de espaço: use <code>{'<Stack gap={14}>'}</code> dentro do Card.
        </P>
        <Demo id="cn-card-header/card-variants" />
      </Section>
      <Section title="Props">
        <P>CardHeader:</P>
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', required: true, description: 'Título.' },
            { name: 'sub', type: 'ReactNode', description: 'Subtítulo.' },
            { name: 'eyebrow', type: 'ReactNode', description: 'Sobrelinha mono.' },
            { name: 'actions', type: 'ReactNode', description: 'Ações à direita.' },
            { name: 'order', type: '2 | 3 | 4 | 5 | 6', default: '3', description: 'Nível do título.' },
          ]}
        />
        <P>SectionLabel:</P>
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', required: true, description: 'Título.' },
            { name: 'sub / eyebrow', type: 'ReactNode', description: 'Como no CardHeader.' },
            { name: 'action', type: 'ReactNode', description: 'Ação alinhada à base.' },
          ]}
        />
        <P>CardFootLink:</P>
        <PropsTable
          rows={[
            { name: 'href', type: 'string', description: 'Renderiza como link.' },
            { name: 'onClick', type: '() => void', description: 'Clique (modo botão).' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>{'<Card pad={false}>'}</code> → <code>{'<Card padding={0}>'}</code>; <code>&lt;Card hover&gt;</code> → <code>&lt;Card mod="hover"&gt;</code>.</li>
          <li><code>&lt;CardHeader title sub actions eyebrow /&gt;</code> e <code>&lt;SectionLabel title sub action eyebrow /&gt;</code> mantêm as props.</li>
          <li><code>&lt;a className="card-foot-link"&gt;…&lt;Icon name="chev-r"/&gt;&lt;/a&gt;</code> → <code>&lt;CardFootLink&gt;…&lt;/CardFootLink&gt;</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
