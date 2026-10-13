import { Container } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ContainerPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Container"
      source="mantine"
      mantineName="container"
      description="Centraliza o conteúdo horizontalmente com largura máxima e padding lateral. Use como invólucro do conteúdo das páginas do painel, ao lado da sidebar."
      importCode={`import { Container } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Container}
          name="Container"
          centered={false}
          baseProps={{
            w: '100%',
            py: 'sm',
            bg: 'var(--ds-primary-soft)',
            c: 'var(--ds-primary)',
            fw: 600,
            ta: 'center',
            style: { borderRadius: 'var(--ds-radius-sm)' },
          }}
          controls={[
            { prop: 'size', type: 'size', initialValue: 'xs' },
            { prop: 'fluid', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'Conteúdo da página' },
          ]}
        />
      </Section>

      <Section title="Tamanhos">
        <P>
          <code>size</code> aceita as chaves do tema ou qualquer valor CSS. No tema Connect, <code>xl</code> corresponde à largura máxima do grid do
          painel (1440px).
        </P>
        <Demo id="container/sizes" />
      </Section>

      <Section title="Grid do painel">
        <P>
          O grid do Connect tem largura máxima de 1440px (<code>--grid-max</code>), gap de 20px e margens laterais de 16px no mobile, 22px no
          tablet e 28px no desktop (4 · 8 · 12 colunas). Use <code>size="xl"</code> com <code>px</code> responsivo para reproduzir essas margens.
        </P>
        <Demo id="container/grid-max" />
      </Section>

      <Section title="Fluid">
        <Demo id="container/fluid" />
      </Section>

      <Section title="Estratégia grid">
        <P>
          Com <code>strategy="grid"</code>, os filhos ficam na coluna central, e um filho com <code>data-breakout</code> ocupa a largura total —
          bom para capas de comunicados que “vazam” do texto.
        </P>
        <Demo id="container/grid-strategy" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: '--container-size-xl', type: 'classNames.root', default: 'var(--grid-max) · 1440px', description: 'O xl do Mantine (1320px) passa a usar a largura máxima do grid do painel.' },
          ]}
        />
        <P>Os demais tamanhos (xs 540 · sm 720 · md 960 · lg 1140) seguem o Mantine. O padding lateral padrão é <code>md</code> (16px).</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'size', type: 'MantineSize | number | string', default: "'md'", description: 'Largura máxima.' },
            { name: 'fluid', type: 'boolean', default: 'false', description: 'Largura máxima de 100%.' },
            { name: 'strategy', type: "'block' | 'grid'", default: "'block'", description: 'block: max-width + margin auto; grid: grid de 3 colunas com data-breakout.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
