import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ComboboxPopoverPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="ComboboxPopover"
      source="mantine"
      mantineName="combobox-popover"
      description="Novo no Mantine 9: lista de opções em popover presa a qualquer alvo (botão, ícone). Ótimo para ordenação e filtros de listagem."
      importCode={`import { ComboboxPopover } from '@jcdecor/ui';`}
    >
      <Section title="Ordenação">
        <P>
          Envolva o alvo com <code>ComboboxPopover.Target</code>. O componente cuida do estado, teclado e acessibilidade — sem precisar de{' '}
          <code>useCombobox</code>.
        </P>
        <Demo id="combobox-popover/basic" />
      </Section>

      <Section title="Múltipla escolha">
        <P>Com <code>multiple</code> o dropdown fica aberto e cada clique alterna a opção. Grupos funcionam como no Select.</P>
        <Demo id="combobox-popover/multiple" />
      </Section>

      <Section title="Alvo com ícone">
        <Demo id="combobox-popover/icon-target" />
      </Section>

      <Section title="No tema JC">
        <P>Mesmas opções e dropdown do Select: hover em <code>--ds-surface-2</code>, marcadas em <code>--ds-primary-soft</code>/<code>--ds-primary</code>.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'ComboboxData', description: 'Opções ou grupos.' },
            { name: 'multiple', type: 'boolean', default: 'false', description: 'Valor vira string[].' },
            { name: 'value / onChange', type: 'string | null | string[]', description: 'Valor controlado.' },
            { name: 'allowDeselect', type: 'boolean', default: 'true', description: 'Clicar na marcada desmarca (modo simples).' },
            { name: 'checkIconPosition', type: "'left' | 'right'", default: "'left'", description: 'Posição do ícone de marcado.' },
            { name: 'comboboxProps', type: 'ComboboxProps', description: 'width, position, offset…' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          No Mantine 9.6 o modo <code>searchable</code> traz o placeholder fixo "Search..." em inglês. Para listas com busca em pt-BR,
          use <code>Combobox</code> com <code>Combobox.Search</code> (veja a página do Combobox).
        </P>
      </Section>
    </DocPage>
  );
}
