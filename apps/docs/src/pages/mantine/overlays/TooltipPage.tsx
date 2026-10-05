import { Button, Tooltip, type TooltipProps } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import TooltipPreviewVue from '../../../vue-demos/tooltip/TooltipPreview.vue';

function TooltipPreview(props: Omit<TooltipProps, 'children'>) {
  return (
    <Tooltip {...props} opened>
      <Button variant="outline">Formas de pagamento</Button>
    </Tooltip>
  );
}

export default function TooltipPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Tooltip"
      source="mantine"
      mantineName="tooltip"
      description="Rótulo curto que aparece no hover (e no foco, com events). Obsidian com texto branco e seta por padrão; inverte no tema escuro."
      importCode={`import { Tooltip } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={TooltipPreview}
          vue={{ component: TooltipPreviewVue }}
          name="Tooltip"
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Parcele em até 10x sem juros' },
            { prop: 'position', type: 'select', initialValue: 'top', data: ['top', 'top-start', 'top-end', 'right', 'bottom', 'bottom-start', 'bottom-end', 'left'] },
            { prop: 'withArrow', type: 'boolean', initialValue: true },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
          ]}
        />
      </Section>

      <Section title="Rótulos de ícones">
        <P>
          O uso principal: nomear botões só com ícone. O <code>aria-label</code> continua obrigatório — o tooltip é complemento visual.
        </P>
        <Demo id="tooltip/icon-labels" />
      </Section>

      <Section title="Grupo de tooltips">
        <P>
          <code>Tooltip.Group</code> compartilha os atrasos: depois do primeiro, os vizinhos abrem na hora — ideal para barras de ferramentas.
        </P>
        <Demo id="tooltip/group" />
      </Section>

      <Section title="Tooltip que segue o cursor">
        <P>
          <code>Tooltip.Floating</code> acompanha o mouse; use em áreas grandes como imagens ampliáveis.
        </P>
        <Demo id="tooltip/floating" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'withArrow', type: 'defaultProps', default: 'true', description: 'Seta sempre visível.' },
            { name: 'radius', type: 'defaultProps', default: 'sm', description: 'Raio de controle (8px).' },
            {
              name: 'tooltip',
              type: 'classNames',
              description: 'Obsidian/branco no claro, Obsidian 50/Obsidian no escuro, caption (12px, 500). A prop color continua sobrescrevendo.',
            },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', vueType: 'string | slot #label', required: true, description: 'Conteúdo do tooltip.' },
            { name: 'position', type: 'FloatingPosition', default: 'top', description: 'Posição em relação ao alvo.' },
            { name: 'openDelay / closeDelay', type: 'number', default: '0', description: 'Atrasos em ms.' },
            { name: 'multiline', type: 'boolean', default: 'false', description: 'Quebra linhas; combine com w.' },
            { name: 'events', type: '{ hover, focus, touch }', default: '{ hover: true, focus: false, touch: false }', description: 'Eventos que abrem o tooltip.' },
            { name: 'color', type: 'MantineColor', description: 'Cor de fundo alternativa.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Tooltips são para rótulos curtos — nunca coloque informação essencial ou ações dentro deles (não existem no toque); use Popover se houver
          conteúdo interativo. Para usuários de teclado, ative <code>{'events={{ hover: true, focus: true, touch: false }}'}</code>. O filho precisa aceitar ref (componentes do Mantine aceitam). Não use em elementos <code>disabled</code> sem um wrapper.
        </P>
      </Section>
    </DocPage>
  );
}
