import { Box, Flex, type FlexProps } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

function Item({ children, h }: { children: React.ReactNode; h?: number }) {
  return (
    <Box px="md" py="xs" h={h} bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      {children}
    </Box>
  );
}

function FlexPreview(props: FlexProps) {
  return (
    <Flex mih={140} p="sm" style={{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }} {...props}>
      <Item>Piso</Item>
      <Item h={56}>Papel de parede</Item>
      <Item>Cortina</Item>
    </Flex>
  );
}

export default function FlexPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Flex"
      source="mantine"
      mantineName="flex"
      description="Container flexbox com props responsivas de direção, alinhamento e espaçamento. Use quando Group e Stack não bastam — por exemplo, quando a direção muda entre mobile e desktop."
      importCode={`import { Flex } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={FlexPreview}
          name="Flex"
          previewWidth={340}
          controls={[
            { prop: 'gap', type: 'size', initialValue: 'md' },
            { prop: 'justify', type: 'select', data: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'], initialValue: 'flex-start' },
            { prop: 'align', type: 'select', data: ['flex-start', 'center', 'flex-end', 'stretch'], initialValue: 'flex-start' },
            { prop: 'direction', type: 'segmented', data: ['row', 'column', 'row-reverse'], initialValue: 'row' },
            { prop: 'wrap', type: 'segmented', data: ['wrap', 'nowrap'], initialValue: 'wrap' },
          ]}
        />
      </Section>

      <Section title="Direção responsiva">
        <P>
          Todas as props aceitam objetos por breakpoint. Aqui o formulário empilha no mobile e fica em linha a partir de <code>sm</code> (768px).
        </P>
        <Demo id="flex/responsive" />
      </Section>

      <Section title="Quebra de linha">
        <Demo id="flex/wrap" />
      </Section>

      <Section title="Distribuição">
        <Demo id="flex/justify" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem customizações. Os valores de <code>gap</code> usam a escala de espaçamento da marca: xs 4 · sm 8 · md 16 · lg 24 · xl 32px.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'direction', type: 'StyleProp<flexDirection>', default: "'row'", description: 'Direção do eixo principal.' },
            { name: 'gap / rowGap / columnGap', type: 'StyleProp<MantineSpacing>', description: 'Espaçamento entre os itens.' },
            { name: 'justify', type: 'StyleProp<justifyContent>', description: 'Distribuição no eixo principal.' },
            { name: 'align', type: 'StyleProp<alignItems>', description: 'Alinhamento no eixo cruzado.' },
            { name: 'wrap', type: 'StyleProp<flexWrap>', description: 'Quebra de linha.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Para uma linha simples de itens use <code>Group</code>; para uma coluna, <code>Stack</code>. Reserve o <code>Flex</code> para valores
          responsivos ou combinações que eles não cobrem.
        </P>
      </Section>
    </DocPage>
  );
}
