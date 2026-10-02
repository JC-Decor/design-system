import { Slider } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function SliderPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Slider"
      source="mantine"
      mantineName="slider"
      description="Escolha de um valor dentro de um intervalo arrastando o thumb. Use quando o valor exato importa menos que a posição relativa, como largura aproximada ou nível de bloqueio de luz."
      importCode={`import { Slider } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Slider}
          name="Slider"
          previewWidth={360}
          baseProps={{ thumbLabel: 'Valor' }}
          controls={[
            { prop: 'defaultValue', type: 'number', initialValue: 40, min: 0, max: 100, step: 1 },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
            { prop: 'labelAlwaysOn', type: 'boolean', initialValue: false },
            { prop: 'inverted', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Valor formatado">
        <P>
          <code>label</code> recebe uma função para formatar o balão do thumb; mostre o mesmo valor em texto fora do slider.
        </P>
        <Demo id="slider/basic" />
      </Section>

      <Section title="Marcas">
        <P>
          <code>marks</code> exibe referências; com <code>restrictToMarks</code> o thumb só para nelas.
        </P>
        <Demo id="slider/marks" />
      </Section>

      <Section title="Label, cor e desabilitado">
        <Demo id="slider/states" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="slider/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          Trilho vazio em <code>--ds-border-soft</code>, preenchimento na cor primária e thumb branco com borda primária e{' '}
          <code>--ds-shadow-sm</code> — igual nos dois temas, em vez do thumb invertido do Mantine no escuro. O foco por teclado usa o anel de 3px{' '}
          <code>--ds-primary-soft</code>, e o balão do valor usa o navy Obsidian com 12px/600.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / defaultValue / onChange', type: 'number', description: 'Valor do slider.' },
            { name: 'min / max / step', type: 'number', default: '0 / 100 / 1', description: 'Intervalo e passo.' },
            { name: 'marks', type: '{ value, label? }[]', description: 'Marcas sob o trilho.' },
            { name: 'label', type: 'ReactNode | (value) => ReactNode | null', description: 'Balão do valor; null oculta.' },
            { name: 'labelAlwaysOn', type: 'boolean', default: 'false', description: 'Mantém o balão visível.' },
            { name: 'thumbLabel', type: 'string', description: 'aria-label do thumb.' },
            { name: 'onChangeEnd', type: '(value) => void', description: 'Ao soltar (ideal para filtros).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Passe <code>thumbLabel</code> para dar nome ao controle (o slider aceita setas, Home/End). Quando o valor exato importa, ofereça também um
          NumberInput. Em filtros, aplique a busca em <code>onChangeEnd</code>, não a cada movimento.
        </P>
      </Section>
    </DocPage>
  );
}
