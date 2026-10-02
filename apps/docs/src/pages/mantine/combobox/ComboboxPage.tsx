import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ComboboxPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="Combobox"
      source="mantine"
      mantineName="combobox"
      description="Primitivo para construir seletores sob medida. Select, MultiSelect, Autocomplete e TagsInput são feitos com ele."
      importCode={`import { Combobox, useCombobox } from '@jcdecor/ui';`}
    >
      <Section title="Seletor personalizado">
        <P>
          Um <code>InputBase</code> como botão exibe a opção escolhida com ícone e descrição — algo que o Select não faz no campo.
        </P>
        <Demo id="combobox/custom-picker" />
      </Section>

      <Section title="Botão com busca">
        <P>
          Qualquer elemento pode ser o alvo. <code>Combobox.Search</code> coloca a busca dentro do dropdown e{' '}
          <code>withAriaAttributes={'{false}'}</code> evita atributos de combobox no botão.
        </P>
        <Demo id="combobox/button-search" />
      </Section>

      <Section title="Cabeçalho, grupos e rodapé">
        <Demo id="combobox/header-footer" />
      </Section>

      <Section title="useCombobox">
        <P>
          O hook guarda o estado do dropdown e a opção ativa: <code>openDropdown</code>, <code>closeDropdown</code>,{' '}
          <code>selectFirstOption</code>, <code>updateSelectedOptionIndex</code>, <code>resetSelectedOption</code> e outros. Navegue com as setas.
        </P>
        <Demo id="combobox/use-combobox" />
      </Section>

      <Section title="No tema JC">
        <P>
          <code>Combobox.Option</code> usa raio de 8px, hover/teclado em <code>--ds-surface-2</code> e, com <code>active</code>, fundo{' '}
          <code>--ds-primary-soft</code> e texto <code>--ds-primary</code>. Rótulos de grupo usam caption em <code>--ds-text-3</code>; cabeçalho,
          rodapé e busca usam <code>--ds-border-soft</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'store', type: 'ComboboxStore', required: true, description: 'Retorno de useCombobox().' },
            { name: 'onOptionSubmit', type: '(value) => void', description: 'Opção escolhida (clique ou Enter).' },
            { name: 'Combobox.Target', type: 'component', description: 'Alvo que controla o dropdown e recebe atributos de acessibilidade.' },
            { name: 'Combobox.Option', type: 'component', description: 'value, active (marcada), disabled.' },
            { name: 'Combobox.Search / Empty / Group', type: 'component', description: 'Busca interna, estado vazio e grupos.' },
            { name: 'Combobox.Header / Footer', type: 'component', description: 'Áreas fixas acima/abaixo das opções.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Prefira os componentes prontos; recorra ao Combobox quando precisar de um alvo diferente ou de um campo com conteúdo rico. Mantenha
          a navegação por teclado (setas + Enter) funcionando.
        </P>
      </Section>
    </DocPage>
  );
}
