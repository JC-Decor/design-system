import { List, Alert } from '@jcdecor/ui';
import { IconInfoCircle } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

export default function Install() {
  return (
    <DocPage kicker="Começando" title="Instalação" description="Como adicionar o @jcdecor/ui a um projeto React (Vite, Next.js, CRA…).">
      <Section title="1. Instale os pacotes">
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
        <Alert icon={<IconInfoCircle />} title="PostCSS (opcional)" mt="md">
          Para usar mixins do Mantine (<code>@mixin light</code>, <code>rem()</code>…) nos seus próprios CSS modules, instale{' '}
          <code>postcss-preset-mantine</code> como no guia oficial do Mantine.
        </Alert>
      </Section>

      <Section title="4. Importe e use">
        <CodeBlock
          code={`// Tudo em um só lugar: componentes Mantine (temados) + componentes JC
import { Button, Card, KpiCard, Tag, DataTable } from '@jcdecor/ui';

// Módulos opcionais
import { ChatLayout, ChatThread, ChatComposer } from '@jcdecor/ui/chat';
import { LineChart, DonutChart, ChartCard } from '@jcdecor/ui/charts';

// Tokens crus (para JS, canvas, e-mails…)
import { brand, ramps, typography } from '@jcdecor/ui/tokens';`}
        />
      </Section>

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

      <Section title="O que vem no pacote">
        <List spacing="xs" mt="sm" c="var(--ds-text-2)">
          <List.Item><b>jcTheme</b> — tema Mantine (cores, tipografia, spacing, raios, sombras, overrides de componentes)</List.Item>
          <List.Item><b>jcCssVariablesResolver</b> — injeta as variáveis <code>--ds-*</code>, <code>--dc-*</code>, <code>--type-*</code>, <code>--sp-*</code></List.Item>
          <List.Item><b>JcProvider</b> — MantineProvider pré-configurado</List.Item>
          <List.Item><b>Componentes JC</b>, <b>chat</b>, <b>charts</b> e utilitários de formatação pt-BR</List.Item>
        </List>
      </Section>
    </DocPage>
  );
}
