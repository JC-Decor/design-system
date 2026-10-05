import { Progress } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function ProgressPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="Progress"
      source="mantine"
      mantineName="progress"
      description="Barra de progresso para metas, importações e incentivos de compra, como o frete grátis."
      importCode={`import { Progress } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Progress}
          name="Progress"
          previewWidth={400}
          controls={[
            { prop: 'value', type: 'number', initialValue: 64, min: 0, max: 100 },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
            { prop: 'striped', type: 'boolean', initialValue: false },
            { prop: 'animated', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Frete grátis">
        <P>
          Mostre quanto falta para o benefício no carrinho e no mini-carrinho. Calcule o <code>value</code> em porcentagem e informe o valor em
          reais no texto — a barra sozinha não comunica o número.
        </P>
        <Demo id="progress/free-shipping" />
      </Section>

      <Section title="Seções">
        <P>
          Com <code>{vue ? 'ProgressRoot' : 'Progress.Root'}</code> e vários <code>{vue ? 'ProgressSection' : 'Progress.Section'}</code> a barra mostra partes de um todo. Use rótulos curtos em{' '}
          <code>{vue ? 'ProgressLabel' : 'Progress.Label'}</code> e uma legenda abaixo.
        </P>
        <Demo id="progress/sections" />
      </Section>

      <Section title="Metas, listras e tamanhos">
        <P>
          <code>striped</code> e <code>animated</code> indicam um processo em andamento. Use <code>size</code> para alturas de 4px (<code>xs</code>)
          a 16px (<code>xl</code>).
        </P>
        <Demo id="progress/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Raio <code>xl</code> (pílula) por padrão. A trilha usa <code>--ds-surface-2</code> com uma borda interna sutil (
          <code>--ds-border-soft</code>), visível tanto sobre cards brancos quanto no tema escuro. Rótulos das seções em peso 600; no tema escuro,
          sobre os tons 400, o rótulo fica escuro para manter o contraste.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'number', required: true, description: 'Progresso de 0 a 100.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor da barra.' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Altura da barra.' },
            { name: 'radius', type: 'MantineRadius', default: "'xl'", description: 'Raio da trilha e da barra.' },
            { name: 'striped / animated', type: 'boolean', default: 'false', description: 'Listras e animação das listras.' },
            { name: 'transitionDuration', type: 'number', default: '100', description: 'Duração da transição de valor em ms.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre acompanhe a barra de um texto com o número e informe <code>aria-label</code>. Para metas de vendas em destaque num painel, veja
          também <code>RingProgress</code> e <code>SemiCircleProgress</code>.
        </P>
      </Section>
    </DocPage>
  );
}
