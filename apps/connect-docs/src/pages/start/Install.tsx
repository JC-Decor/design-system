import { List, Alert } from '@jcdecor/connect-ui';
import { IconInfoCircle } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

export default function Install() {
  return (
    <DocPage kicker="Começando" title="Instalação" description="Como adicionar o @jcdecor/connect-ui a um projeto React (Vite, Next.js…).">
      <Section title="1. Instale os pacotes">
        <P>O DS depende do Mantine 9 e do React 19.2+ como peer dependencies.</P>
        <CodeBlock language="bash" code={`npm install @jcdecor/connect-ui @mantine/core @mantine/hooks`} />
        <P>Opcional, se usar notificações (toasts):</P>
        <CodeBlock language="bash" code={`npm install @mantine/notifications`} />
        <Alert icon={<IconInfoCircle />} title="React 18?" mt="md">
          O Mantine 9 exige React 19. O <code>connect-jc/frontend</code> ainda está em React 18 e precisa subir para o React 19 (
          <code>react</code>, <code>react-dom</code>, <code>@types/react</code>) antes de adotar o pacote.
        </Alert>
      </Section>

      <Section title="2. Fontes DM Sans e DM Mono">
        <P>Adicione as fontes no <code>index.html</code> (ou use <code>@fontsource/dm-sans</code> e <code>@fontsource/dm-mono</code>):</P>
        <CodeBlock
          language="html"
          code={`<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />`}
        />
      </Section>

      <Section title="3. Estilos e provider">
        <P>Importe os CSS na ordem abaixo (o do DS sempre por último) e envolva a aplicação com <code>ConnectProvider</code>.</P>
        <CodeBlock
          fileName="main.tsx"
          code={`import '@mantine/core/styles.css';
// import '@mantine/notifications/styles.css'; // se usar notificações
import '@jcdecor/connect-ui/styles.css';

import { createRoot } from 'react-dom/client';
import { ConnectProvider } from '@jcdecor/connect-ui';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <ConnectProvider>
    <App />
  </ConnectProvider>,
);`}
        />
        <Alert icon={<IconInfoCircle />} title="PostCSS (opcional)" mt="md">
          Para usar mixins do Mantine (<code>@mixin dark</code>, <code>rem()</code>…) nos seus próprios CSS modules, instale{' '}
          <code>postcss-preset-mantine</code> como no guia oficial do Mantine.
        </Alert>
      </Section>

      <Section title="4. Importe e use">
        <CodeBlock
          code={`// Tudo em um só lugar: componentes Mantine (temados) + componentes Connect
import { Button, Card, Badge, Icon, Kicker, ThemeToggle } from '@jcdecor/connect-ui';

// Tokens e listas prontas (tons, prioridades, status)
import { tones, priorities, statuses } from '@jcdecor/connect-ui';

// Tokens crus (para JS, canvas, e-mails…), sem puxar React/Mantine
import { brand, ramps, typography } from '@jcdecor/connect-ui/tokens';`}
        />
      </Section>

      <Section title="Next.js (App Router)">
        <P>Adicione o <code>ColorSchemeScript</code> no layout para evitar o flash do tema claro ao abrir no escuro:</P>
        <CodeBlock
          fileName="app/layout.tsx"
          code={`import '@mantine/core/styles.css';
import '@jcdecor/connect-ui/styles.css';
import { ColorSchemeScript, ConnectProvider, mantineHtmlProps } from '@jcdecor/connect-ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <ConnectProvider>{children}</ConnectProvider>
      </body>
    </html>
  );
}`}
        />
      </Section>

      <Section title="O que vem no pacote">
        <List spacing="xs" mt="sm" c="var(--ds-text-2)">
          <List.Item><b>connectTheme</b> — tema Mantine (cores, tipografia, spacing, raios, sombras, variantes e overrides de componentes)</List.Item>
          <List.Item><b>connectCssVariablesResolver</b> — injeta as variáveis <code>--ds-*</code>, <code>--cn-*</code>, <code>--type-*</code> e <code>--sp-*</code></List.Item>
          <List.Item><b>ConnectProvider</b> — MantineProvider pré-configurado (tema claro por padrão; escuro com <code>ThemeToggle</code>)</List.Item>
          <List.Item><b>tokens</b>, <b>tones</b>, <b>priorities</b>, <b>statuses</b> — os valores do Connect em JS</List.Item>
          <List.Item><b>Componentes Connect</b> (<code>Icon</code>, tipografia, <code>ThemeToggle</code>…) e formatadores pt-BR (<code>formatNumber</code>, <code>formatPercent</code>, <code>formatDate</code>…)</List.Item>
        </List>
      </Section>
    </DocPage>
  );
}
