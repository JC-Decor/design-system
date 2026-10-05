import { Anchor } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function BreadcrumbsPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Breadcrumbs"
      source="mantine"
      mantineName="breadcrumbs"
      description="Trilha de navegação que mostra onde o usuário está na hierarquia de categorias da loja ou do painel."
      importCode={`import { Breadcrumbs } from '@jcdecor/ui';`}
    >
      <Section title="Uso">
        <P>
          Passe os itens como filhos — normalmente <code>Anchor</code> para os níveis anteriores e um <code>Text</code> com{' '}
          <code>aria-current="page"</code> para a página atual, sem link.
        </P>
        <Demo id="breadcrumbs/usage" />
      </Section>

      <Section title="Separador">
        <P>
          O separador padrão é <code>/</code>. Troque por um ícone ou caractere com <code>separator</code> e ajuste o espaçamento com{' '}
          <code>separatorMargin</code>.
        </P>
        <Demo id="breadcrumbs/separator" />
      </Section>

      <Section title="Com ícone de início">
        <P>No painel administrativo, o primeiro nível pode ser só um ícone — mantenha um <code>aria-label</code> descritivo.</P>
        <Demo id="breadcrumbs/with-icon" />
      </Section>

      <Section title="No tema JC">
        <P>
          Os links usam o estilo do <code>Anchor</code> (<code>--ds-link</code>, peso 500) e o separador fica em <code>--ds-text-3</code>, para não
          competir com os itens. O{' '}
          <Anchor component={Link} to="/componentes/page-header">
            PageHeader
          </Anchor>{' '}
          já inclui breadcrumbs, título e ações.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'children', type: 'ReactNode', required: true, description: 'Itens da trilha, renderizados na ordem.', vueName: 'default slot', vueType: 'slot' },
            { name: 'separator', type: 'ReactNode', default: "'/'", description: 'Conteúdo exibido entre os itens.', vueType: 'MantineNode | slot #separator' },
            { name: 'separatorMargin', type: 'MantineSpacing', default: "'xs'", description: 'Espaço horizontal em volta do separador.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre breadcrumbs a partir do segundo nível de profundidade. O último item é a página atual e não deve ser link. Em telas pequenas,
          considere exibir só o nível anterior (“← Pisos”).
        </P>
      </Section>
    </DocPage>
  );
}
