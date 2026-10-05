import { PageHeader } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function PageHeaderPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="PageHeader"
      source="jc"
      sourcePath="packages/ui/src/components/PageHeader"
      description="Cabeçalho de página: breadcrumbs, kicker, título, descrição e ações alinhadas à direita. O título é sempre um <h1>."
      importCode={`import { PageHeader } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PageHeader}
          name="PageHeader"
          centered={false}
          controls={[
            { prop: 'kicker', type: 'string', initialValue: 'Painéis' },
            { prop: 'title', type: 'string', initialValue: 'Vendas por categoria' },
            { prop: 'description', type: 'string', initialValue: 'Receita, pedidos e ticket médio dos últimos 30 dias.' },
            { prop: 'size', type: 'segmented', data: ['headline', 'display'], initialValue: 'headline' },
          ]}
          baseProps={{ mb: 0 }}
        />
      </Section>

      <Section title="Com ações">
        <P>As ações ficam alinhadas à base do título e quebram para a linha de baixo em telas estreitas.</P>
        <Demo id="page-header/usage" />
      </Section>

      <Section title="Breadcrumbs">
        <P>
          Itens com <code>href</code> viram links; o último item, sem <code>href</code>, representa a página atual. Para usar o{' '}
          <OnlyFor framework="react"><code>Link</code> do react-router, passe-o em <code>linkComponent</code>.</OnlyFor>
          <OnlyFor framework="vue"><code>RouterLink</code> do vue-router, passe-o em <code>:link-component="RouterLink"</code>.</OnlyFor>
        </P>
        <Demo id="page-header/breadcrumbs" />
      </Section>

      <Section title="Tamanho display">
        <P>Use <code>size="display"</code> na página principal de uma área (home do painel, landing do DS).</P>
        <Demo id="page-header/display" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', vueType: 'MantineNode | slot #title', required: true, description: 'Título da página (<h1>).' },
            { name: 'kicker', type: 'ReactNode', vueType: 'MantineNode | slot #kicker', description: 'Sobretítulo em caixa-alta.' },
            { name: 'description', type: 'ReactNode', vueType: 'MantineNode | slot #description', description: 'Texto de apoio (subheadline-large, até 640px).' },
            { name: 'actions', type: 'ReactNode', vueType: 'MantineNode | slot #actions', description: 'Botões à direita do título.' },
            { name: 'breadcrumbs', type: 'PageHeaderBreadcrumb[]', description: '{ label, href? } — itens sem href são texto.' },
            { name: 'linkComponent', type: 'React.ElementType', vueType: 'string | Component', default: "'a'", description: 'Componente dos links do breadcrumb (recebe href e to).', vueDescription: <>Componente dos links do breadcrumb, ex.: <code>RouterLink</code> do vue-router (recebe <code>to</code> e <code>href</code>).</> },
            { name: 'size', type: "'headline' | 'display'", default: "'headline'", description: 'headline-large ou display-small no título.' },
            { name: '...BoxProps', type: 'BoxProps', description: 'Style props do Box. Margem inferior padrão: mb="xl".' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
