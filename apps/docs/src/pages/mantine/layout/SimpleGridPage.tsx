import { Box, SimpleGrid, type SimpleGridProps } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

function SimpleGridPreview(props: SimpleGridProps) {
  return (
    <SimpleGrid {...props}>
      {['Pisos', 'Papéis', 'Painéis', 'Gramas', 'Cortinas', 'Tatames'].map((item) => (
        <Box key={item} p="md" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" ta="center" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
          {item}
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default function SimpleGridPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="SimpleGrid"
      source="mantine"
      mantineName="simple-grid"
      description="CSS grid em que todas as colunas têm a mesma largura. Use para vitrines de produtos, cards de categoria e linhas de KPIs."
      importCode={`import { SimpleGrid } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={SimpleGridPreview}
          name="SimpleGrid"
          previewWidth={340}
          controls={[
            { prop: 'cols', type: 'number', initialValue: 3, min: 1, max: 6 },
            { prop: 'spacing', type: 'size', initialValue: 'lg' },
            { prop: 'verticalSpacing', type: 'size', initialValue: 'lg' },
          ]}
        />
      </Section>

      <Section title="Vitrine responsiva">
        <P>
          <code>cols</code> e <code>spacing</code> aceitam objetos por breakpoint: 1 coluna no celular, 2 a partir de <code>xs</code> e 3 a partir de{' '}
          <code>md</code>.
        </P>
        <Demo id="simple-grid/products" />
      </Section>

      <Section title="Categorias">
        <Demo id="grid/simple-grid" />
      </Section>

      <Section title="Largura mínima da coluna">
        <P>
          Com <code>minColWidth</code>, o número de colunas é calculado automaticamente (<code>repeat(auto-fill, minmax(…))</code>) e{' '}
          <code>cols</code> é ignorado.
        </P>
        <Demo id="simple-grid/min-col-width" />
      </Section>

      <Section title="Container queries">
        <P>
          Com <code>type="container"</code>, as chaves de <code>cols</code> são larguras do próprio container — útil em widgets que aparecem em
          colunas de tamanhos diferentes.
        </P>
        <Demo id="simple-grid/container" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações. Use <code>spacing="lg"</code> (24px) para seguir o gutter do grid da marca.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'cols', type: 'StyleProp<number>', default: '1', description: 'Número de colunas.' },
            { name: 'spacing', type: 'StyleProp<MantineSpacing>', default: "'md'", description: 'Espaço horizontal entre colunas.' },
            { name: 'verticalSpacing', type: 'StyleProp<MantineSpacing>', description: 'Espaço entre linhas (padrão: igual a spacing).' },
            { name: 'minColWidth', type: 'string | number', description: 'Largura mínima; ativa colunas automáticas.' },
            { name: 'type', type: "'media' | 'container'", default: "'media'", description: 'Media queries ou container queries.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
