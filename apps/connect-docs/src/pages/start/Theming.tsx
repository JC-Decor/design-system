import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function Theming() {
  return (
    <DocPage kicker="Começando" title="Tema & customização" description="Como o tema do Connect está montado sobre o Mantine e como estendê-lo.">
      <Section title="Como funciona">
        <P>
          O <code>connectTheme</code> é um <code>createTheme()</code> do Mantine com a paleta, a tipografia e os overrides de componentes do Connect. O{' '}
          <code>connectCssVariablesResolver</code> publica os tokens (os mesmos do <code>tokens.css</code> do app original) como variáveis CSS, que trocam
          de valor entre os temas claro e escuro.
        </P>
        <PropsTable
          rows={[
            { name: 'primaryColor', type: "'navy'", description: 'Cor primária (#07016B): botões, links, item ativo, foco.' },
            { name: 'primaryShade', type: '{ light: 6, dark: 3 }', description: 'Tom 600 no claro; 300 (#A5B4FC, a primária do .dark do Connect) no escuro, com texto ink.' },
            { name: 'colors', type: 'navy · lavender · blue · green · yellow · coral · ink', description: <>Também remapeia <code>gray/dark</code> e cria aliases (<code>red→coral</code>, <code>indigo→navy</code>, <code>violet→lavender</code>, <code>teal→green</code>, <code>orange→yellow</code>).</> },
            { name: 'fontFamily', type: 'DM Sans · DM Mono', description: 'DM Sans em textos e títulos; DM Mono em eyebrows (Kicker), código e números tabulares.' },
            { name: 'fontSizes', type: 'xs 11,5 · sm 12,5 · md 13,5 · lg 15 · xl 16', description: 'Escala densa do painel: corpo de 13,5px.' },
            { name: 'headings', type: 'h1…h6', description: 'h1 26 · h2 22 · h3 18 · h4 16 · h5 15 · h6 13,5 — todos Bold (700) com tracking negativo.' },
            { name: 'spacing', type: 'xs 6 · sm 10 · md 16 · lg 22 · xl 28', description: 'lg (22px) é o padding padrão de card.' },
            { name: 'radius', type: 'xs 6 · sm 10 · md 14 · lg 20 · xl 999', description: 'Controles usam sm (padrão); cards usam lg; badges e chips são pílula.' },
            { name: 'variantColorResolver', type: 'connectVariantColorResolver', description: <>Variantes do <code>&lt;Btn kind&gt;</code> do Connect: <code>filled</code>, <code>ghost</code>, <code>outline</code>, <code>danger</code>, <code>subtle</code>, <code>light</code>.</> },
            { name: 'other', type: 'tones · priorities · statuses · density · motion…', description: <>Tokens acessíveis em <code>useMantineTheme().other</code>.</> },
          ]}
        />
      </Section>

      <Section title="Variáveis CSS disponíveis">
        <P>
          Use as variáveis em CSS modules, <code>style</code> ou style props (<code>c="var(--ds-text-2)"</code>). As <code>--ds-*</code> são semânticas
          (mudam no tema escuro); as <code>--cn-*</code> são do Connect: rampas cruas, tons e movimento.
        </P>
        <CodeBlock
          language="css"
          code={`.bloco {
  background: var(--ds-surface);          /* branco · #1E293B no escuro */
  border: 1px solid var(--ds-border-soft); /* --line do Connect */
  color: var(--ds-text-2);
  padding: var(--cn-pad);                  /* densidade: 16 · 22 · 28 */
  border-radius: var(--ds-radius-lg);      /* 20px, raio de card */
  box-shadow: var(--ds-shadow-sm);         /* --shadow-1 */
  font-size: var(--type-subheadline-rg);   /* 13,5px */
  transition: box-shadow var(--cn-t);      /* 180ms ease padrão */
}
.chipFerias {
  background: var(--cn-tone-lavender-bg);
  color: var(--cn-tone-lavender-fg);
}
.linha { border-color: var(--cn-gray-200); }  /* rampa crua: não muda no escuro */`}
        />
      </Section>

      <Section title="Estendendo o tema">
        <P>
          Passe overrides ao <code>ConnectProvider</code> — eles são mesclados sobre o tema do Connect com <code>mergeThemeOverrides</code>.
        </P>
        <CodeBlock
          code={`import { ConnectProvider, Button, Card } from '@jcdecor/connect-ui';

<ConnectProvider
  theme={{
    defaultRadius: 'md',
    components: {
      Button: Button.extend({ defaultProps: { size: 'sm' } }),
      Card: Card.extend({ defaultProps: { padding: 'md' } }),
    },
  }}
>
  <App />
</ConnectProvider>`}
        />
        <P>
          Os componentes (do Mantine e do Connect) aceitam Styles API — <code>classNames</code>, <code>styles</code>, <code>vars</code> — e podem ser
          configurados globalmente via <code>theme.components</code>.
        </P>
        <Demo id="theming/styles-api" title="Styles API num card de colaborador" />
      </Section>

      <Section title="Tema escuro">
        <P>
          O escuro reproduz o <code>.dark</code> do Connect (slate: fundo #0B1120, superfície #1E293B, primária #A5B4FC). Use o <code>ThemeToggle</code>{' '}
          ou o hook <code>useMantineColorScheme</code>; para forçar um tema, <code>{'<ConnectProvider forceColorScheme="dark">'}</code>. Nos seus
          estilos, use sempre as variáveis — nunca um hex claro fixo.
        </P>
      </Section>

      <Section title="Usando sem o ConnectProvider">
        <P>Se o projeto já tem um MantineProvider, passe o tema e o resolver diretamente:</P>
        <CodeBlock
          code={`import { MantineProvider } from '@mantine/core';
import { connectTheme, connectCssVariablesResolver } from '@jcdecor/connect-ui';

<MantineProvider theme={connectTheme} cssVariablesResolver={connectCssVariablesResolver}>
  <App />
</MantineProvider>`}
        />
      </Section>
    </DocPage>
  );
}
