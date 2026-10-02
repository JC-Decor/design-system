import { RingProgress } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function RingProgressPage() {
  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="RingProgress"
      source="mantine"
      mantineName="ring-progress"
      description="Anel de progresso para metas de vendas e indicadores em painéis — uma ou várias seções, com rótulo no centro."
      importCode={`import { RingProgress } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={RingProgress}
          name="RingProgress"
          baseProps={{ sections: [{ value: 68, color: 'horizon' }] }}
          codeProps={{ sections: "[{ value: 68, color: 'horizon' }]" }}
          controls={[
            { prop: 'size', type: 'number', initialValue: 120, min: 40, max: 240, step: 10 },
            { prop: 'thickness', type: 'number', initialValue: 12, min: 2, max: 30 },
            { prop: 'roundCaps', type: 'boolean', initialValue: true },
          ]}
        />
      </Section>

      <Section title="Meta de vendas">
        <P>
          Coloque o percentual em <code>label</code> e o valor absoluto ao lado. <code>roundCaps</code> arredonda as pontas do anel.
        </P>
        <Demo id="ring-progress/sales-goal" />
      </Section>

      <Section title="Várias seções">
        <P>
          Cada item de <code>sections</code> pode ter <code>tooltip</code>. A soma dos valores não deve passar de 100.
        </P>
        <Demo id="ring-progress/sections" />
      </Section>

      <Section title="Indicadores compactos">
        <Demo id="ring-progress/kpis" />
      </Section>

      <Section title="No tema JC">
        <P>
          A trilha vazia usa <code>--ds-border-soft</code> no lugar dos cinzas do Mantine, o mesmo tom dos divisores, nos dois temas. As cores das seções
          seguem a paleta: Horizon para metas, Evergreen para resultados positivos, Danger para indicadores negativos.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'sections', type: '{ value, color, tooltip? }[]', required: true, description: 'Seções do anel (soma até 100).' },
            { name: 'label', type: 'ReactNode', description: 'Conteúdo no centro do anel.' },
            { name: 'size', type: 'number', default: '120', description: 'Largura e altura em px.' },
            { name: 'thickness', type: 'number', default: 'size / 10', description: 'Espessura do anel em px.' },
            { name: 'roundCaps', type: 'boolean', default: 'false', description: 'Pontas arredondadas.' },
            { name: 'rootColor', type: 'MantineColor', default: '--ds-border-soft', description: 'Cor da trilha vazia.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use no máximo quatro seções; para mais categorias, prefira um gráfico de rosca (<code>DonutChart</code>). Mostre sempre o número em
          texto — o anel é apoio visual.
        </P>
      </Section>
    </DocPage>
  );
}
