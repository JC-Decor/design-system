import { Box, Paper, Stack, Text } from '@jcdecor/connect-ui';
import { grid } from '@jcdecor/connect-ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

const layouts = [
  { name: 'Mobile', key: 'mobile', width: grid.breakpoints.mobile, cols: grid.columns.mobile, gap: 16, margin: 16 },
  { name: 'Tablet', key: 'tablet', width: grid.breakpoints.tablet, cols: grid.columns.tablet, gap: 20, margin: 22 },
  { name: 'Desktop', key: 'desktop', width: grid.breakpoints.desktop, cols: grid.columns.desktop, gap: 20, margin: 28 },
] as const;

function GridPreview({ cols, gap, margin, width }: { cols: number; gap: number; margin: number; width: number }) {
  // Proporcional à largura de referência do breakpoint
  const scale = (v: number) => `${(v / width) * 100}%`;
  return (
    <Box
      h={72}
      style={{
        display: 'flex',
        gap: scale(gap),
        paddingInline: scale(margin),
        background: 'var(--ds-surface-2)',
        border: '1px solid var(--ds-border-soft)',
        borderRadius: 'var(--ds-radius-sm)',
      }}
    >
      {Array.from({ length: cols }, (_, i) => (
        <Box key={i} style={{ flex: 1, background: 'var(--ds-primary-soft)', borderInline: '1px solid var(--ds-primary)', opacity: 0.9 }} />
      ))}
    </Box>
  );
}

export default function Grid() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Grid & layout"
      description={`Conteúdo fluido ao lado da sidebar de ${grid.sidebar}: grid de 4, 8 e 12 colunas, gutters de 16–20px, margens de 16 a 28px e largura máxima de ${grid.max}.`}
    >
      <Section title="Grids por breakpoint">
        <P>
          As larguras abaixo são da área de conteúdo do painel (à direita da sidebar, quando ela está visível). As variáveis{' '}
          <code>--grid-margin</code> e <code>--grid-gap</code> mudam sozinhas abaixo de 1100px e de 768px.
        </P>
        <Stack gap="lg" mt="md">
          {layouts.map((l) => (
            <Paper key={l.key} withBorder p="md">
              <Text fw={700}>
                {l.name} · a partir de {l.width}px
              </Text>
              <Text fz="sm" c="var(--ds-text-3)" mb="sm">
                {l.cols} colunas · gap {l.gap}px · margem {l.margin}px
              </Text>
              <GridPreview cols={l.cols} gap={l.gap} margin={l.margin} width={l.width} />
            </Paper>
          ))}
        </Stack>
        <PropsTable
          rows={[
            { name: 'grid.max', type: '--grid-max', default: grid.max, description: 'Largura máxima do conteúdo' },
            { name: 'grid.gap', type: '--grid-gap', default: grid.gap, description: 'Gutter no tablet e desktop (16px no mobile)' },
            { name: 'grid.margin', type: '--grid-margin', default: grid.margin.desktop, description: `Margem lateral: ${grid.margin.mobile} (mobile) · ${grid.margin.tablet} (tablet) · ${grid.margin.desktop} (desktop)` },
            { name: 'grid.sidebar', type: '—', default: grid.sidebar, description: 'Largura da sidebar navy do painel' },
            { name: 'grid.columns', type: '4 · 8 · 12', description: 'Colunas por breakpoint' },
            { name: 'grid.breakpoints', type: '360 · 768 · 1100', description: 'Larguras de referência (mobile, tablet, desktop)' },
          ]}
        />
      </Section>

      <Section title="Container do painel">
        <P>
          A classe global <code>.ds-container</code> (incluída em <code>@jcdecor/connect-ui/styles.css</code>) centraliza o conteúdo em até{' '}
          {grid.max} usando <code>--grid-margin</code>, que é responsiva: 28px no desktop, 22px abaixo de 1100px e 16px abaixo de 768px. A classe{' '}
          <code>.ds-grid</code> faz o mesmo para 12 → 8 → 4 colunas. O <code>Container</code> do Mantine também funciona com <code>size={'{1440}'}</code>.
        </P>
        <Demo id="panel-grid/container" />
      </Section>

      <Section title="Grid de 12 colunas">
        <P>
          Use <code>Grid</code> com <code>gap="lg"</code> (22px) e spans responsivos — o layout clássico do painel é conteúdo 8 + coluna lateral 4. No
          Mantine 9 o espaçamento é a prop <code>gap</code>.
        </P>
        <Demo id="panel-grid/columns" />
      </Section>

      <Section title="SimpleGrid">
        <P>Para listas homogêneas (KPIs, cards de colaborador, atalhos), <code>SimpleGrid</code> com colunas responsivas é mais simples.</P>
        <Demo id="panel-grid/simple-grid" />
      </Section>

      <Section title="Breakpoints do Mantine">
        <P>Os breakpoints do tema, usados em props responsivas como <code>{'cols={{ base: 1, sm: 2, md: 4 }}'}</code>:</P>
        <PropsTable
          rows={[
            { name: 'xs', type: '36em', default: '576px', description: 'Celulares grandes' },
            { name: 'sm', type: '48em', default: '768px', description: 'Tablet (4 → 8 colunas)' },
            { name: 'md', type: '64em', default: '1024px', description: 'Tablet grande / laptop' },
            { name: 'lg', type: '75em', default: '1200px', description: 'Desktop' },
            { name: 'xl', type: '90em', default: '1440px', description: 'Telas largas (= grid.max)' },
          ]}
        />
        <CodeBlock
          code={`<SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 'md', sm: 'lg' }}>
  {colaboradores.map((c) => <CardColaborador key={c.id} {...c} />)}
</SimpleGrid>`}
        />
      </Section>
    </DocPage>
  );
}
