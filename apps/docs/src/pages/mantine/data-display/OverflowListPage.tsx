import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function OverflowListPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="OverflowList"
      source="mantine"
      mantineName="overflow-list"
      description="Mostra quantos itens couberem no espaço disponível e resume o restante (“+3”). Novo no Mantine 9 — ideal para tags e filtros."
      importCode={`import { OverflowList } from '@jcdecor/ui';`}
    >
      <Section title="Tags do produto">
        <P>
          <OnlyFor framework="react"><code>renderItem</code> desenha cada item e <code>renderOverflow</code> recebe os itens que não couberam.</OnlyFor>
          <OnlyFor framework="vue">O slot <code>#item</code> desenha cada item e <code>#overflow</code> recebe os itens que não couberam (ou use as props <code>renderItem</code> / <code>renderOverflow</code>).</OnlyFor> O cálculo acompanha a largura
          do contêiner — arraste o canto do painel para ver.
        </P>
        <Demo id="overflow-list/tags" />
      </Section>

      <Section title="Várias linhas">
        <P>
          <code>maxRows</code> permite quebrar em até N linhas antes de resumir — bom para filtros ativos em uma barra lateral.
        </P>
        <Demo id="overflow-list/rows" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem overrides: o OverflowList é só layout. O visual vem dos itens — use <code>Badge</code> (variante <code>light</code>) para tags e{' '}
          <code>outline</code> no contador de excedentes.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'T[]', required: true, description: 'Itens a exibir.' },
            { name: 'renderItem', type: '(item, index) => ReactNode', required: true, description: 'Renderiza um item.', vueName: '#item / renderItem', vueType: 'slot { item, index } | (item, index) => VNodeChild' },
            { name: 'renderOverflow', type: '(items) => ReactNode', required: true, description: 'Renderiza o resumo dos itens ocultos.', vueName: '#overflow / renderOverflow', vueType: 'slot { items } | (items) => VNodeChild' },
            { name: 'maxRows', type: 'number', default: '1', description: 'Número de linhas visíveis.' },
            { name: 'maxVisibleItems', type: 'number', default: 'Infinity', description: 'Limite de itens visíveis, mesmo com espaço.' },
            { name: 'collapseFrom', type: "'start' | 'end'", default: "'end'", description: 'De onde os itens são recolhidos.' },
            { name: 'gap', type: 'MantineSpacing', default: "'xs'", description: 'Espaço entre itens.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Garanta que o conteúdo oculto seja alcançável: mostre-o em um <code>Tooltip</code> ou <code>Popover</code> a partir do contador. Para
          dados de objeto, informe <code>getItemKey</code> para recalcular corretamente quando a ordem mudar.
        </P>
      </Section>
    </DocPage>
  );
}
