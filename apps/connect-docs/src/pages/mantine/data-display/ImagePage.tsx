import { Image } from '@jcdecor/connect-ui';
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
      description="Capas de comunicados, treinamentos e eventos internos com o raio do Connect, ajuste de recorte e imagem de fallback quando a foto falha."
      importCode={`import { Image } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Image}
          name="Image"
          previewWidth={360}
          controls={[
            { prop: 'src', type: 'string', initialValue: 'https://picsum.photos/seed/integracao/600/400' },
            { prop: 'h', type: 'number', initialValue: 220, min: 80, max: 400, step: 20 },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'fit', type: 'segmented', data: ['cover', 'contain'], initialValue: 'cover' },
          ]}
        />
      </Section>

      <Section title="Galeria de eventos">
        <Demo id="image/basic" />
      </Section>

      <Section title="Fallback">
        <P>
          <code>fallbackSrc</code> é exibido quando <code>src</code> é nulo ou a imagem falha ao carregar — evita “buracos” no mural quando um
          comunicado ainda não tem capa.
        </P>
        <Demo id="image/fallback" />
      </Section>

      <Section title="Recorte (fit)">
        <P>
          <code>cover</code> (padrão) preenche a área e corta as bordas — ideal para fotos de eventos. <code>contain</code> mostra a peça inteira
          (crachá, logotipo, documento);
          combine com um fundo <code>--ds-surface-2</code>.
        </P>
        <Demo id="image/fit" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[{ name: 'radius', type: 'defaultProps', default: "'md'", description: '14px. Use radius={0} dentro de Card.Section (o Card tem raio 20).' }]}
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
          Descreva a cena no <code>alt</code> (“Turma de integração de novos colaboradores na sede”), não o arquivo. Defina altura fixa em
          grades para evitar saltos de layout e use <code>loading="lazy"</code> abaixo da dobra.
        </P>
      </Section>
    </DocPage>
  );
}
