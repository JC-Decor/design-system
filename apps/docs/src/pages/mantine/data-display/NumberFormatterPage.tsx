import { NumberFormatter } from '@jcdecor/ui';
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
      description="Formata números como texto: preços em reais, porcentagens e unidades no padrão brasileiro (1.234,56)."
      importCode={`import { NumberFormatter } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={NumberFormatter}
          name="NumberFormatter"
          controls={[
            { prop: 'value', type: 'number', initialValue: 1249.9, step: 10 },
            { prop: 'prefix', type: 'string', initialValue: 'R$ ' },
            { prop: 'suffix', type: 'string', initialValue: '' },
            { prop: 'thousandSeparator', type: 'string', initialValue: '.' },
            { prop: 'decimalSeparator', type: 'string', initialValue: ',' },
            { prop: 'decimalScale', type: 'number', initialValue: 2, min: 0, max: 4 },
            { prop: 'fixedDecimalScale', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Preços em reais">
        <P>
          Para BRL use <code>prefix="R$ "</code> (com espaço), <code>thousandSeparator="."</code>, <code>decimalSeparator=","</code>,{' '}
          <code>decimalScale={'{2}'}</code> e <code>fixedDecimalScale</code> para sempre mostrar os centavos.
        </P>
        <Demo id="number-formatter/brl" />
      </Section>

      <Section title="Unidades e porcentagens">
        <P>
          No tema JC os separadores brasileiros já são o padrão — basta passar <code>value</code>, <code>prefix</code>/<code>suffix</code> e as
          casas decimais.
        </P>
        <Demo id="number-formatter/units" />
      </Section>

      <Section title="No tema JC">
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
            { name: 'prefix / suffix', type: 'string', description: 'Texto antes/depois do número (R$ , %, m²).' },
            { name: 'decimalScale', type: 'number', description: 'Número máximo de casas decimais.' },
            { name: 'fixedDecimalScale', type: 'boolean', default: 'false', description: 'Completa com zeros até decimalScale.' },
            { name: 'allowNegative', type: 'boolean', default: 'true', description: 'Permite valores negativos.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use <code>NumberFormatter</code> para valores exibidos e <code>NumberInput</code> para campos editáveis. Em tabelas, alinhe valores à
          direita com números tabulares. Fora do React, use os helpers <code>formatCurrency</code>/<code>formatNumber</code> de{' '}
          <code>@jcdecor/ui</code>.
        </P>
      </Section>
    </DocPage>
  );
}
