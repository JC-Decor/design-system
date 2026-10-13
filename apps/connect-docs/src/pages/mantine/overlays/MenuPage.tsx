import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function MenuPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Menu"
      source="mantine"
      mantineName="menu"
      description="Lista de ações em um dropdown. Navegável por teclado, com seções, divisores, atalhos e itens de perigo."
      importCode={`import { Menu } from '@jcdecor/connect-ui';`}
    >
      <Section title="Ações da linha">
        <P>
          O menu "⋯" no fim de cada linha da tabela de colaboradores. Agrupe ações com <code>Menu.Label</code> e <code>Menu.Divider</code>, mostre atalhos com <code>Kbd</code> no <code>rightSection</code> e deixe
          a ação destrutiva por último com <code>color="coral"</code>.
        </P>
        <Demo id="menu/row-actions" />
      </Section>

      <Section title="Caixas e opções">
        <P>
          <code>Menu.CheckboxItem</code> e <code>Menu.RadioItem</code> (novos no Mantine 9) não fecham o menu ao clicar — bons para colunas visíveis e
          densidade da tabela de colaboradores.
        </P>
        <Demo id="menu/view-options" />
      </Section>

      <Section title="Submenu">
        <P>
          <code>Menu.Sub</code> abre à direita no hover ou com <kbd>→</kbd>. Use só um nível de profundidade.
        </P>
        <Demo id="menu/submenu" />
      </Section>

      <Section title="Menu de contexto">
        <P>
          <code>Menu.ContextMenu</code> abre o dropdown na posição do cursor com o botão direito (ou toque longo no mobile).
        </P>
        <Demo id="menu/context-menu" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'shadow / radius', type: 'defaultProps', default: 'lg · sm', description: '--ds-shadow-lg (shadow-3) e raio 10px.' },
            { name: 'dropdown', type: 'classNames', description: 'Fundo --ds-surface, borda --ds-border-soft (no escuro, um degrau mais forte para separar das superfícies).' },
            { name: 'item', type: 'classNames', description: '12.5px em --ds-text-2, raio 8px; hover em --ds-surface-2 com texto --ds-text. No escuro, itens coral usam o tom 300 para manter contraste AA.' },
            { name: 'label', type: 'classNames', description: 'Rótulo de seção em caption (11.5px, 600) e --ds-text-3.' },
            { name: 'divider', type: 'classNames', description: 'Divisor em --ds-border-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'position', type: 'FloatingPosition', default: 'bottom', description: 'Posição do dropdown em relação ao alvo.' },
            { name: 'width', type: "number | 'target'", description: 'Largura do dropdown.' },
            { name: 'trigger', type: "'click' | 'hover' | 'click-hover'", default: 'click', description: 'Evento que abre o menu.' },
            { name: 'closeOnItemClick', type: 'boolean', default: 'true', description: 'Fecha ao clicar em um item.' },
            { name: 'loop', type: 'boolean', default: 'true', description: 'Setas voltam do último para o primeiro item.' },
            { name: 'Menu.Item color', type: 'MantineColor', description: 'Use coral para ações destrutivas.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Menus são para ações, não para navegação principal (use NavLink/Tabs). Mantenha até ~8 itens, com verbos no infinitivo. Ações destrutivas
          ficam no fim, separadas por divisor e, se irreversíveis, pedem confirmação em Modal. O foco volta para o botão ao fechar com <kbd>Esc</kbd>.
        </P>
      </Section>
    </DocPage>
  );
}
