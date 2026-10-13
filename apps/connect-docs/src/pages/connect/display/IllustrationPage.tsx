import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { CodeBlock } from '../../../kit/CodeBlock';

export default function IllustrationPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="Illustration & IllustrationStrip"
      source="connect"
      sourcePath="packages/connect-ui/src/components/Illustration"
      description="As 23 ilustrações do Connect (unDraw) vêm no pacote: use pelo nome, com os tamanhos e intensidades do painel, ou passe a URL de uma arte própria."
      importCode={`import { Illustration, IllustrationStrip } from '@jcdecor/connect-ui';`}
    >
      <Section title="Catálogo">
        <P>
          Os mesmos nomes do <code>ILLUSTRATIONS</code> do connect-jc (camelCase; os aliases kebab-case como <code>'meet-the-team'</code> também
          funcionam). Clique para copiar o nome.
        </P>
        <Demo id="cn-illustration/gallery" />
      </Section>
      <Section title="De onde vêm os arquivos">
        <P>
          Os SVGs não entram no JavaScript: o pacote publica os arquivos em <code>@jcdecor/connect-ui/illustrations/*.svg</code> e o componente só
          monta a URL. Por padrão ela aponta para o jsDelivr na mesma versão do pacote, então funciona sem configuração.
        </P>
        <P>Para servir do próprio app (intranet, sem CDN externo), copie a pasta e informe a base no tema:</P>
        <CodeBlock
          language="tsx"
          code={`// 1. copie node_modules/@jcdecor/connect-ui/illustrations para public/illustrations (ex.: no postinstall)
// 2. aponte o tema para lá
<ConnectProvider theme={{ other: { illustrationBaseUrl: '/illustrations/' } }}>
  <App />
</ConnectProvider>

// Fora de componentes: illustrationUrl('dayOff', '/illustrations/')`}
        />
        <P>
          As ilustrações são do <a href="https://undraw.co/license" target="_blank" rel="noreferrer">unDraw</a>: uso livre, inclusive comercial, sem
          atribuição obrigatória.
        </P>
      </Section>
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
            { name: 'src', type: 'IllustrationName | string', description: 'Nome do catálogo ou URL própria.' },
            { name: 'name', type: 'IllustrationName | string', description: 'Alias de src (API do connect-jc).' },
            { name: 'alt', type: 'string', default: "''", description: 'Vazio = decorativa.' },
            { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Largura máxima.' },
            { name: 'tone', type: "'default' | 'muted' | 'soft' | 'strong'", default: "'default'", description: 'Intensidade.' },
          ]}
        />
        <P>IllustrationStrip:</P>
        <PropsTable
          rows={[
            { name: 'src', type: 'IllustrationName | string', required: true, description: 'Nome do catálogo ou URL.' },
            { name: 'eyebrow / title / desc', type: 'ReactNode', description: 'Textos.' },
            { name: 'featured', type: 'boolean', description: 'Versão destaque.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;Illustration name="meetTeam" /&gt;</code> continua igual — os mesmos nomes. Apague a pasta <code>svg/</code> e o mapa <code>ILLUSTRATIONS</code> do app.</li>
          <li><code>&lt;IllustrationStrip name …/&gt;</code> → <code>&lt;IllustrationStrip src …/&gt;</code> (nome ou URL); a classe <code>illustration-strip-featured</code> virou a prop <code>featured</code>.</li>
          <li>Artes avulsas como <code>/svg/uniform-draw.svg</code> estão no catálogo (<code>uniform</code>).</li>
        </ul>
      </Section>
    </DocPage>
  );
}
