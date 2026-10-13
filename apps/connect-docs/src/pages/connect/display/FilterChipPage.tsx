import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { FilterChip } from '@jcdecor/connect-ui';

export default function FilterChipPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="FilterChip"
      source="connect"
      sourcePath="packages/connect-ui/src/components/FilterChip"
      description="Chip de filtro do Connect: botão em pílula com ícone e contador. Quando ativo assume o fundo e o texto do tom."
      importCode={`import { FilterChip } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={FilterChip}
          name="FilterChip"
          controls={[
            { prop: 'active', type: 'boolean', initialValue: true },
            { prop: 'tone', type: 'color', data: ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'], initialValue: 'ink' },
            { prop: 'icon', type: 'select', data: ['calendar', 'palm', 'clock', 'doc', 'users'], initialValue: 'calendar' },
            { prop: 'count', type: 'number', initialValue: 8, min: 0, step: 1 },
            { prop: 'children', type: 'string', initialValue: 'Férias' },
          ]}
        />
      </Section>
      <Section title="Estados">
        <P>Inativo em superfície com borda suave; hover em surface-2; ativo no tom (padrão <code>ink</code>); desabilitado a 50%. Expõe <code>aria-pressed</code>.</P>
        <Demo id="cn-filter-chip/states" />
      </Section>
      <Section title="Tons">
        <Demo id="cn-filter-chip/tones" />
      </Section>
      <Section title="Filtros múltiplos">
        <P>Para abas exclusivas use o <Link to="/componentes/tab-switcher">TabSwitcher</Link>, que monta um tablist com estes chips.</P>
        <Demo id="cn-filter-chip/filters" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'active', type: 'boolean', description: 'Selecionado (aria-pressed).' },
            { name: 'tone', type: 'ToneName', default: "'ink'", description: 'Cor quando ativo.' },
            { name: 'icon', type: 'string', description: 'Ícone do Connect (13px).' },
            { name: 'count', type: 'number', description: 'Contador à direita.' },
            { name: 'onClick', type: '() => void', description: 'Clique.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;Chip tone active icon count onClick&gt;</code> → <code>&lt;FilterChip&gt;</code> com as mesmas props (<code>Chip</code> é do Mantine).</li>
          <li>Atributos de botão (<code>role</code>, <code>aria-*</code>, <code>data-*</code>) continuam sendo repassados.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
