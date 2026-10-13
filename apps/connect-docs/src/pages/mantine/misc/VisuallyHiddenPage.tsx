import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';

export default function VisuallyHiddenPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="VisuallyHidden"
      source="mantine"
      mantineName="visually-hidden"
      description="Esconde conteúdo da tela mantendo-o acessível a leitores de tela. Use para rótulos de botões só com ícone e contexto extra em indicadores e status."
      importCode={`import { VisuallyHidden } from '@jcdecor/connect-ui';`}
    >
      <Section title="Botões com ícone">
        <P>Um botão só com ícone precisa de um nome acessível. O texto dentro de <code>VisuallyHidden</code> é lido, mas não aparece.</P>
        <Demo id="visually-hidden/icon-button" />
      </Section>

      <Section title="Contexto para leitores de tela">
        <P>
          Uma seta e uma porcentagem num card de KPI não dizem “aumento em relação ao mês anterior” para quem não enxerga o visual —
          adicione o contexto em texto oculto.
        </P>
        <Demo id="visually-hidden/kpi" />
      </Section>

      <Section title="No tema Connect">
        <P>Sem customizações: o componente não tem aparência.</P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Para um único rótulo, <code>aria-label</code> no botão também funciona. Prefira VisuallyHidden quando o texto deve ser traduzido junto com
          o conteúdo ou combinar com texto visível.
        </P>
      </Section>
    </DocPage>
  );
}
