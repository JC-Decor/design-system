import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';

export default function DashboardPattern() {
  return (
    <DocPage
      kicker="Padrões"
      title="Dashboard"
      description="Painel de marketing completo: cabeçalho com filtros, linha de KPIs, gráficos em ChartCard e tabela de palavras-chave."
    >
      <Section title="Exemplo">
        <P>
          O seletor de período do cabeçalho e o do gráfico compartilham o mesmo estado. A tabela é
          ordenável por qualquer coluna e paginada localmente.
        </P>
        <Demo id="patterns/dashboard" />
      </Section>

      <Section title="Composição">
        <P>
          <code>PageHeader</code> (breadcrumbs, kicker, ações) → <code>KpiGroup</code> com quatro{' '}
          <code>KpiCard</code> (um com <code>Sparkline</code> no slot <code>chart</code>, outro com{' '}
          <code>colorValue</code>) → <code>Grid</code> 8/4 com <code>ChartCard</code> +{' '}
          <code>AreaChart</code> empilhado e <code>ChartCard</code> + <code>DonutChart</code> →{' '}
          <code>Card</code> com <code>DataTable</code> <code>plain</code>. No mobile tudo vira uma
          coluna.
        </P>
        <P>
          Use o fundo da página (<code>var(--ds-bg)</code>) atrás dos cards para que as superfícies
          se destaquem, e deixe os gráficos sem <code>color</code> para herdar a paleta da marca.
        </P>
      </Section>
    </DocPage>
  );
}
