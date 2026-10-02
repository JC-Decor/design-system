import { Box, Group, type GroupProps } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box px="md" py="xs" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      {children}
    </Box>
  );
}

function GroupPreview(props: GroupProps) {
  return (
    <Group mih={80} p="sm" style={{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }} {...props}>
      <Item>Pisos</Item>
      <Item>Papel de parede</Item>
      <Item>Painel ripado com acabamento</Item>
    </Group>
  );
}

export default function GroupPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Group"
      source="mantine"
      mantineName="group"
      description="Organiza elementos em uma linha horizontal com espaçamento uniforme. Use em barras de ações, grupos de botões, tags e linhas de rótulo + valor."
      importCode={`import { Group } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={GroupPreview}
          name="Group"
          previewWidth={340}
          controls={[
            { prop: 'gap', type: 'size', initialValue: 'md' },
            { prop: 'justify', type: 'select', data: ['flex-start', 'center', 'flex-end', 'space-between'], initialValue: 'flex-start' },
            { prop: 'align', type: 'select', data: ['flex-start', 'center', 'flex-end', 'stretch'], initialValue: 'center' },
            { prop: 'wrap', type: 'segmented', data: ['wrap', 'nowrap'], initialValue: 'wrap' },
            { prop: 'grow', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Barra de ferramentas">
        <P>
          <code>justify="space-between"</code> separa grupos aninhados — um padrão comum no topo de tabelas do painel.
        </P>
        <Demo id="group/toolbar" />
      </Section>

      <Section title="Grow">
        <P>
          Com <code>grow</code>, cada filho recebe a mesma largura. Por padrão (<code>preventGrowOverflow</code>), nenhum filho passa da sua fração;
          desative para deixar o texto mais longo ocupar mais espaço.
        </P>
        <Demo id="group/grow" />
      </Section>

      <Section title="Tags e metadados">
        <Demo id="group/tags" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações. O <code>gap</code> padrão é <code>md</code> (16px) na escala da marca.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'gap', type: 'MantineSpacing', default: "'md'", description: 'Espaçamento entre os itens.' },
            { name: 'justify', type: 'justifyContent', default: "'flex-start'", description: 'Distribuição horizontal.' },
            { name: 'align', type: 'alignItems', default: "'center'", description: 'Alinhamento vertical.' },
            { name: 'wrap', type: 'flexWrap', default: "'wrap'", description: 'Quebra de linha.' },
            { name: 'grow', type: 'boolean', default: 'false', description: 'Filhos dividem a largura igualmente.' },
            { name: 'preventGrowOverflow', type: 'boolean', default: 'true', description: 'Limita cada filho à sua fração quando grow está ativo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          O Group não muda de direção. Se no mobile os itens devem empilhar, use <code>Flex</code> com <code>direction</code> responsiva ou{' '}
          <code>{'<Stack>'}</code> + <code>{'<Group visibleFrom="sm">'}</code>.
        </P>
      </Section>
    </DocPage>
  );
}
