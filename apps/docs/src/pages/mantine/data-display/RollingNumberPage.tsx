import { RollingNumber } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function RollingNumberPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="RollingNumber"
      source="mantine"
      mantineName="rolling-number"
      description="Número com animação de rolagem dos dígitos a cada mudança — para KPIs ao vivo, contadores e quantidades. Novo no Mantine 9."
      importCode={`import { RollingNumber } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={RollingNumber}
          name="RollingNumber"
          baseProps={{ fz: 'var(--type-headline-md)', fw: 700 }}
          // Mantine Vue 3.5: `thousandSeparator` (string | boolean) vira `false` quando omitido e ignora o tema — passe explícito
          vue={{ baseProps: { fz: 'var(--type-headline-md)', fw: 700, thousandSeparator: '.' }, codeProps: { 'thousand-separator': '.' } }}
          controls={[
            { prop: 'value', type: 'number', initialValue: 12480.5, step: 1000 },
            { prop: 'prefix', type: 'string', initialValue: 'R$ ' },
            { prop: 'decimalScale', type: 'number', initialValue: 2, min: 0, max: 4 },
            { prop: 'fixedDecimalScale', type: 'boolean', initialValue: false },
            { prop: 'animationDuration', type: 'number', initialValue: 600, min: 0, max: 3000, step: 100 },
          ]}
        />
      </Section>

      <Section title="KPI animado">
        <P>
          Os dígitos rolam do valor anterior para o novo. Números tabulares (padrão) evitam que o layout “pule” durante a animação.
        </P>
        <Demo id="rolling-number/kpi" />
      </Section>

      <Section title="Quantidade no carrinho">
        <P>
          Em controles que o usuário altera, use <code>withLiveRegion</code> para que leitores de tela anunciem o novo valor.
        </P>
        <Demo id="rolling-number/counter" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'thousandSeparator', type: 'defaultProps', default: "'.'", description: 'Milhar com ponto (pt-BR).', vueDescription: 'Milhar com ponto (pt-BR). No Mantine Vue 3.5 o padrão do tema não é aplicado: passe thousand-separator="." explicitamente.' },
            { name: 'decimalSeparator', type: 'defaultProps', default: "','", description: 'Decimal com vírgula (pt-BR).' },
          ]}
        />
        <P>A animação respeita a duração padrão (600ms, ease); a tipografia vem das style props (<code>fz</code>, <code>fw</code>).</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'number', required: true, description: 'Valor exibido.' },
            { name: 'prefix / suffix', type: 'string', description: 'Texto antes/depois do número.' },
            { name: 'decimalScale', type: 'number', description: 'Casas decimais.' },
            { name: 'fixedDecimalScale', type: 'boolean', default: 'false', description: 'Completa com zeros.' },
            { name: 'animationDuration', type: 'number', default: '600', description: 'Duração em ms.' },
            { name: 'tabularNumbers', type: 'boolean', default: 'true', description: 'Dígitos de mesma largura.' },
            { name: 'withLiveRegion', type: 'boolean', default: 'false', description: 'Anuncia mudanças (role="status").' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Reserve a animação para valores que mudam enquanto o usuário olha (painéis, contadores). Para preços estáticos, use{' '}
          <code>NumberFormatter</code>. Evite atualizações mais rápidas que a própria animação.
        </P>
      </Section>
    </DocPage>
  );
}
