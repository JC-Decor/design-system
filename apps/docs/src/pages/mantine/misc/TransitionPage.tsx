import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function TransitionPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Transition"
      source="mantine"
      mantineName="transition"
      description="Anima a entrada e a saída de um elemento com transições predefinidas ou customizadas. Use para feedbacks que aparecem e somem, como confirmação de cupom."
      importCode={`import { Transition } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          <code>mounted</code> controla a presença no DOM;{' '}
          <OnlyFor framework="react"><code>children</code> é uma função que recebe os estilos da animação e deve aplicá-los no elemento.</OnlyFor>
          <OnlyFor framework="vue">o slot padrão recebe os estilos da animação (<code>{'<template #default="styles">'}</code>) e deve aplicá-los no elemento com <code>:style</code>.</OnlyFor>
        </P>
        <Demo id="transition/basic" />
      </Section>

      <Section title="Transições predefinidas">
        <P>
          As mesmas transições são aceitas pela prop <code>transitionProps</code> de Modal, Popover, Menu, Tooltip e outros.
        </P>
        <Demo id="transition/all" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem customizações. Recomendamos durações de 150–250ms para micro-interações e até 300ms para painéis. Evite transições longas ou
          com muito movimento (<code>rotate</code>, <code>skew</code>) em fluxos de compra.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'mounted', type: 'boolean', description: 'Estado de exibição.', required: true },
            { name: 'transition', type: 'MantineTransition', default: "'fade'", description: 'Nome da transição ou objeto { in, out, transitionProperty }.' },
            { name: 'duration / exitDuration', type: 'number', default: '250', description: 'Duração de entrada e saída em ms.' },
            { name: 'timingFunction', type: 'string', default: "'ease'", description: 'Easing CSS.' },
            { name: 'enterDelay / exitDelay', type: 'number', description: 'Atraso antes de entrar/sair.' },
            { name: 'keepMounted', type: 'boolean', default: 'false', description: 'Mantém no DOM quando oculto.' },
            { name: 'onEnter / onExited…', vueName: '@enter / @entered / @exit / @exited', type: '() => void', description: 'Callbacks do ciclo da animação.', vueDescription: 'Eventos do ciclo da animação.' },
            { name: '#default', type: '(styles: CSSProperties) => VNodeChild', only: 'vue', description: 'Slot com escopo: recebe os estilos da animação.', required: true },
          ]}
        />
      </Section>
    </DocPage>
  );
}
