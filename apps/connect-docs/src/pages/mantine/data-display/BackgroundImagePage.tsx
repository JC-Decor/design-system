import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function BackgroundImagePage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="BackgroundImage"
      source="mantine"
      mantineName="background-image"
      description="Imagem de fundo com conteúdo sobreposto — para banners de comunicados, campanhas internas e cards de unidades."
      importCode={`import { BackgroundImage } from '@jcdecor/connect-ui';`}
    >
      <Section title="Banner de comunicado">
        <P>
          O componente aplica <code>background-size: cover</code> e centraliza a imagem. Para garantir contraste do texto branco, sobreponha
          um gradiente navy (<code>--cn-navy-900</code>) do lado do texto. Sobre a foto, o CTA usa <code>variant="white"</code> para manter o
          contraste.
        </P>
        <Demo id="background-image/hero" />
      </Section>

      <Section title="Cards de unidades">
        <Demo id="background-image/tiles" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable rows={[{ name: 'radius', type: 'defaultProps', default: "'md'", description: '14px, o mesmo raio de Image e ThemeIcon.' }]} />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'src', type: 'string', required: true, description: 'URL da imagem de fundo.' },
            { name: 'radius', type: 'MantineRadius | number', default: "'md'", description: 'Raio da borda.' },
            { name: 'component', type: 'React.ElementType', default: "'div'", description: 'Elemento raiz (ex.: a ou Link para cards clicáveis).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Imagens de fundo não têm texto alternativo: se a foto transmite informação, use <code>Image</code> com <code>alt</code>. Sempre
          verifique o contraste do texto sobre a imagem (mínimo 4,5:1) e otimize o arquivo — banners pesados atrasam a abertura do painel, especialmente no celular.
        </P>
      </Section>
    </DocPage>
  );
}
