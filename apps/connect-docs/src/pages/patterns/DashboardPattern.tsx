import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';

export default function DashboardPattern() {
  return (
    <DocPage
      kicker="Padrões"
      title="Painel do gestor"
      description="Tela inicial completa do Connect montada só com componentes do DS: shell com sidebar navy, header com busca e notificações, KPIs, gráfico, alertas, atividade e atalhos."
    >
      <Section title="Exemplo">
        <Demo id="pattern-dashboard/home" />
      </Section>
      <Section title="Como está montado">
        <P>
          <code>ConnectShell</code> recebe a <code>perspective</code> (usuário + menu) e cuida do drawer no mobile. O conteúdo segue o grid do painel:
          uma linha de <code>KpiCard</code> em <code>SimpleGrid</code> de 4 colunas e, abaixo, pares de cards em 2 colunas com espaçamento de 20px
          (<code>--grid-gap</code>). Cada card usa <code>Card</code> + <code>CardHeader</code> para título, subtítulo e ações.
        </P>
        <P>
          Prioridades seguem os tons do Connect: alertas <code>high</code> em coral, <code>med</code> em amarelo e informativos em azul. Use no máximo um
          botão primário por tela; ações secundárias em <code>ghost</code> ou <code>outline</code>.
        </P>
      </Section>
    </DocPage>
  );
}
