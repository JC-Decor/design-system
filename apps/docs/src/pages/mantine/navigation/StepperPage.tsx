import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function StepperPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Stepper"
      source="mantine"
      mantineName="stepper"
      description="Divide um fluxo longo em etapas numeradas — checkout, cadastro de produto e acompanhamento de pedidos."
      importCode={`import { Stepper } from '@jcdecor/ui';`}
    >
      <Section title="Checkout">
        <P>
          O Stepper é controlado por <code>active</code> (índice da etapa atual). <code>Stepper.Completed</code> aparece quando{' '}
          <code>active</code> passa da última etapa. Com <code>onStepClick</code> o cliente volta para etapas anteriores;{' '}
          <code>allowNextStepsSelect={'{false}'}</code> impede pular etapas.
        </P>
        <Demo id="stepper/checkout" />
      </Section>

      <Section title="Rastreamento do pedido">
        <P>
          Na orientação vertical, cada etapa pode trazer data e local na <code>description</code>. A prop <code>loading</code> indica a etapa em
          andamento.
        </P>
        <Demo id="stepper/order-tracking" />
      </Section>

      <Section title="Cores, rótulo abaixo e erro">
        <P>
          <code>labelPosition="bottom"</code> deixa o Stepper mais compacto em larguras médias. Passe <code>color</code> no Stepper ou em uma etapa
          — por exemplo, <code>danger</code> para sinalizar um problema na etapa atual.
        </P>
        <Demo id="stepper/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Etapas concluídas usam o preenchimento da cor (Horizon 600 no claro, Horizon 400 no escuro) e o ícone de check segue o{' '}
          contraste — branco no claro e escuro sobre o tom 400 do tema escuro (o padrão do Mantine deixava o check branco sobre azul claro).
          Conectores e etapas pendentes usam <code>--ds-border-soft</code>, o número pendente fica em <code>--ds-text-2</code>, o rótulo em peso
          600 e a descrição em <code>--ds-text-3</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'active', type: 'number', required: true, description: 'Índice da etapa atual (começa em 0).' },
            { name: 'onStepClick', type: '(index: number) => void', description: 'Torna as etapas clicáveis.' },
            { name: 'allowNextStepsSelect', type: 'boolean', default: 'true', description: 'Permite clicar em etapas futuras.' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direção das etapas.' },
            { name: 'labelPosition', type: "'right' | 'bottom'", default: "'right'", description: 'Posição do rótulo em relação ao ícone.' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'Tamanho do ícone e do texto.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor das etapas concluídas e da atual.' },
            { name: 'Stepper.Step loading', type: 'boolean', description: 'Mostra um loader no ícone da etapa.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use de 3 a 5 etapas com rótulos curtos (substantivos). Valide cada etapa antes de avançar e nunca descarte os dados digitados quando o
          cliente voltar. No mobile, considere <code>orientation="vertical"</code> ou mostrar só “Etapa 2 de 4”.
        </P>
      </Section>
    </DocPage>
  );
}
