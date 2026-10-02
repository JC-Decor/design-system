import { Anchor, Box, Grid, type GridProps } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

function GridPreview(props: GridProps) {
  return (
    <Grid {...props}>
      {[4, 4, 4, 6, 6].map((span, i) => (
        <Grid.Col key={i} span={span}>
          <Box p="md" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" ta="center" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
            span {span}
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default function GridPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Grid"
      source="mantine"
      mantineName="grid"
      description="Grid flexbox de 12 colunas com spans, offsets e ordem responsivos. Use para layouts de página com colunas de larguras diferentes, como conteúdo + resumo."
      importCode={`import { Grid } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={GridPreview}
          name="Grid"
          previewWidth={340}
          controls={[
            { prop: 'gap', type: 'size', initialValue: 'lg' },
            { prop: 'columns', type: 'number', initialValue: 12, min: 1, max: 24 },
            { prop: 'grow', type: 'boolean', initialValue: false },
            { prop: 'justify', type: 'select', data: ['flex-start', 'center', 'flex-end', 'space-between'], initialValue: 'flex-start' },
          ]}
        />
      </Section>

      <Section title="Colunas responsivas">
        <P>
          <code>span</code> aceita objetos por breakpoint. No Mantine 9 o espaçamento é a prop <code>gap</code> (antes <code>gutter</code>); use{' '}
          <code>gap="lg"</code> (24px), o gutter do grid da marca.
        </P>
        <Demo id="grid/columns" />
      </Section>

      <Section title="Offset">
        <Demo id="grid/offset" />
      </Section>

      <Section title="Auto e content">
        <P>
          <code>span="auto"</code> divide o espaço restante; <code>span="content"</code> usa a largura do conteúdo.
        </P>
        <Demo id="grid/auto" />
      </Section>

      <Section title="Grow">
        <P>Com <code>grow</code>, as colunas da última linha crescem para preencher o espaço.</P>
        <Demo id="grid/grow" />
      </Section>

      <Section title="Ordem">
        <P>
          <code>order</code> reordena colunas por breakpoint sem mudar o DOM — por exemplo, resultados antes dos filtros no mobile.
        </P>
        <Demo id="grid/order" />
      </Section>

      <Section title="Container queries">
        <P>
          Com <code>type="container"</code>, os breakpoints passam a ser a largura do próprio grid. Defina <code>breakpoints</code> em px.
        </P>
        <Demo id="grid/container-queries" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem customizações de estilo. Os breakpoints do tema seguem o Figma (<code>sm</code> 768px, <code>lg</code> 1366px) — veja{' '}
          <Anchor component={Link} to="/fundamentos/grid">
            Fundamentos · Grid & layout
          </Anchor>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'gap / rowGap / columnGap', type: 'StyleProp<MantineSpacing>', default: "'md'", description: 'Espaçamento entre colunas e linhas.' },
            { name: 'columns', type: 'number', default: '12', description: 'Número total de colunas.' },
            { name: 'grow', type: 'boolean', default: 'false', description: 'Colunas da última linha preenchem o espaço.' },
            { name: 'type', type: "'media' | 'container'", default: "'media'", description: 'Media queries ou container queries.' },
            { name: 'Grid.Col span', type: "StyleProp<number | 'auto' | 'content'>", default: '12', description: 'Largura da coluna.' },
            { name: 'Grid.Col offset / order', type: 'StyleProp<number>', description: 'Deslocamento e ordem.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Para itens de mesmo tamanho (vitrines, KPIs) prefira <code>SimpleGrid</code>. Use o <code>Grid</code> quando as colunas têm pesos
          diferentes.
        </P>
      </Section>
    </DocPage>
  );
}
