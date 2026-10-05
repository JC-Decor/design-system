import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function AffixPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Affix"
      source="mantine"
      mantineName="affix"
      description="Fixa um elemento em uma posição da viewport, renderizado em portal. Use para “voltar ao topo” e o botão do WhatsApp."
      importCode={`import { Affix } from '@jcdecor/ui';`}
    >
      <Section title="Voltar ao topo">
        <P>
          Combine com <code>useWindowScroll</code> e <code>Transition</code> para mostrar o botão só depois de rolar. Este exemplo é real: role esta
          página e ele aparece no canto inferior direito.
        </P>
        <Demo id="affix/back-to-top" />
      </Section>

      <Section title="Botão do WhatsApp">
        <P>
          Na loja, o atendimento por WhatsApp fica no canto inferior direito. Para não cobrir a documentação, este exemplo usa{' '}
          <code>{vue ? ':within-portal="false"' : 'withinPortal={false}'}</code> e <code>position: absolute</code> dentro de uma moldura; em produção remova os dois.
        </P>
        <Demo id="affix/whatsapp" />
      </Section>

      <Section title="No tema JC">
        <P>
          Affix não tem estilo visual — o tema não o altera. A aparência vem do conteúdo (Button, ActionIcon). Use <code>--ds-shadow-lg</code> em botões
          flutuantes e <code>evergreen</code> para o WhatsApp.
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
          No máximo um elemento fixo por canto. Verifique se ele não cobre o CTA do carrinho ou a ActionBar no mobile (use <code>bottom</code> maior
          quando houver barra inferior) e dê sempre um <code>aria-label</code> a botões só com ícone.
        </P>
      </Section>
    </DocPage>
  );
}
