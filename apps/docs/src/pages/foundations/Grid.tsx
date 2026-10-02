import { Box, Paper, Stack, Text } from '@jcdecor/ui';
import { grid } from '@jcdecor/ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

const layouts = [
  { name: 'Mobile', key: 'mobile', width: grid.breakpoints.mobile, cols: 4, gap: 16, margin: 20 },
  { name: 'Tablet', key: 'tablet', width: grid.breakpoints.tablet, cols: 8, gap: 24, margin: 32 },
  { name: 'Desktop', key: 'desktop', width: grid.breakpoints.desktop, cols: 12, gap: 24, margin: 64 },
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
      description="Grid de 4, 8 e 12 colunas com gutters de 16–24px, margens laterais responsivas e largura máxima de 1224px."
    >
      <Section title="Grids por breakpoint">
        <Stack gap="lg" mt="md">
          {layouts.map((l) => (
            <Paper key={l.key} withBorder p="md">
              <Text fw={600}>
                {l.name} · {l.width}px
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
            { name: 'grid.margin', type: '--grid-margin', default: '64px', description: 'Margem lateral: 20 (mobile) · 32 (tablet) · 64 (desktop)' },
            { name: 'grid.columns', type: '4 · 8 · 12', description: 'Colunas por breakpoint' },
            { name: 'grid.breakpoints', type: '360 · 768 · 1366', description: 'Larguras de referência do Figma' },
          ]}
        />
      </Section>

      <Section title="Container da marca">
        <P>
          A classe global <code>.ds-container</code> (incluída em <code>@jcdecor/ui/styles.css</code>) centraliza o conteúdo em até 1224px usando a variável <code>--grid-margin</code>, que é
          responsiva: 64px no desktop (≥ 1366px), 32px no tablet (≥ 768px) e 20px no mobile. A classe <code>.ds-grid</code> faz o mesmo para
          12 → 8 → 4 colunas. O <code>Container</code> do Mantine também funciona com{' '}
          <code>size={'{1224}'}</code>.
        </P>
        <Demo id="grid/container" />
      </Section>

      <Section title="Grid de 12 colunas">
        <P>
          Use <code>Grid</code> com <code>gap="lg"</code> (24px) e spans responsivos. No Mantine 9 o espaçamento é a prop <code>gap</code>.
        </P>
        <Demo id="grid/columns" />
      </Section>

      <Section title="SimpleGrid">
        <P>Para listas homogêneas (vitrines, KPIs), <code>SimpleGrid</code> com colunas responsivas é mais simples.</P>
        <Demo id="grid/simple-grid" />
      </Section>

      <Section title="Breakpoints do Mantine">
        <P>Os breakpoints do tema, usados em props responsivas como <code>{'cols={{ base: 1, sm: 2, md: 4 }}'}</code>:</P>
        <PropsTable
          rows={[
            { name: 'xs', type: '36em', default: '576px', description: 'Celulares grandes' },
            { name: 'sm', type: '48em', default: '768px', description: 'Tablet do Figma (margem 20 → 32, 4 → 8 colunas)' },
            { name: 'md', type: '64em', default: '1024px', description: 'Tablet grande / laptop' },
            { name: 'lg', type: '85.375em', default: '1366px', description: 'Desktop do Figma (margem 32 → 64, 8 → 12 colunas)' },
            { name: 'xl', type: '96em', default: '1536px', description: 'Telas largas' },
          ]}
        />
        <CodeBlock
          code={`<SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 'md', sm: 'lg' }}>
  {produtos.map((p) => <ProductCard key={p.id} {...p} />)}
</SimpleGrid>`}
        />
      </Section>
    </DocPage>
  );
}

