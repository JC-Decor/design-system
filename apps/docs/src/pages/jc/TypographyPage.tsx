import { Headline } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';

export default function TypographyPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="Tipografia"
      source="jc"
      sourcePath="packages/ui/src/components/Typography"
      description="Display, Headline, Subheadline, Disclaimer e Kicker: a escala tipográfica da marca (Poppins) pronta para usar, com tag HTML semântica por padrão."
      importCode={`import { Display, Headline, Subheadline, Disclaimer, Kicker } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Headline}
          name="Headline"
          controls={[
            { prop: 'size', type: 'segmented', data: ['lg', 'md', 'sm'], initialValue: 'md' },
            { prop: 'ta', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'left', label: 'ta (alinhamento)' },
            { prop: 'children', type: 'string', initialValue: 'Pisos que transformam a sua casa' },
          ]}
          previewWidth={520}
        />
      </Section>

      <Section title="Escala">
        <P>
          Display e Headline lg são fluidos (crescem do mobile ao desktop); o resto tem tamanho fixo. Os componentes são
          presets de <code>Text</code> do Mantine, então aceitam todas as style props (<code>c</code>, <code>ta</code>, <code>mt</code>, <code>maw</code>…).
        </P>
        <Demo id="typography/scale" />
        <PropsTable
          rows={[
            { name: 'Display', type: 'lg · md · sm', default: 'sm', description: '56/40 · 48/36 · 40/32 px, Bold, tracking −0,02em. Renderiza <h1>. Hero e landing.' },
            { name: 'Headline', type: 'lg · md · sm', default: 'md', description: '32/26 · 24 · 20 px, SemiBold. Renderiza <h2>/<h3>/<h4>.' },
            { name: 'Subheadline', type: 'lg · md · sm', default: 'md', description: '18 (lead) · 16 (corpo) · 14 px (UI), Regular, entrelinha 1,5. Renderiza <p>.' },
            { name: 'Disclaimer', type: '—', description: '12 px Medium na cor texto-3. Notas legais e microcopy. Renderiza <p>.' },
            { name: 'Kicker', type: '—', description: '12 px SemiBold, caixa-alta, tracking 0,06em, cor primária. Renderiza <div>.' },
          ]}
        />
      </Section>

      <Section title="Display">
        <P>Reservado para títulos de impacto. Todos os tamanhos aplicam tracking levemente negativo, que deixa títulos grandes mais compactos.</P>
        <Demo id="typography/display" />
      </Section>

      <Section title="Composição">
        <P>Kicker + Display + Subheadline + Disclaimer formam o bloco de hero padrão das páginas de campanha.</P>
        <Demo id="typography/hero" />
      </Section>

      <Section title="Polimórfico">
        <P>
          O tamanho visual é independente da tag. Use <code>component</code> para manter a hierarquia correta de headings — por exemplo, um
          título com visual <code>sm</code> que precisa ser um <code>&lt;h2&gt;</code>.
        </P>
        <Demo id="typography/polymorphic" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'size', type: "'lg' | 'md' | 'sm'", default: "'sm' (Display) · 'md'", description: 'Degrau da escala. Disponível em Display, Headline e Subheadline.' },
            { name: 'component', type: 'React.ElementType', vueType: 'string | Component', description: 'Troca a tag/elemento renderizado sem mudar o visual.' },
            { name: 'children', vueName: '#default', type: 'ReactNode', vueType: 'slot', description: 'Conteúdo do texto.' },
            { name: '...TextProps', type: 'TextProps', description: 'Todas as props do Text do Mantine (style props, truncate, lineClamp…), exceto size.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
