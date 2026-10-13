import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function PopoverPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Popover"
      source="mantine"
      mantineName="popover"
      description="Painel flutuante ancorado a um elemento, para conteúdo interativo curto: filtros rápidos, editar um valor na própria linha, detalhes de um indicador."
      importCode={`import { Popover } from '@jcdecor/connect-ui';`}
    >
      <Section title="Filtros rápidos">
        <P>
          O botão "Filtros" acima de uma lista abre um popover com poucos campos. Com <code>trapFocus</code>, o Tab circula dentro do popover — use sempre que houver campos. <kbd>Esc</kbd> e o clique fora fecham.
        </P>
        <Demo id="popover/filters" />
      </Section>

      <Section title="Formulário de edição">
        <P>
          Popover controlado (<code>opened</code> + <code>onChange</code>) para editar uma meta sem sair da página. Selects internos usam{' '}
          <code>{'comboboxProps={{ withinPortal: false }}'}</code> para que o clique na lista não conte como “clique fora”.
        </P>
        <Demo id="popover/edit-goal" />
      </Section>

      <Section title="Posições">
        <P>
          12 posições (<code>top</code>, <code>bottom-start</code>, <code>right-end</code>…). Se faltar espaço, o popover vira para o lado oposto
          automaticamente.
        </P>
        <Demo id="popover/positions" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'shadow / radius', type: 'defaultProps', default: 'md · sm', description: '--ds-shadow-md (shadow-2) e raio 10px.' },
            { name: 'dropdown', type: 'classNames', description: 'Fundo --ds-surface; borda e seta em --ds-border-soft (via --popover-border-color). Compartilhado com Menu e HoverCard.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'position', type: 'FloatingPosition', default: 'bottom', description: 'Posição do dropdown.' },
            { name: 'width', type: "number | 'target'", description: 'Largura do dropdown.' },
            { name: 'withArrow', type: 'boolean', default: 'false', description: 'Mostra a seta.' },
            { name: 'trapFocus', type: 'boolean', default: 'false', description: 'Prende o foco no dropdown.' },
            { name: 'opened / onChange', type: 'boolean / (opened) => void', description: 'Modo controlado.' },
            { name: 'closeOnClickOutside', type: 'boolean', default: 'true', description: 'Fecha ao clicar fora.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Popover é para conteúdo curto — se tiver mais de 3 campos ou precisar de rolagem, use Modal ou Drawer. Não abra um popover dentro de outro.
          Para rótulos sem interação, use Tooltip. O tema do Connect não usa seta nos flutuantes; só ative <code>withArrow</code> quando a âncora for ambígua.
        </P>
      </Section>
    </DocPage>
  );
}
