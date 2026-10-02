import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function Theming() {
  return (
    <DocPage kicker="Começando" title="Tema & customização" description="Como o tema JC Decor está montado sobre o Mantine e como estendê-lo.">
      <Section title="Como funciona">
        <P>
          O <code>jcTheme</code> é um <code>createTheme()</code> do Mantine com a paleta, tipografia e overrides de componentes. O{' '}
          <code>jcCssVariablesResolver</code> publica os tokens semânticos do ds.css como variáveis CSS, que trocam de valor entre os temas
          claro e escuro.
        </P>
        <PropsTable
          rows={[
            { name: 'primaryColor', type: "'horizon'", description: 'Cor primária (botões, links, foco).' },
            { name: 'primaryShade', type: '{ light: 6, dark: 4 }', description: 'Tom 600 no claro; 400 no escuro (com texto escuro, 6,6:1).' },
            { name: 'colors', type: 'horizon · obsidian · electric · evergreen · danger · gray', description: <>Também remapeia <code>blue/green/teal/yellow/red/gray/dark</code> para a paleta da marca.</> },
            { name: 'fontFamily', type: 'Poppins', description: 'Fonte da marca em textos e títulos.' },
            { name: 'headings', type: 'h1…h6', description: 'h1 40→32 · h2 32→26 · h3 24 · h4 20 · h5 18 · h6 16 (SemiBold; h1 Bold).' },
            { name: 'radius', type: 'xs 4 · sm 8 · md 12 · lg 16 · xl 99', description: 'Controles usam sm (8px); cards usam md (12px).' },
            { name: 'variantColorResolver', type: 'jcVariantColorResolver', description: <>Adiciona a variante <code>accent</code> e ajusta <code>outline</code>, <code>subtle</code> e <code>light</code>.</> },
          ]}
        />
      </Section>

      <Section title="Variáveis CSS disponíveis">
        <P>Use as variáveis em CSS modules, <code>style</code> ou props de estilo (<code>c="var(--ds-text-2)"</code>):</P>
        <CodeBlock
          language="css"
          code={`.meuBloco {
  background: var(--ds-surface);       /* branco · #1A1E27 no escuro */
  border: 1px solid var(--ds-border-soft);
  color: var(--ds-text-2);
  padding: var(--sp-16) var(--sp-24);
  border-radius: var(--ds-radius);
  box-shadow: var(--ds-shadow-sm);
  font-size: var(--type-subheadline-sm);
}
.destaque { color: var(--dc-electric); }`}
        />
      </Section>

      <Section title="Estendendo o tema">
        <P>Passe overrides ao <code>JcProvider</code> — eles são mesclados sobre o tema da marca com <code>mergeThemeOverrides</code>.</P>
        <CodeBlock
          code={`import { JcProvider, Button } from '@jcdecor/ui';

<JcProvider
  theme={{
    defaultRadius: 'md',
    components: {
      Button: Button.extend({ defaultProps: { size: 'sm' } }),
      KpiCard: { classNames: { value: 'meu-kpi-valor' } },
    },
  }}
>
  <App />
</JcProvider>`}
        />
        <P>Os componentes JC também aceitam Styles API (<code>classNames</code>, <code>styles</code>, <code>vars</code>) e podem ser configurados via <code>theme.components</code>, como qualquer componente do Mantine.</P>
        <Demo id="theming/styles-api" title="Styles API em um componente JC" />
      </Section>

      <Section title="Tema escuro">
        <P>
          Use o <code>ThemeToggle</code> ou o hook <code>useMantineColorScheme</code>. Para forçar um tema (ex.: painel interno sempre escuro), use{' '}
          <code>{'<JcProvider forceColorScheme="dark">'}</code>.
        </P>
      </Section>

      <Section title="Usando sem o JcProvider">
        <P>Se o projeto já tem um MantineProvider, passe o tema e o resolver diretamente:</P>
        <CodeBlock
          code={`import { MantineProvider } from '@mantine/core';
import { jcTheme, jcCssVariablesResolver } from '@jcdecor/ui';

<MantineProvider theme={jcTheme} cssVariablesResolver={jcCssVariablesResolver}>
  <App />
</MantineProvider>`}
        />
      </Section>
    </DocPage>
  );
}
