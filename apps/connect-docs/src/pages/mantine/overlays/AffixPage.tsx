import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function AffixPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Affix"
      source="mantine"
      mantineName="affix"
      description="Fixa um elemento em uma posição da viewport, renderizado em portal. Use para “voltar ao topo” em listas longas e para uma ação rápida flutuante no mobile."
      importCode={`import { Affix } from '@jcdecor/connect-ui';`}
    >
      <Section title="Voltar ao topo">
        <P>
          Combine com <code>useWindowScroll</code> e <code>Transition</code> para mostrar o botão só depois de rolar. Este exemplo é real: role esta
          página e ele aparece no canto inferior direito.
        </P>
        <Demo id="affix/back-to-top" />
      </Section>

      <Section title="Ação rápida no mobile">
        <P>
          No Painel em telas pequenas, "Registrar ponto" fica fixo no canto inferior direito. Para não cobrir a documentação, este exemplo usa{' '}
          <code>{'withinPortal={false}'}</code> e <code>position: absolute</code> dentro de uma moldura; em produção remova os dois.
        </P>
        <Demo id="affix/quick-action" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Affix não tem estilo visual — o tema não o altera. A aparência vem do conteúdo (Button, ActionIcon). Botões flutuantes
          ganham <code>--ds-shadow-lg</code> (shadow-3) para se destacar da página; o Button <code>filled</code> já traz a sombra colorida navy do Connect.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'position', type: '{ top?, right?, bottom?, left? }', default: '{ bottom: 0, right: 0 }', description: 'Distâncias das bordas da viewport.' },
            { name: 'zIndex', type: 'number', default: '200', description: 'Camada do elemento.' },
            { name: 'withinPortal', type: 'boolean', default: 'true', description: 'Renderiza no body, fora do fluxo do layout.' },
            { name: 'portalProps', type: 'PortalProps', description: 'Ex.: target para outro container.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          No máximo um elemento fixo por canto. Verifique se ele não cobre a ActionBar de seleção em massa ou o rodapé de formulários no mobile (use <code>bottom</code> maior
          quando houver barra inferior) e dê sempre um <code>aria-label</code> a botões só com ícone.
        </P>
      </Section>
    </DocPage>
  );
}
