import { Anchor, Text } from '@jcdecor/connect-ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function TextPage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Text"
      source="mantine"
      mantineName="text"
      description="Componente de texto base, em DM Sans com a escala densa do Connect: 13,5px no corpo, 12,5px em textos de apoio e 11,5px em legendas."
      importCode={`import { Text } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Text}
          name="Text"
          previewWidth={420}
          controls={[
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'fw', type: 'select', data: ['400', '500', '600', '700'], initialValue: '400' },
            { prop: 'c', type: 'select', data: ['var(--ds-text)', 'var(--ds-text-2)', 'dimmed', 'var(--ds-primary)'], initialValue: 'var(--ds-text)' },
            { prop: 'ta', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'left' },
            { prop: 'truncate', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'Suas férias de 03/11 a 22/11 foram aprovadas por Paula Andrade.' },
          ]}
        />
      </Section>

      <Section title="Escala de tamanhos">
        <P>
          Os tamanhos do tema mapeiam a escala tipográfica (<code>--type-*</code>). Texto de leitura e de interface tem tamanho fixo — não use
          valores em px soltos.
        </P>
        <Demo id="text/sizes" />
      </Section>

      <Section title="Cores de texto">
        <P>
          Três níveis de ênfase: <code>--ds-text</code>, <code>--ds-text-2</code> e <code>dimmed</code>, que no tema Connect aponta para{' '}
          <code>--ds-text-3</code> (#6B6F84, 4,9:1 no claro).
        </P>
        <Demo id="text/colors" />
      </Section>

      <Section title="Estilos e truncamento">
        <P>
          <code>truncate</code> corta em uma linha com reticências; <code>lineClamp</code> limita a N linhas — útil em cards de comunicado.
        </P>
        <Demo id="text/props" />
      </Section>

      <Section title="Gradiente">
        <P>
          <code>variant="gradient"</code> usa o gradiente padrão do tema (navy 6 → lavender 6, 140°). Reserve para títulos de campanhas internas e
          boas-vindas.
        </P>
        <Demo id="text/gradient" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'fontSizes', type: 'theme', description: 'xs 11,5 · sm 12,5 · md 13,5 · lg 15 · xl 16 (px fixos, escala densa do Connect).' },
            { name: 'lineHeights', type: 'theme', description: 'xs 1,4 · sm 1,45 · md 1,5 · lg 1,5 · xl 1,35.' },
            { name: 'c="dimmed"', type: 'cssVariablesResolver', description: '--mantine-color-dimmed = --ds-text-3.' },
            { name: 'variant="gradient"', type: 'defaultGradient', description: 'navy.6 → lavender.6, 140°.' },
          ]}
        />
        <P>
          Para a escala completa (display, headline, body) e os componentes tipográficos do Connect (Display, Headline, Kicker…), veja{' '}
          <Anchor component={Link} to="/componentes/tipografia">
            Tipografia
          </Anchor>
          .
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'size', type: 'MantineSize | string', default: "'md'", description: 'Tamanho da fonte e entrelinha.' },
            { name: 'span / inline', type: 'boolean', default: 'false', description: 'Renderiza span / entrelinha 1.' },
            { name: 'truncate', type: "boolean | 'start' | 'end'", description: 'Corta em uma linha.' },
            { name: 'lineClamp', type: 'number', description: 'Limita o número de linhas.' },
            { name: 'variant', type: "'text' | 'gradient'", default: "'text'", description: 'Texto comum ou com gradiente.' },
            { name: 'component', type: 'React.ElementType', default: "'p'", description: 'Elemento raiz.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mantenha parágrafos entre 60 e 80 caracteres por linha. Não use <code>dimmed</code> para informação essencial (prazo, status) e nunca
          aplique amarelo como cor de texto — no Connect o amarelo só aparece como fundo de tom.
        </P>
      </Section>
    </DocPage>
  );
}
