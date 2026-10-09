import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function ThemeTogglePage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="ThemeToggle"
      source="jc"
      sourcePath="packages/ui/src/components/ThemeToggle"
      description="Alterna entre tema claro e escuro. A escolha é persistida pelo colorSchemeManager do Mantine — experimente: os exemplos mudam o tema desta documentação."
      importCode={`import { ThemeToggle } from '@jcdecor/ui';`}
    >
      <Section title="Ícone">
        <P>Forma padrão (<code>as="icon"</code>): um <code>ActionIcon</code> com lua no tema claro e sol no escuro. Aceita as props do ActionIcon.</P>
        <Demo id="theme-toggle/icon" />
      </Section>

      <Section title="Botão">
        <P><code>as="button"</code> renderiza o botão "Alternar tema" do DS, com contorno por padrão.</P>
        <Demo id="theme-toggle/button" />
      </Section>

      <Section title="Lendo o tema atual">
        <P>
          Use <code>useComputedColorScheme</code> do Mantine para reagir ao tema em outros componentes.
          <OnlyFor framework="vue"> No Vue o composable retorna um <code>Ref</code> (exportado também pelo <code>@jcdecor/vue</code>).</OnlyFor>
        </P>
        <Demo id="theme-toggle/hook" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'as', type: "'icon' | 'button'", default: "'icon'", description: 'ActionIcon ou Button com texto.' },
            { name: 'label', type: 'string', default: "'Alternar tema'", description: 'Texto do botão; no ícone, vira aria-label e title.' },
            { name: 'variant', type: 'string', default: "'subtle' · 'outline'", description: 'Variante do ActionIcon (icon) ou do Button (button).' },
            { name: 'color', type: 'MantineColor', description: 'Cor do ActionIcon/Button.' },
            { name: 'size', type: 'MantineSize', default: "'lg' · 'sm'", description: 'Tamanho do ActionIcon (icon) ou do Button (button).' },
            { name: '...ActionIconProps', type: 'ActionIconProps', description: "Demais props do ActionIcon — aplicadas apenas em as='icon'." },
          ]}
        />
      </Section>
    </DocPage>
  );
}
