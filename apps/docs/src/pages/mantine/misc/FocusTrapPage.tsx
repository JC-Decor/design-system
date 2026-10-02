import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function FocusTrapPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="FocusTrap"
      source="mantine"
      mantineName="focus-trap"
      description="Mantém o foco do teclado dentro de um elemento enquanto ativo. Use em painéis e popups customizados — Modal, Drawer e Popover já o incluem."
      importCode={`import { FocusTrap } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          Com <code>active</code>, o primeiro elemento focável recebe foco e Tab/Shift+Tab circulam apenas pelos elementos internos. Ative e teste
          com a tecla Tab.
        </P>
        <Demo id="focus-trap/basic" />
      </Section>

      <Section title="Foco inicial">
        <P>
          <code>FocusTrap.InitialFocus</code> marca onde o foco começa — o próximo elemento focável recebe o foco ao ativar.
        </P>
        <Demo id="focus-trap/initial-focus" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem customizações. O anel de foco visível dos elementos internos segue o tema (<code>focusRing: 'auto'</code>, só no teclado).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'active', type: 'boolean', default: 'true', description: 'Liga/desliga a captura de foco.' },
            { name: 'children', type: 'ReactElement', description: 'Um único elemento que aceita ref.', required: true },
            { name: 'refProp', type: 'string', default: "'ref'", description: 'Nome da prop de ref do filho.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre ofereça uma saída (botão fechar, Esc) quando prender o foco, e devolva o foco ao gatilho ao desativar.
        </P>
      </Section>
    </DocPage>
  );
}
