import { Image } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ImagePage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Image"
      source="mantine"
      mantineName="image"
      description="Imagens de produto e ambientes com raio da marca, ajuste de recorte e imagem de fallback quando a foto falha."
      importCode={`import { Image } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Image}
          name="Image"
          previewWidth={360}
          controls={[
            { prop: 'src', type: 'string', initialValue: 'https://picsum.photos/seed/sala/600/400' },
            { prop: 'h', type: 'number', initialValue: 220, min: 80, max: 400, step: 20 },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'fit', type: 'segmented', data: ['cover', 'contain'], initialValue: 'cover' },
          ]}
        />
      </Section>

      <Section title="Galeria de ambientes">
        <Demo id="image/basic" />
      </Section>

      <Section title="Fallback">
        <P>
          <code>fallbackSrc</code> é exibido quando <code>src</code> é nulo ou a imagem falha ao carregar — evita “buracos” na vitrine quando um
          produto ainda não tem foto.
        </P>
        <Demo id="image/fallback" />
      </Section>

      <Section title="Recorte (fit)">
        <P>
          <code>cover</code> (padrão) preenche a área e corta as bordas — ideal para ambientes. <code>contain</code> mostra o produto inteiro;
          combine com um fundo <code>--ds-surface-2</code>.
        </P>
        <Demo id="image/fit" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[{ name: 'radius', type: 'defaultProps', default: "'md'", description: '12px, igual ao Card. Use radius={0} dentro de Card.Section.', vueDescription: '12px, igual ao Card. Use :radius="0" dentro de CardSection.' }]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'src', type: 'string | null', description: 'URL da imagem.' },
            { name: 'alt', type: 'string', description: 'Texto alternativo (obrigatório para imagens informativas).' },
            { name: 'fallbackSrc', type: 'string', description: 'Imagem usada se src falhar ou for nulo.' },
            { name: 'fit', type: 'React.CSSProperties["objectFit"]', default: "'cover'", description: 'object-fit da imagem.' },
            { name: 'h / w', type: 'number | string', description: 'Altura e largura (style props).' },
            { name: 'radius', type: 'MantineRadius | number', default: "'md'", description: 'Raio da borda.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Descreva o produto no <code>alt</code> (“Piso vinílico Carvalho Natural em sala de estar”), não o arquivo. Defina altura fixa em
          grades para evitar saltos de layout e use <code>loading="lazy"</code> abaixo da dobra.
        </P>
      </Section>
    </DocPage>
  );
}
