import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function TablePage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Table"
      source="mantine"
      mantineName="table"
      description="A tabela do Connect: cabeçalho em faixa tint com rótulos de 11px em caixa-alta, linhas separadas por --line, hover suave e linha selecionada em lavender."
      importCode={`import { Table } from '@jcdecor/connect-ui';`}
    >
      <Section title="Tabela básica">
        <P>
          Sem nenhuma prop, a tabela já tem o visual do painel. Colunas numéricas ficam à direita (<code>ta="right"</code>) e o{' '}
          <code>tabularNums</code> garante dígitos de mesma largura para facilitar a comparação.
        </P>
        <Demo id="table/basic" />
      </Section>

      <Section title="Com prop data">
        <P>Para tabelas simples, passe <code>head</code>, <code>body</code> e <code>caption</code> pela prop <code>data</code>.</P>
        <Demo id="table/data-prop" />
      </Section>

      <Section title="Colaboradores com status e seleção">
        <P>
          Combine <code>Avatar</code>, <code>Badge</code> (status) e um <code>Menu</code> de ações por linha. Marque a linha selecionada com{' '}
          <code>data-selected</code> no <code>Table.Tr</code>: o tema pinta o fundo com <code>--cn-tone-lavender-soft</code>.
        </P>
        <Demo id="table/employees" />
      </Section>

      <Section title="Listrada, com bordas e rolagem">
        <P>
          <code>striped</code> usa <code>--ds-surface-2</code>. Em telas pequenas, envolva em <code>Table.ScrollContainer</code> com uma{' '}
          <code>minWidth</code>.
        </P>
        <Demo id="table/striped" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'highlightOnHover', type: 'defaultProps', default: 'true', description: 'Hover com --ds-surface-2.' },
            { name: 'verticalSpacing / horizontalSpacing', type: 'defaultProps', default: "'sm'", description: '10px — densidade das tabelas do painel.' },
            { name: 'table', type: 'classNames', description: 'Corpo em 12,5px; bordas --ds-border-soft (--line); células em --ds-text-2.' },
            { name: 'th', type: 'classNames', description: 'Fundo --ds-surface-tint, 11px, peso 600, caixa-alta, tracking 0.04em, cor --ds-text-3, sem quebra.' },
            { name: 'thead', type: 'classNames', description: 'Borda inferior de 1px --ds-border-soft.' },
            { name: 'tr[data-selected]', type: 'classNames', description: 'Linha selecionada em --cn-tone-lavender-soft.' },
          ]}
        />
        <P>
          Precisa de ordenação, paginação, seleção em massa ou estado vazio? A tabela de dados pronta do Connect está em{' '}
          <em>Componentes Connect</em>, construída sobre esta tabela.
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Alinhe texto à esquerda e números à direita, com o cabeçalho seguindo o alinhamento da coluna. Use o formato brasileiro (
          <code>1.284</code>, <code>2,1%</code>) — <code>toLocaleString('pt-BR')</code> ou os helpers <code>formatNumber</code>/
          <code>formatPercent</code> de <code>@jcdecor/connect-ui</code>. Não dependa só da cor do status: o Badge sempre leva o rótulo.
        </P>
      </Section>
    </DocPage>
  );
}
