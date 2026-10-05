import { Anchor } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function TablePage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Table"
      source="mantine"
      mantineName="table"
      description="Tabelas com cabeçalho em caixa-alta, linhas com hover suave e números tabulares alinhados à direita — o visual do .ds-table."
      importCode={`import { Table } from '@jcdecor/ui';`}
    >
      <Section title="Tabela da marca">
        <P>
          Reprodução da tabela do guia de marca. Colunas numéricas ficam à direita (<code>ta="right"</code>) e o <code>tabularNums</code> garante
          dígitos de mesma largura para facilitar a comparação.
        </P>
        <Demo id="table/brand" />
      </Section>

      <Section title="Com prop data">
        <P>Para tabelas simples, passe <code>head</code> e <code>body</code> pela prop <code>data</code>.</P>
        <Demo id="table/data-prop" />
      </Section>

      <Section title="Pedidos com status">
        <Demo id="table/orders" />
      </Section>

      <Section title="Listrada, com bordas e rolagem">
        <P>
          <code>striped</code> usa <code>--ds-surface-2</code>. Em telas pequenas, envolva em <OnlyFor framework="react"><code>Table.ScrollContainer</code></OnlyFor><OnlyFor framework="vue"><code>TableScrollContainer</code></OnlyFor> com uma{' '}
          <code>minWidth</code>.
        </P>
        <Demo id="table/striped" />
      </Section>

      <Section title="O que o DS customizou">
        <PropsTable
          rows={[
            { name: 'highlightOnHover', type: 'boolean', default: 'true', description: 'Hover com --ds-surface-2.' },
            { name: 'verticalSpacing', type: 'MantineSpacing', default: 'sm', description: '8px — densidade do .ds-table.' },
            { name: 'horizontalSpacing', type: 'MantineSpacing', default: 'sm', description: '8px.' },
            { name: 'Th', type: 'classNames', description: '12px, 600, caixa-alta, tracking 0.05em, cor --ds-text-3.' },
            { name: 'Thead', type: 'classNames', description: 'Borda inferior de 2px --ds-border; demais bordas --ds-border-soft.' },
          ]}
        />
        <P>
          Precisa de ordenação, paginação, seleção ou estado vazio? Use o{' '}
          <Anchor component={Link} to="/componentes/data-table">
            DataTable
          </Anchor>
          , construído sobre esta tabela.
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Alinhe texto à esquerda e números à direita, com o cabeçalho seguindo o alinhamento da coluna. Use o formato brasileiro (
          <code>127.237</code>, <code>6,6</code>) — <code>toLocaleString('pt-BR')</code> ou os helpers <code>formatNumber</code>/<code>formatCurrency</code> de <code>@jcdecor/ui</code>.
        </P>
      </Section>
    </DocPage>
  );
}
