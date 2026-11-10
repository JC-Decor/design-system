import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

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
        <OnlyFor framework="react">
          <P>Passe overrides ao <code>JcProvider</code> — eles são mesclados sobre o tema da marca com <code>mergeThemeOverrides</code>.</P>
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>Passe overrides na prop <code>theme</code> do <code>JcProvider</code> — eles são mesclados (deep merge) sobre o tema da marca.</P>
          <CodeBlock
            language="vue"
            code={`<script setup lang="ts">
import { JcProvider } from '@jcdecor/vue';

const theme = {
  defaultRadius: 'md',
  components: {
    Button: { defaultProps: { size: 'sm' } },
    KpiCard: { classNames: { value: 'meu-kpi-valor' } },
  },
};
</script>

<template>
  <JcProvider :theme="theme">
    <RouterView />
  </JcProvider>
</template>`}
          />
        </OnlyFor>
        <OnlyFor framework="react">
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
        </OnlyFor>
        <P>Os componentes JC também aceitam Styles API (<code>classNames</code>, <code>styles</code>, <code>vars</code>) e podem ser configurados via <code>theme.components</code>, como qualquer componente do Mantine.</P>
        <Demo id="theming/styles-api" title="Styles API em um componente JC" />
      </Section>

      <Section title="Tema escuro">
        <P>
          Use o <code>ThemeToggle</code> ou o hook <code>useMantineColorScheme</code>
          <OnlyFor framework="vue"> (composable do <code>@jcdecor/vue</code>)</OnlyFor>. Para forçar um tema (ex.: painel interno sempre escuro), use{' '}
          <OnlyFor framework="react"><code>{'<JcProvider forceColorScheme="dark">'}</code></OnlyFor>
          <OnlyFor framework="vue"><code>{'<JcProvider force-color-scheme="dark">'}</code></OnlyFor>.
        </P>
      </Section>

      <Section title="Temas festivos">
        <P>
          O DS reconhece automaticamente as principais datas comemorativas brasileiras (ver <code>theme/holidays.ts</code>) — no máximo uma fica
          "na janela" por vez. Quando uma janela está ativa, o flavor correspondente troca <code>--ds-primary</code>/<code>--ds-accent</code>/
          <code>--ds-link</code> (e o <code>primaryColor</code> padrão do Mantine) reaproveitando rampas já validadas em AA, e desenha uma faixa
          decorativa na barra superior do shell de docs. Não há um seletor manual entre feriados: <code>{'<ThemeFlavorToggle />'}</code> só
          liga/desliga o flavor da janela atual, e só aparece enquanto ela estiver ativa.
        </P>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 16 }}>
          <thead>
            <tr style={{ textAlign: 'left' }}>
              <th style={{ padding: '6px 12px 6px 0' }}>Feriado</th>
              <th style={{ padding: '6px 12px' }}>Flavor</th>
              <th style={{ padding: '6px 12px' }}>Janela</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: '6px 12px 6px 0' }}>Carnaval</td><td style={{ padding: '6px 12px' }}><code>carnaval</code></td><td style={{ padding: '6px 12px' }}>Sexta-feira antes da Quarta-feira de Cinzas até ela (móvel, derivado da Páscoa)</td></tr>
            <tr><td style={{ padding: '6px 12px 6px 0' }}>Páscoa</td><td style={{ padding: '6px 12px' }}><code>pascoa</code></td><td style={{ padding: '6px 12px' }}>Domingo de Ramos até o Domingo de Páscoa (móvel)</td></tr>
            <tr><td style={{ padding: '6px 12px 6px 0' }}>Festa Junina</td><td style={{ padding: '6px 12px' }}><code>festaJunina</code></td><td style={{ padding: '6px 12px' }}>1–30 de junho</td></tr>
            <tr><td style={{ padding: '6px 12px 6px 0' }}>Independência do Brasil</td><td style={{ padding: '6px 12px' }}><code>independencia</code></td><td style={{ padding: '6px 12px' }}>1–7 de setembro</td></tr>
            <tr><td style={{ padding: '6px 12px 6px 0' }}>Natal</td><td style={{ padding: '6px 12px' }}><code>christmas</code></td><td style={{ padding: '6px 12px' }}>1–25 de dezembro</td></tr>
          </tbody>
        </table>
        <P>
          Para pré-visualizar um flavor fora da janela real (demos, screenshots, testes), force-o com <code>forceThemeFlavor</code> — ele
          ignora a data atual e a preferência salva, e some o <code>{'<ThemeFlavorToggle />'}</code> nesse modo (não há o que ligar/desligar).
        </P>
        <OnlyFor framework="vue">
          <CodeBlock
            language="vue"
            code={`<script setup lang="ts">
import { ThemeFlavorToggle, useThemeFlavor } from '@jcdecor/vue';

const { flavor, activeHoliday, festiveEnabled, setFestiveEnabled } = useThemeFlavor();
</script>

<template>
  <ThemeFlavorToggle />
  <!-- pré-visualizar Carnaval fora da janela real, ex.: nos docs -->
  <JcProvider force-theme-flavor="carnaval">
    <RouterView />
  </JcProvider>
</template>`}
          />
        </OnlyFor>
        <OnlyFor framework="react">
          <CodeBlock
            code={`import { JcProvider, ThemeFlavorToggle, useThemeFlavor } from '@jcdecor/ui';

<JcProvider>
  <ThemeFlavorToggle />
  <App />
</JcProvider>

// pré-visualizar Carnaval fora da janela real, ex.: nos docs:
<JcProvider forceThemeFlavor="carnaval">
  <App />
</JcProvider>

// em qualquer componente dentro do JcProvider:
const { flavor, activeHoliday, festiveEnabled, setFestiveEnabled } = useThemeFlavor();`}
          />
        </OnlyFor>
      </Section>

      <Section title="Usando sem o JcProvider">
        <P>Se o projeto já tem um MantineProvider, passe o tema e o resolver diretamente:</P>
        <OnlyFor framework="vue">
          <CodeBlock
            language="vue"
            code={`<script setup lang="ts">
import { MantineProvider } from '@mantine-vue/core';
import { jcTheme, jcCssVariablesResolver } from '@jcdecor/vue';
</script>

<template>
  <MantineProvider :theme="jcTheme" :css-variables-resolver="jcCssVariablesResolver">
    <RouterView />
  </MantineProvider>
</template>`}
          />
        </OnlyFor>
        <OnlyFor framework="react">
        <CodeBlock
          code={`import { MantineProvider } from '@mantine/core';
import { jcTheme, jcCssVariablesResolver } from '@jcdecor/ui';

<MantineProvider theme={jcTheme} cssVariablesResolver={jcCssVariablesResolver}>
  <App />
</MantineProvider>`}
        />
        </OnlyFor>
      </Section>
    </DocPage>
  );
}
