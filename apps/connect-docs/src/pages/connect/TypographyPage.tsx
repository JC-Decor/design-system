import { Headline } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';

export default function TypographyPage() {
  return (
    <DocPage
      kicker="Componentes Connect"
      title="Tipografia"
      source="connect"
      sourcePath="packages/connect-ui/src/components/Typography"
      description="Display, Headline, Subheadline, Disclaimer e Kicker: a escala tipográfica densa do Connect (DM Sans, eyebrow em DM Mono) pronta para usar, com tag HTML semântica por padrão."
      importCode={`import { Display, Headline, Subheadline, Disclaimer, Kicker } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Headline}
          name="Headline"
          controls={[
            { prop: 'size', type: 'segmented', data: ['lg', 'md', 'sm'], initialValue: 'md' },
            { prop: 'ta', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'left', label: 'ta (alinhamento)' },
            { prop: 'children', type: 'string', initialValue: 'Solicitações de férias' },
          ]}
          previewWidth={520}
        />
      </Section>

      <Section title="Escala">
        <P>
          Display lg e md são fluidos (crescem do mobile ao desktop); o resto tem tamanho fixo. Os componentes são
          presets de <code>Text</code> do Mantine, então aceitam todas as style props (<code>c</code>, <code>ta</code>, <code>mt</code>, <code>maw</code>…).
        </P>
        <Demo id="typography/scale" />
        <PropsTable
          rows={[
            { name: 'Display', type: 'lg · md · sm', default: 'sm', description: '40/30 · 32/26 · 26 px, Bold, tracking −0,02em. Renderiza <h1>. Display sm = título de página.' },
            { name: 'Headline', type: 'lg · md · sm', default: 'md', description: '22 · 18 · 16 px, Bold. Renderiza <h2>/<h3>/<h4>: seção, diálogo, card.' },
            { name: 'Subheadline', type: 'lg · md · sm', default: 'md', description: '15 (lead) · 13,5 (corpo) · 12,5 px (rótulos), Regular. Renderiza <p>.' },
            { name: 'Disclaimer', type: '—', description: '11,5 px Medium na cor texto-3. Metadados, notas e microcopy. Renderiza <p>.' },
            { name: 'Kicker', type: '—', description: 'DM Mono 10,5 px SemiBold, caixa-alta, tracking 0,06em, cor texto-3 (o .card-eyebrow do Connect). Renderiza <div>.' },
          ]}
        />
      </Section>

      <Section title="Display">
        <P>Para boas-vindas e títulos de página. Todos os tamanhos aplicam tracking levemente negativo, que deixa títulos grandes mais compactos.</P>
        <Demo id="typography/display" />
      </Section>

      <Section title="Composição">
        <P>Kicker + Display + Subheadline + Disclaimer formam o cabeçalho de boas-vindas do painel.</P>
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
            { name: 'component', type: 'React.ElementType', description: 'Troca a tag/elemento renderizado sem mudar o visual.' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo do texto.' },
            { name: '...TextProps', type: 'TextProps', description: 'Todas as props do Text do Mantine (style props, truncate, lineClamp…), exceto size.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
