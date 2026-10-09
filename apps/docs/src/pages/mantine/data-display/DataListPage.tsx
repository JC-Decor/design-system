import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function DataListPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="DataList"
      source="mantine"
      mantineName="data-list"
      description="Lista de pares rótulo–valor (dl/dt/dd) para especificações de produto, dados do pedido e resumos. Novo no Mantine 9."
      importCode={`import { DataList } from '@jcdecor/ui';`}
    >
      <Section title="Especificações do produto">
        <P>
          Cada <OnlyFor framework="react"><code>DataList.Item</code></OnlyFor><OnlyFor framework="vue"><code>DataListItem</code></OnlyFor> combina um <OnlyFor framework="react"><code>ItemLabel</code></OnlyFor><OnlyFor framework="vue"><code>DataListItemLabel</code></OnlyFor> (dt) e um <OnlyFor framework="react"><code>ItemValue</code></OnlyFor><OnlyFor framework="vue"><code>DataListItemValue</code></OnlyFor> (dd). <code>withDivider</code>{' '}
          separa as linhas e <code>labelWidth</code> alinha os valores em coluna.
        </P>
        <Demo id="data-list/specs" />
      </Section>

      <Section title="Orientação vertical">
        <P>
          <code>orientation="vertical"</code> empilha rótulo e valor — bom para cabeçalhos de pedido em grade.
        </P>
        <Demo id="data-list/vertical" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'itemLabel', type: 'classNames', description: 'Rótulo em --ds-text-3.' },
            { name: 'itemValue', type: 'classNames', description: 'Valor em --ds-text, peso 500.' },
            { name: 'withDivider', type: 'classNames', description: 'Divisores em --ds-border-soft (o padrão do Mantine usa a borda forte de campos).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Rótulo ao lado ou acima do valor.' },
            { name: 'withDivider', type: 'boolean', default: 'false', description: 'Borda entre os itens.' },
            { name: 'labelWidth', type: 'CSS minWidth', default: "'120px'", description: 'Largura mínima do rótulo.' },
            { name: 'size', type: 'MantineSize', default: "'sm'", description: 'Tamanho da fonte e entrelinha.' },
            { name: 'gap', type: 'MantineSpacing', default: "'sm'", description: 'Espaço entre itens.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use DataList para dados de leitura; para comparar vários produtos lado a lado, use <code>Table</code>. Mantenha os rótulos curtos e
          consistentes entre produtos da mesma categoria e use unidades no padrão brasileiro (<code>2,70 m</code>, <code>7,4 kg</code>).
        </P>
      </Section>
    </DocPage>
  );
}
