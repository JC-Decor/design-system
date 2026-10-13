import { NumberFormatter } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function NumberFormatterPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="NumberFormatter"
      source="mantine"
      mantineName="number-formatter"
      description="Formata números como texto: valores em reais, horas, porcentagens e contagens no padrão brasileiro (1.234,56)."
      importCode={`import { NumberFormatter } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={NumberFormatter}
          name="NumberFormatter"
          controls={[
            { prop: 'value', type: 'number', initialValue: 4186.67, step: 10 },
            { prop: 'prefix', type: 'string', initialValue: 'R$ ' },
            { prop: 'suffix', type: 'string', initialValue: '' },
            { prop: 'thousandSeparator', type: 'string', initialValue: '.' },
            { prop: 'decimalSeparator', type: 'string', initialValue: ',' },
            { prop: 'decimalScale', type: 'number', initialValue: 2, min: 0, max: 4 },
            { prop: 'fixedDecimalScale', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Valores em reais">
        <P>
          Para BRL (salário, demonstrativo de férias, reembolsos) use <code>prefix="R$ "</code> (com espaço),{' '}
          <code>decimalScale={'{2}'}</code> e <code>fixedDecimalScale</code> para sempre mostrar os centavos. Os separadores brasileiros já vêm
          do tema.
        </P>
        <Demo id="number-formatter/brl" />
      </Section>

      <Section title="Horas, porcentagens e contagens">
        <P>
          No tema Connect os separadores brasileiros já são o padrão — basta passar <code>value</code>, <code>prefix</code>/<code>suffix</code> e as
          casas decimais.
        </P>
        <Demo id="number-formatter/units" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'thousandSeparator', type: 'defaultProps', default: "'.'", description: 'Milhar com ponto (pt-BR).' },
            { name: 'decimalSeparator', type: 'defaultProps', default: "','", description: 'Decimal com vírgula (pt-BR).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'number | string', description: 'Valor a formatar.' },
            { name: 'prefix / suffix', type: 'string', description: 'Texto antes/depois do número (R$ , %, h).' },
            { name: 'decimalScale', type: 'number', description: 'Número máximo de casas decimais.' },
            { name: 'fixedDecimalScale', type: 'boolean', default: 'false', description: 'Completa com zeros até decimalScale.' },
            { name: 'allowNegative', type: 'boolean', default: 'true', description: 'Permite valores negativos.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use <code>NumberFormatter</code> para valores exibidos e <code>NumberInput</code> para campos editáveis. Salários e valores pessoais só aparecem para quem tem permissão — nunca em listas abertas. Em tabelas, alinhe valores à
          direita com números tabulares. Fora do JSX, use os helpers <code>formatCurrency</code>, <code>formatNumber</code> e <code>formatPercent</code> de{' '}
          <code>@jcdecor/connect-ui</code>.
        </P>
      </Section>
    </DocPage>
  );
}
