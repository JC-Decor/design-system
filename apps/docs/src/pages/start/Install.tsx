import { List, Alert, Anchor } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { IconInfoCircle } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';
import { OnlyFor, useFramework } from '../../kit/framework';

export default function Install() {
  const vue = useFramework().framework === 'vue';
  return (
    <DocPage
      kicker="Começando"
      title="Instalação"
      description={
        vue
          ? 'Como adicionar o @jcdecor/vue a um projeto Vue 3 (Vite, Nuxt…).'
          : 'Como adicionar o @jcdecor/ui a um projeto React (Vite, Next.js, CRA…).'
      }
    >
      <Section title="1. Instale os pacotes">
        <OnlyFor framework="react">
          <P>O DS depende do Mantine 9 e do React 19.2+ como peer dependencies.</P>
          <CodeBlock language="bash" code={`npm install @jcdecor/ui @mantine/core @mantine/hooks`} />
          <P>Opcionais, conforme o que você usar:</P>
          <CodeBlock
            language="bash"
            code={`# Gráficos (@jcdecor/ui/charts)
npm install @mantine/charts recharts

# Notificações (toasts)
npm install @mantine/notifications`}
          />
        </OnlyFor>
        <OnlyFor framework="vue">
          <P>O DS depende do Mantine Vue 3.5+ e do Vue 3.5+ como peer dependencies.</P>
          <CodeBlock language="bash" code={`npm install @jcdecor/vue @mantine-vue/core @mantine-vue/hooks @mantine-vue/utils`} />
          <P>Opcional, para os gráficos (@jcdecor/vue/charts, sobre Apache ECharts):</P>
          <CodeBlock language="bash" code={`npm install @mantine-vue/charts echarts vue-echarts`} />
        </OnlyFor>
      </Section>

      <Section title="2. Fonte Poppins">
        <P>Adicione a Poppins no <code>index.html</code> (ou use <code>@fontsource/poppins</code>):</P>
        <CodeBlock
          language="html"
          code={`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />`}
        />
      </Section>

      <Section title="3. Estilos e provider">
        <P>Importe os CSS na ordem abaixo (o do DS sempre por último) e envolva a aplicação com <code>JcProvider</code>.</P>
        <OnlyFor framework="vue">
          <CodeBlock
            fileName="main.ts"
            language="ts"
            code={`import '@mantine-vue/core/styles.css';
import '@jcdecor/vue/styles.css';

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`}
          />
          <CodeBlock
            fileName="App.vue"
            language="vue"
            code={`<script setup lang="ts">
import { JcProvider } from '@jcdecor/vue';
</script>

<template>
  <JcProvider>
    <RouterView />
  </JcProvider>
</template>`}
          />
        </OnlyFor>
        <OnlyFor framework="react">
        <CodeBlock
          fileName="main.tsx"
          code={`import '@mantine/core/styles.css';
// import '@mantine/charts/styles.css';        // se usar gráficos
// import '@mantine/notifications/styles.css'; // se usar notificações
import '@jcdecor/ui/styles.css';

import { createRoot } from 'react-dom/client';
import { JcProvider } from '@jcdecor/ui';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <JcProvider>
    <App />
  </JcProvider>,
);`}
        />
        </OnlyFor>
        <Alert icon={<IconInfoCircle />} title="PostCSS (opcional)" mt="md">
          Para usar mixins do Mantine (<code>@mixin light</code>, <code>rem()</code>…) nos seus próprios CSS modules, instale{' '}
          <code>postcss-preset-mantine</code> como no guia oficial do Mantine.
        </Alert>
      </Section>

      <Section title="4. Importe e use">
        <OnlyFor framework="vue">
          <CodeBlock
            language="ts"
            code={`// Tudo em um só lugar: componentes Mantine Vue (temados) + componentes JC
import { Button, Card, KpiCard, Tag, DataTable } from '@jcdecor/vue';

// Módulos opcionais
import { ChatLayout, ChatThread, ChatComposer } from '@jcdecor/vue/chat';
import { LineChart, DonutChart, ChartCard } from '@jcdecor/vue/charts';

// Tokens crus (para JS, canvas, e-mails…)
import { brand, ramps, typography } from '@jcdecor/vue/tokens';`}
          />
          <P>
            Diferenças de API entre React e Vue (slots, <code>v-model</code>, eventos) estão na página{' '}
            <Anchor component={Link} to="/instalacao-vue">Vue (@jcdecor/vue)</Anchor>.
          </P>
        </OnlyFor>
        <OnlyFor framework="react">
        <CodeBlock
          code={`// Tudo em um só lugar: componentes Mantine (temados) + componentes JC
import { Button, Card, KpiCard, Tag, DataTable } from '@jcdecor/ui';

// Módulos opcionais
import { ChatLayout, ChatThread, ChatComposer } from '@jcdecor/ui/chat';
import { LineChart, DonutChart, ChartCard } from '@jcdecor/ui/charts';

// Tokens crus (para JS, canvas, e-mails…)
import { brand, ramps, typography } from '@jcdecor/ui/tokens';`}
        />
        </OnlyFor>
      </Section>

      {!vue && (
      <Section title="Next.js (App Router)">
        <P>Os módulos já vêm com a diretiva <code>'use client'</code>. Adicione o <code>ColorSchemeScript</code> no layout para evitar flash de tema:</P>
        <CodeBlock
          fileName="app/layout.tsx"
          code={`import '@mantine/core/styles.css';
import '@jcdecor/ui/styles.css';
import { ColorSchemeScript, JcProvider, mantineHtmlProps } from '@jcdecor/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <JcProvider>{children}</JcProvider>
      </body>
    </html>
  );
}`}
        />
      </Section>
      )}

      <Section title="O que vem no pacote">
        <List spacing="xs" mt="sm" c="var(--ds-text-2)">
          <List.Item><b>jcTheme</b> — tema Mantine (cores, tipografia, spacing, raios, sombras, overrides de componentes)</List.Item>
          <List.Item><b>jcCssVariablesResolver</b> — injeta as variáveis <code>--ds-*</code>, <code>--dc-*</code>, <code>--type-*</code>, <code>--sp-*</code></List.Item>
          <List.Item><b>JcProvider</b> — MantineProvider pré-configurado{vue && ' (lembra o tema claro/escuro no localStorage)'}</List.Item>
          <List.Item><b>Componentes JC</b>, <b>chat</b>, <b>charts</b> e utilitários de formatação pt-BR</List.Item>
        </List>
      </Section>
    </DocPage>
  );
}
