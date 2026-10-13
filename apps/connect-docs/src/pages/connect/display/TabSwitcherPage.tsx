import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function TabSwitcherPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="TabSwitcher"
      source="connect"
      sourcePath="packages/connect-ui/src/components/TabSwitcher"
      description="Abas em chips do Connect: um tablist acessível com navegação por setas, Home/End, contadores, ícones e abas desabilitadas."
      importCode={`import { TabSwitcher } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>Cada aba é um FilterChip com <code>role="tab"</code>; só a ativa entra no Tab (roving tabindex). As setas pulam abas desabilitadas e já ativam a próxima.</P>
        <Demo id="cn-tab-switcher/usage" />
      </Section>
      <Section title="Tamanhos">
        <Demo id="cn-tab-switcher/sizes" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'tabs', type: 'TabSwitcherItem[]', required: true, description: '{ key, label, count?, icon?, disabled?, tone? }' },
            { name: 'activeKey', type: 'string', required: true, description: 'Aba ativa.' },
            { name: 'onChange', type: '(key: string) => void', required: true, description: 'Troca de aba.' },
            { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Altura dos chips.' },
            { name: 'aria-label', type: 'string', default: "'Filtros'", description: 'Rótulo do tablist.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props do connect-jc; o tipo <code>TabItem</code> virou <code>TabSwitcherItem</code>. Tom padrão da aba ativa continua <code>lavender</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
