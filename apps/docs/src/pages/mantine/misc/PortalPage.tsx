import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function PortalPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Portal"
      source="mantine"
      mantineName="portal"
      description="Renderiza o conteúdo fora da árvore do DOM do componente pai. Use em elementos flutuantes customizados que não podem ser cortados por overflow ou z-index."
      importCode={`import { Portal } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          Por padrão, o conteúdo vai para um nó compartilhado em <code>document.body</code>. Modal, Drawer, Popover, Tooltip e Menu já usam
          Portal internamente.
        </P>
        <Demo id="portal/basic" />
      </Section>

      <Section title="Destino customizado">
        <P>
          Passe um elemento ou seletor em <code>target</code> para renderizar em outro lugar da página.
          <OnlyFor framework="vue"> No Vue, capture o elemento de destino com <code>rootRef</code> (ou uma template ref) e renderize o Portal só depois que ele existir.</OnlyFor>
        </P>
        <Demo id="portal/target" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações: o Portal não tem aparência própria.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'target', type: 'HTMLElement | string', description: 'Elemento ou seletor de destino (padrão: document.body).' },
            { name: 'reuseTargetNode', type: 'boolean', default: 'true', description: 'Reutiliza um único nó para todos os portals.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Prefira os componentes de overlay prontos. Ao usar Portal diretamente, cuide do foco (veja FocusTrap) e do fechamento com Esc.
        </P>
      </Section>
    </DocPage>
  );
}
