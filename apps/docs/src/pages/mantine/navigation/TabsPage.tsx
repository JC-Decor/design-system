import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function TabsPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Tabs"
      source="mantine"
      mantineName="tabs"
      description="Alterna entre conteúdos relacionados na mesma página — detalhes do produto, filtros de pedidos e seções da conta."
      importCode={`import { Tabs } from '@jcdecor/ui';`}
    >
      <Section title="Uso">
        <P>
          <OnlyFor framework="react">
            Cada <code>Tabs.Tab</code> se liga a um <code>Tabs.Panel</code> pelo mesmo <code>value</code>. Ícones entram em{' '}
            <code>leftSection</code>.
          </OnlyFor>
          <OnlyFor framework="vue">
            Cada <code>TabsTab</code> se liga a um <code>TabsPanel</code> pelo mesmo <code>value</code>. Ícones entram no slot{' '}
            <code>#leftSection</code>.
          </OnlyFor>
        </P>
        <Demo id="tabs/product" />
      </Section>

      <Section title="Variantes">
        <P>
          <code>default</code> sublinha a aba ativa, <code>outline</code> desenha uma “ficha” com borda e <code>pills</code> preenche a aba ativa
          — bom para filtros.
        </P>
        <Demo id="tabs/variants" />
      </Section>

      <Section title="Vertical">
        <P>
          Com <code>orientation="vertical"</code>, a lista fica à esquerda — útil para configurações da conta. Use <code>placement="right"</code>{' '}
          para inverter.
        </P>
        <Demo id="tabs/vertical" />
      </Section>

      <Section title="Filtros com contagem">
        <Demo id="tabs/order-filters" />
      </Section>

      <Section title="No tema JC">
        <P>
          Abas em peso 500 e <code>--ds-text-2</code>; a ativa fica em <code>--ds-primary</code> com sublinhado Horizon. A linha base da lista usa{' '}
          <code>--ds-border-soft</code> e o hover <code>--ds-surface-2</code>, nos dois temas. Na variante <code>pills</code>, a aba ativa usa o
          preenchimento Horizon com texto branco no claro e escuro no tema escuro (sobre Horizon 400).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / defaultValue', type: 'string | null', description: 'Aba ativa (controlada / não controlada).', vueName: 'v-model / default-value' },
            { name: 'onChange', type: '(value: string | null) => void', description: 'Chamado ao trocar de aba.', vueName: '@change', vueType: '(value: string | null)', vueDescription: 'Emitido ao trocar de aba.' },
            { name: 'variant', type: "'default' | 'outline' | 'pills'", default: "'default'", description: 'Estilo das abas.' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direção da lista.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor da aba ativa.' },
            { name: 'keepMounted', type: 'boolean', default: 'true', description: 'Mantém os painéis inativos no DOM.' },
            { name: 'Tabs.List grow', vueName: 'TabsList grow', type: 'boolean', description: 'Abas ocupam toda a largura.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Tabs alternam conteúdo da mesma página; para navegar entre páginas use <code>NavLink</code> ou links. Use rótulos curtos e evite mais
          de 6 abas — acima disso, prefira um <code>Select</code> ou <code>SegmentedControl</code>.
        </P>
      </Section>
    </DocPage>
  );
}
