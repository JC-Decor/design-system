import { Container } from '@jcdecor/ui';
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
      description="Centraliza o conteúdo horizontalmente com largura máxima e padding lateral. Use como invólucro das seções da loja e das páginas do painel."
      importCode={`import { Container } from '@jcdecor/ui';`}
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
            { prop: 'children', type: 'string', initialValue: 'Conteúdo da seção' },
          ]}
        />
      </Section>

      <Section title="Tamanhos">
        <P>
          <code>size</code> aceita as chaves do tema ou qualquer valor CSS. No tema JC, <code>xl</code> corresponde à largura máxima do grid da
          marca (1224px).
        </P>
        <Demo id="container/sizes" />
      </Section>

      <Section title="Largura da marca">
        <P>
          <code>size="xl"</code> e <code>size={'{1224}'}</code> são equivalentes ao <code>.ds-container</code>. Prefira-os para o conteúdo das páginas da
          loja.
        </P>
        <Demo id="container/brand" />
      </Section>

      <Section title="Fluid">
        <Demo id="container/fluid" />
      </Section>

      <Section title="Estratégia grid">
        <P>
          Com <code>strategy="grid"</code>, os filhos ficam na coluna central, e um filho com <code>data-breakout</code> ocupa a largura total —
          bom para banners que “vazam” do conteúdo.
        </P>
        <Demo id="container/grid-strategy" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: '--container-size-xl', type: 'classNames.root', default: 'var(--grid-max) · 1224px', description: 'O xl do Mantine (1320px) passa a usar a largura máxima do grid da marca.' },
          ]}
        />
        <P>Os demais tamanhos (xs 540 · sm 720 · md 960 · lg 1140) seguem o Mantine.</P>
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
