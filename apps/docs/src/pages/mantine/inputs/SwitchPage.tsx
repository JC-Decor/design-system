import { Switch } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function SwitchPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Switch"
      source="mantine"
      mantineName="switch"
      description="Interruptor liga/desliga para configurações com efeito imediato, como notificações ou visibilidade de um produto na vitrine."
      importCode={`import { Switch } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Switch}
          name="Switch"
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Notificar quando o pedido for enviado' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'labelPosition', type: 'segmented', data: ['right', 'left'], initialValue: 'right' },
            { prop: 'defaultChecked', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Lista de configurações">
        <Demo id="switch/list" />
      </Section>

      <Section title="Controlado">
        <P>O Switch deve refletir o estado real na hora — sem botão “Salvar”.</P>
        <Demo id="switch/controlled" />
      </Section>

      <Section title="Labels internos e ícones">
        <P>
          <code>onLabel</code>/<code>offLabel</code> escrevem dentro do trilho; <code>thumbIcon</code> coloca um ícone no thumb.
        </P>
        <Demo id="switch/labels" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="switch/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          Raio padrão <code>xl</code> (pílula) e cor Horizon quando ligado (horizon.4 no tema escuro). No tema escuro o trilho desligado usa <code>--ds-border</code> — o padrão do Mantine praticamente some sobre <code>--ds-surface</code>. O foco por teclado é o contorno de 2px{' '}
          <code>--ds-primary</code>, como nos demais controles.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'checked / defaultChecked', type: 'boolean', description: 'Estado controlado / inicial.' },
            { name: 'onChange', type: '(event) => void', description: 'Use event.currentTarget.checked.' },
            { name: 'label / description', type: 'ReactNode', description: 'Textos ao lado do interruptor.' },
            { name: 'onLabel / offLabel', type: 'ReactNode', description: 'Texto dentro do trilho.' },
            { name: 'thumbIcon', type: 'ReactNode', description: 'Ícone dentro do thumb.' },
            { name: 'labelPosition', type: "'left' | 'right'", default: 'right', description: 'Lado do label.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Switch apenas para efeito imediato; em formulários que precisam de “Salvar”, prefira Checkbox. O label descreve o que fica ligado (“Receber
          novidades”), sem “ativar/desativar”.
        </P>
      </Section>
    </DocPage>
  );
}
