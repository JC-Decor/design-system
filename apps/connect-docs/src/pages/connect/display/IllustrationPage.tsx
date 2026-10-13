import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function IllustrationPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="Illustration & IllustrationStrip"
      source="connect"
      sourcePath="packages/connect-ui/src/components/Illustration"
      description="Ilustrações com os tamanhos e intensidades do Connect e a faixa de destaque com texto + arte. O pacote não inclui as ilustrações do unDraw: importe-as no app e passe a URL."
      importCode={`import { Illustration, IllustrationStrip } from '@jcdecor/connect-ui';`}
    >
      <Section title="Tamanhos">
        <P>Largura máxima: sm 96 · md 160 · lg 240 · xl 360 px. Carregamento preguiçoso por padrão.</P>
        <Demo id="cn-illustration/sizes" />
      </Section>
      <Section title="Intensidade">
        <P><code>muted</code> e <code>soft</code> reduzem opacidade e saturação para a arte não competir com o conteúdo; <code>strong</code> satura levemente.</P>
        <Demo id="cn-illustration/tones" />
      </Section>
      <Section title="IllustrationStrip">
        <P>Faixa com sobrelinha, título, descrição e arte à direita; <code>featured</code> é a versão alta de destaque. Empilha em telas estreitas.</P>
        <Demo id="cn-illustration/strip" />
      </Section>
      <Section title="Props">
        <P>Illustration:</P>
        <PropsTable
          rows={[
            { name: 'src', type: 'string', required: true, description: 'URL da ilustração.' },
            { name: 'alt', type: 'string', default: "''", description: 'Vazio = decorativa.' },
            { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Largura máxima.' },
            { name: 'tone', type: "'default' | 'muted' | 'soft' | 'strong'", default: "'default'", description: 'Intensidade.' },
          ]}
        />
        <P>IllustrationStrip:</P>
        <PropsTable
          rows={[
            { name: 'src', type: 'string', required: true, description: 'URL da arte.' },
            { name: 'eyebrow / title / desc', type: 'ReactNode', description: 'Textos.' },
            { name: 'featured', type: 'boolean', description: 'Versão destaque.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;Illustration name="meetTeam" /&gt;</code> → <code>{'<Illustration src={meetTeam} />'}</code>, importando o SVG no app (o mapa <code>ILLUSTRATIONS</code> fica no connect-jc).</li>
          <li><code>&lt;IllustrationStrip name …/&gt;</code> → <code>&lt;IllustrationStrip src …/&gt;</code>; a classe <code>illustration-strip-featured</code> virou a prop <code>featured</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
