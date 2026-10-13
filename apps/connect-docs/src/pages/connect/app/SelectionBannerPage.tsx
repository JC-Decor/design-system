import { SelectionBanner } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc → @jcdecor/connect-ui: mesma API
import { SelectionBanner } from '@jcdecor/connect-ui';`;

export default function SelectionBannerPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="SelectionBanner"
      source="connect"
      sourcePath="packages/connect-ui/src/components/SelectionBanner"
      description="Barra de ações em massa para tabelas paginadas (.bulk-actions-bar): contagem, oferta de selecionar todos os resultados filtrados (estilo Gmail), ações e Limpar seleção."
      importCode={`import { SelectionBanner } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={SelectionBanner}
          name="SelectionBanner"
          centered={false}
          baseProps={{ onSelectAllMatching: () => {}, onClear: () => {}, withPadding: false }}
          codeProps={{ onSelectAllMatching: 'selecionarTodos', onClear: 'limpar' }}
          controls={[
            { prop: 'selectedCount', type: 'number', initialValue: 20, min: 0 },
            { prop: 'matchingTotal', type: 'number', initialValue: 120, min: 0 },
            { prop: 'allMatching', type: 'boolean', initialValue: false },
            { prop: 'showSelectAllMatching', type: 'boolean', initialValue: true },
            { prop: 'entityLabel', type: 'string', initialValue: 'colaborador' },
            { prop: 'entityLabelPlural', type: 'string', initialValue: 'colaboradores' },
          ]}
        />
      </Section>

      <Section title="Estados">
        <P>
          Some quando não há seleção. Com <code>allMatching</code>, o texto passa a "Todos os N … filtrados selecionados". A oferta
          de selecionar todos aparece com <code>showSelectAllMatching</code> — normalmente quando a página inteira está marcada e há
          mais resultados.
        </P>
        <Demo id="cn-selection-banner/states" />
      </Section>

      <Section title="Com DataTable">
        <Demo id="cn-data-table/selection" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'selectedCount', type: 'number', required: true, description: 'Itens marcados.' },
            { name: 'matchingTotal', type: 'number', required: true, description: 'Total que corresponde aos filtros.' },
            { name: 'allMatching', type: 'boolean', required: true, description: 'Todos os resultados filtrados estão selecionados.' },
            { name: 'showSelectAllMatching', type: 'boolean', required: true, description: 'Mostra o link "Selecionar todos os N…".' },
            { name: 'entityLabel / entityLabelPlural', type: 'string', required: true, description: 'Singular e plural da entidade.' },
            { name: 'onSelectAllMatching', type: '() => void', required: true, description: 'Clique no link.' },
            { name: 'onClear', type: '() => void', required: true, description: 'Botão "Limpar seleção".' },
            { name: 'actions', type: 'ReactNode', description: 'Botões das ações em massa.' },
            { name: 'withPadding', type: 'boolean', default: 'true', description: 'Envolve no recuo do card (.card-pad-x, 16px 22px).' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API: troque o import. Novidade: <code>withPadding=&#123;false&#125;</code> para usar a barra sem o recuo do card.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
