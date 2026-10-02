import { SegmentedControl } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function SegmentedControlPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="SegmentedControl"
      source="mantine"
      mantineName="segmented-control"
      description="Grupo de opções exclusivas em formato de abas compactas. Use para alternar visualizações (grade/lista), períodos de relatório ou entrega/retirada."
      importCode={`import { SegmentedControl } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={SegmentedControl}
          name="SegmentedControl"
          baseProps={{ data: ['Grade', 'Lista', 'Mapa'] }}
          codeProps={{ data: "['Grade', 'Lista', 'Mapa']" }}
          controls={[
            { prop: 'color', type: 'color', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'orientation', type: 'segmented', data: ['horizontal', 'vertical'], initialValue: 'horizontal' },
            { prop: 'fullWidth', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Uso básico">
        <Demo id="segmented-control/basic" />
      </Section>

      <Section title="Com ícones (controlado)">
        <Demo id="segmented-control/icons" />
      </Section>

      <Section title="Largura total, cor e itens desabilitados">
        <P>
          Sem <code>color</code> o indicador é a superfície branca com sombra; com <code>color</code> ele é preenchido.
        </P>
        <Demo id="segmented-control/variations" />
      </Section>

      <Section title="Vertical">
        <Demo id="segmented-control/vertical" />
      </Section>

      <Section title="No tema JC">
        <P>
          Fundo <code>--ds-surface-2</code>, indicador com <code>--ds-shadow-sm</code>, labels em peso 500 e raio <code>sm</code> (8px) — o mesmo
          usado na barra “Prévia / Código” desta documentação.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'string[] | { value, label, disabled? }[]', required: true, description: 'Opções.' },
            { name: 'value / onChange', type: 'string', description: 'Uso controlado.' },
            { name: 'color', type: 'MantineColor', description: 'Preenche o indicador.' },
            { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Ocupa toda a largura.' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: 'horizontal', description: 'Direção.' },
            { name: 'size', type: 'MantineSize', default: 'sm', description: 'Altura e fonte.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use de 2 a 5 opções curtas. Para navegar entre conteúdos diferentes, use Tabs; para escolhas de formulário com descrição, Radio. Com ícone
          sem texto, inclua <code>aria-label</code> ou texto visualmente oculto.
        </P>
      </Section>
    </DocPage>
  );
}
