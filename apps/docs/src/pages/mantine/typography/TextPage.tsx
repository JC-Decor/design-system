import { Anchor, Text } from '@jcdecor/ui';
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
      description="Componente de texto base, em Poppins com a escala fixa da marca: 16/24 no corpo, 14 em textos de apoio e 12 em legendas."
      importCode={`import { Text } from '@jcdecor/ui';`}
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
            { prop: 'children', type: 'string', initialValue: 'Papel de parede vinílico lavável com estampa botânica, rolo de 10 m' },
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
          Três níveis de ênfase: <code>--ds-text</code>, <code>--ds-text-2</code> e <code>dimmed</code>, que no tema JC aponta para{' '}
          <code>--ds-text-3</code> (4,8:1 no claro, 5,8:1 no escuro).
        </P>
        <Demo id="text/colors" />
      </Section>

      <Section title="Estilos e truncamento">
        <P>
          <code>truncate</code> corta em uma linha com reticências; <code>lineClamp</code> limita a N linhas — útil em cards de produto.
        </P>
        <Demo id="text/props" />
      </Section>

      <Section title="Gradiente">
        <P>
          <code>variant="gradient"</code> usa o gradiente padrão do tema (Horizon 600 → 400). Reserve para títulos de campanha.
        </P>
        <Demo id="text/gradient" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'fontSizes', type: 'theme', description: 'xs 12 · sm 14 · md 16 · lg 18 · xl 20 (px fixos).' },
            { name: 'lineHeights', type: 'theme', description: 'xs 1,33 · sm 1,43 · md 1,5 · lg 1,55 · xl 1,4.' },
            { name: 'c="dimmed"', type: 'cssVariablesResolver', description: '--mantine-color-dimmed = --ds-text-3.' },
            { name: 'variant="gradient"', type: 'defaultGradient', description: 'horizon.6 → horizon.4, 135°.' },
          ]}
        />
        <P>
          Para a escala completa (display, headline, body) e os componentes tipográficos da marca, veja{' '}
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
          Mantenha parágrafos entre 60 e 80 caracteres por linha. Não use <code>dimmed</code> para informação essencial (preço, prazo) e nunca
          aplique amarelo (Electric) como cor de texto.
        </P>
      </Section>
    </DocPage>
  );
}
