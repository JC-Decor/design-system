// Mantine Vue primeiro: os exemplos Vue usam só classes próprias (CSS modules); os globais do React vêm depois e prevalecem
import '@mantine-vue/core/styles.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@jcdecor/ui/styles.css';
import './docs.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import { Notifications } from '@mantine/notifications';
import { JcProvider } from '@jcdecor/ui';
import { FrameworkProvider } from './kit/framework';
import { router } from './router';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  return createHighlighter({ langs: ['tsx', 'ts', 'vue', 'bash', 'css', 'json', 'html'], themes: [] });
}
const shikiAdapter = createShikiAdapter(loadShiki);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JcProvider>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>
        <Notifications position="top-right" />
        <FrameworkProvider>
          <RouterProvider router={router} />
        </FrameworkProvider>
      </CodeHighlightAdapterProvider>
    </JcProvider>
  </StrictMode>,
);
