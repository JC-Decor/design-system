import { Button, Tooltip, type TooltipProps } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

function TooltipPreview(props: Omit<TooltipProps, 'children'>) {
  return (
    <Tooltip {...props} opened>
      <Button variant="outline">Banco de horas</Button>
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
      description="Rótulo curto que aparece no hover (e no foco, com events). No Connect: fundo ink, texto branco 12px, raio 8, sem seta e atraso de 300ms."
      importCode={`import { Tooltip } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={TooltipPreview}
          name="Tooltip"
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Saldo atualizado às 08:00' },
            { prop: 'position', type: 'select', initialValue: 'top', data: ['top', 'top-start', 'top-end', 'right', 'bottom', 'bottom-start', 'bottom-end', 'left'] },
            { prop: 'withArrow', type: 'boolean', initialValue: false },
            { prop: 'multiline', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Rótulos de ícones">
        <P>
          O uso principal: nomear botões só com ícone (sino, exportar, ajuda) e explicar um valor resumido, como o saldo do banco de horas. O <code>aria-label</code> continua obrigatório — o tooltip é complemento visual.
        </P>
        <Demo id="tooltip/icon-labels" />
      </Section>

      <Section title="Grupo de tooltips">
        <P>
          <code>Tooltip.Group</code> compartilha os atrasos: depois do primeiro, os vizinhos abrem na hora — ideal para a barra de ferramentas acima da tabela.
        </P>
        <Demo id="tooltip/group" />
      </Section>

      <Section title="Tooltip que segue o cursor">
        <P>
          <code>Tooltip.Floating</code> acompanha o mouse; use em áreas grandes como gráficos, para mostrar o valor sob o cursor.
        </P>
        <Demo id="tooltip/floating" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'withArrow', type: 'defaultProps', default: 'false', description: 'Sem seta, como o .tooltip-content do Connect.' },
            { name: 'radius', type: 'defaultProps', default: '8', description: 'Raio fixo de 8px.' },
            { name: 'openDelay', type: 'defaultProps', default: '300', description: 'Abre após 300ms para não piscar ao cruzar a tela com o mouse.' },
            { name: 'tooltip', type: 'classNames', description: 'Fundo ink (--cn-tooltip-bg: #1A1B2E no claro, #0F172A no escuro), texto branco 12px/500, padding 6×10, largura máx. 220px e sombra suave. A prop color continua sobrescrevendo.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', required: true, description: 'Conteúdo do tooltip.' },
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
