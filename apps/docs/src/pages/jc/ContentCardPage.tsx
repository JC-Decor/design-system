import { ContentCard } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';

export default function ContentCardPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="ContentCard"
      source="jc"
      sourcePath="packages/ui/src/components/ContentCard"
      description="Card de conteúdo (ds-card): superfície branca sobre o fundo da página, borda suave e sombra pequena, com kicker, título, imagem e ações."
      importCode={`import { ContentCard } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ContentCard}
          name="ContentCard"
          controls={[
            { prop: 'kicker', type: 'string', initialValue: 'Exemplo' },
            { prop: 'title', type: 'string', initialValue: 'Card de conteúdo' },
            { prop: 'children', type: 'string', initialValue: 'Superfície branca sobre o fundo da página, borda suave e sombra pequena.' },
            { prop: 'padding', type: 'size', initialValue: 'lg' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
          ]}
          previewWidth={340}
        />
      </Section>

      <Section title="Uso">
        <P>O exemplo da marca: kicker, título, corpo e uma ação <code>Button size="sm"</code> no rodapé.</P>
        <Demo id="content-card/usage" />
      </Section>

      <Section title="Com imagem">
        <P>
          <code>image</code> aceita uma URL (renderizada como capa sangrando até as bordas do card, com altura <code>imageHeight</code>) ou
          qualquer nó, como um <code>Image</code> ou carrossel.
        </P>
        <Demo id="content-card/image" />
      </Section>

      <Section title="Grade de cards">
        <P>O card ocupa a altura disponível e o corpo cresce: as ações ficam alinhadas ao pé quando os textos têm tamanhos diferentes.</P>
        <Demo id="content-card/grid" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'kicker', type: 'ReactNode', vueType: 'MantineNode | slot #kicker', description: 'Sobretítulo em caixa-alta (Kicker).' },
            { name: 'title', type: 'ReactNode', vueType: 'MantineNode | slot #title', description: 'Título do card (headline-small).' },
            { name: 'children', vueName: '#default', type: 'ReactNode', vueType: 'slot', description: 'Corpo do card, na cor texto-2.' },
            { name: 'image', type: 'string | ReactNode', vueType: 'string | MantineNode | slot #image', description: 'URL da imagem de capa ou nó customizado.' },
            { name: 'imageAlt', type: 'string', default: "''", description: 'Texto alternativo da imagem (quando image é URL).' },
            { name: 'imageHeight', type: 'number', default: '180', description: 'Altura da imagem de capa em px.' },
            { name: 'actions', type: 'ReactNode', vueType: 'MantineNode | slot #actions', description: 'Botões/links no rodapé.', vueDescription: <>Botões/links no rodapé. Use o slot <code>#actions</code> para componentes.</> },
            { name: '...CardProps', type: 'CardProps', description: 'Props do Card do Mantine (padding, radius, shadow, withBorder…).' },
          ]}
        />
        <P>Styles API: <code>root · image · kicker · title · body · actions</code>.</P>
      </Section>
    </DocPage>
  );
}
