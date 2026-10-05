import { Box, Stack, type StackProps } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import StackPreviewVue from '../../../vue-demos/stack/StackPreview.vue';

function StackPreview(props: StackProps) {
  return (
    <Stack h={260} p="sm" style={{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }} {...props}>
      {['Endereço', 'Entrega', 'Pagamento'].map((item) => (
        <Box key={item} px="md" py="xs" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
          {item}
        </Box>
      ))}
    </Stack>
  );
}

export default function StackPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Stack"
      source="mantine"
      mantineName="stack"
      description="Empilha elementos em uma coluna com espaçamento uniforme. É o container padrão para formulários, listas e o conteúdo de cards."
      importCode={`import { Stack } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={StackPreview}
          vue={{ component: StackPreviewVue }}
          name="Stack"
          previewWidth={260}
          controls={[
            { prop: 'gap', type: 'size', initialValue: 'md' },
            { prop: 'align', type: 'select', data: ['stretch', 'flex-start', 'center', 'flex-end'], initialValue: 'stretch' },
            { prop: 'justify', type: 'select', data: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around'], initialValue: 'flex-start' },
          ]}
        />
      </Section>

      <Section title="Formulário">
        <P>
          <code>gap="md"</code> (16px) é o ritmo padrão entre campos. Em formulários densos, use <code>sm</code>.
        </P>
        <Demo id="stack/form" />
      </Section>

      <Section title="Conteúdo + ação no rodapé">
        <P>
          Com uma altura definida, <code>justify="space-between"</code> empurra a ação para o fim do bloco.
        </P>
        <Demo id="stack/justify" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações. Os valores de <code>gap</code> seguem a escala de espaçamento da marca.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'gap', type: 'MantineSpacing', default: "'md'", description: 'Espaçamento entre os itens.' },
            { name: 'align', type: 'alignItems', default: "'stretch'", description: 'Alinhamento horizontal.' },
            { name: 'justify', type: 'justifyContent', default: "'flex-start'", description: 'Distribuição vertical.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
