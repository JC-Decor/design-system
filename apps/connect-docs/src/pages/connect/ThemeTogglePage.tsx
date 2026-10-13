import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function ThemeTogglePage() {
  return (
    <DocPage
      kicker="Componentes Connect"
      title="ThemeToggle"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ThemeToggle"
      description="Alterna entre tema claro e escuro (o .theme-toggle do Connect). A escolha é persistida pelo colorSchemeManager do Mantine — experimente: os exemplos mudam o tema desta documentação."
      importCode={`import { ThemeToggle } from '@jcdecor/connect-ui';`}
    >
      <Section title="Ícone">
        <P>Forma padrão (<code>as="icon"</code>): um <code>ActionIcon</code> (variante <code>default</code>, o <code>.ic-btn</code> do Connect) com lua no tema claro e sol no escuro. Aceita as props do ActionIcon.</P>
        <Demo id="theme-toggle/icon" />
      </Section>

      <Section title="Botão">
        <P><code>as="button"</code> renderiza um botão com rótulo, com a variante <code>outline</code> neutra por padrão.</P>
        <Demo id="theme-toggle/button" />
      </Section>

      <Section title="Lendo o tema atual">
        <P>
          Use <code>useComputedColorScheme</code> do Mantine para reagir ao tema em outros componentes.
        </P>
        <Demo id="theme-toggle/hook" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'as', type: "'icon' | 'button'", default: "'icon'", description: 'ActionIcon ou Button com texto.' },
            { name: 'label', type: 'string', default: "'Alternar tema' · ação", description: 'Texto do botão. No ícone, sobrescreve o aria-label (padrão: "Ativar tema escuro"/"Ativar tema claro").' },
            { name: 'variant', type: 'string', default: "'default' · 'outline'", description: 'Variante do ActionIcon (icon) ou do Button (button).' },
            { name: 'color', type: 'MantineColor', description: 'Cor do ActionIcon/Button.' },
            { name: 'size', type: 'MantineSize', default: "'lg' · 'sm'", description: 'Tamanho do ActionIcon (icon) ou do Button (button).' },
            { name: '...ActionIconProps', type: 'ActionIconProps', description: "Demais props do ActionIcon — aplicadas apenas em as='icon'." },
          ]}
        />
      </Section>
    </DocPage>
  );
}
