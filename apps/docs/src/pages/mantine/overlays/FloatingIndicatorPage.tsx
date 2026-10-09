import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function FloatingIndicatorPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="FloatingIndicator"
      source="mantine"
      mantineName="floating-indicator"
      description="Indicador que desliza até o elemento ativo de um grupo. Base para abas e controles segmentados customizados."
      importCode={`import { FloatingIndicator } from '@jcdecor/ui';`}
    >
      <Section title="Abas de status">
        <P>
          Passe o <code>parent</code> (com <code>position: relative</code>) e o <code>target</code> ativo. O indicador não tem estilo próprio: aqui
          ele vira um “chip” em <code>--ds-surface</code> com <code>--ds-shadow-sm</code> sobre um trilho <code>--ds-bg</code>.
        </P>
        <Demo id="floating-indicator/tabs" />
      </Section>

      <Section title="Sublinhado">
        <P>O mesmo componente como linha de 2px em <code>--ds-primary</code> — o padrão das abas da página de produto.</P>
        <Demo id="floating-indicator/underline" />
      </Section>

      <Section title="No tema JC">
        <P>
          O tema não estiliza o FloatingIndicator globalmente, porque ele também é usado internamente pelo SegmentedControl. Aplique os tokens
          via <code>style</code> ou <code>className</code> como nos exemplos.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'target', type: 'HTMLElement | null', required: true, description: 'Elemento ativo que o indicador cobre.' },
            { name: 'parent', type: 'HTMLElement | null', required: true, description: 'Container relativo usado para calcular a posição.' },
            { name: 'transitionDuration', type: 'number', default: '150', description: 'Duração da animação em ms.' },
            { name: 'displayAfterTransitionEnd', type: 'boolean', default: 'false', description: 'Esconde até a primeira transição terminar.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Se o seu caso cabe em <code>SegmentedControl</code> ou <code>Tabs</code>, use-os — já têm semântica e teclado. Em abas customizadas, adicione{' '}
          <code>role="tablist"</code>/<code>role="tab"</code> e <code>aria-selected</code>, e mantenha os botões acima do indicador com{' '}
          <code>z-index</code>.
        </P>
      </Section>
    </DocPage>
  );
}
