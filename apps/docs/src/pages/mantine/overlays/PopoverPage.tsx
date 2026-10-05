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
      description="Painel flutuante ancorado a um elemento, para conteúdo interativo curto: calcular frete, editar um valor, filtros rápidos."
      importCode={`import { Popover } from '@jcdecor/ui';`}
    >
      <Section title="Calcular frete">
        <P>
          Com <code>trapFocus</code>, o Tab circula dentro do popover — use sempre que houver campos. <kbd>Esc</kbd> e o clique fora fecham.
        </P>
        <Demo id="popover/shipping" />
      </Section>

      <Section title="Formulário de edição">
        <P>
          Popover controlado (<code>opened</code> + <code>onChange</code>) para editar o preço na própria listagem. Selects internos usam{' '}
          <code>comboboxProps={'{{ withinPortal: false }}'}</code> para que o clique na lista não conte como “clique fora”.
        </P>
        <Demo id="popover/edit-price" />
      </Section>

      <Section title="Posições">
        <P>
          12 posições (<code>top</code>, <code>bottom-start</code>, <code>right-end</code>…). Se faltar espaço, o popover vira para o lado oposto
          automaticamente.
        </P>
        <Demo id="popover/positions" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'shadow / radius', type: 'defaultProps', default: 'md · sm', description: '--ds-shadow-md e raio de controle (8px).' },
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
            { name: 'opened / onChange', vueName: 'v-model:opened', type: 'boolean / (opened) => void', vueType: 'boolean', description: 'Modo controlado.' },
            { name: 'closeOnClickOutside', type: 'boolean', default: 'true', description: 'Fecha ao clicar fora.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Popover é para conteúdo curto — se tiver mais de 3 campos ou precisar de rolagem, use Modal ou Drawer. Não abra um popover dentro de outro.
          Para rótulos sem interação, use Tooltip.
        </P>
      </Section>
    </DocPage>
  );
}
