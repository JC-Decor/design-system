import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const setupCode = `import { ConnectProvider, ToastProvider } from '@jcdecor/connect-ui';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ConnectProvider>
      <ToastProvider>{children}</ToastProvider>
    </ConnectProvider>
  );
}`;

const usageCode = `import { toast } from '@jcdecor/connect-ui';

async function aprovar() {
  try {
    await api.aprovarFerias(id);
    toast.success('Férias aprovadas.');
  } catch {
    toast.error('Não foi possível aprovar as férias.'); // erros ficam 7s
  }
}`;

const migrationCode = `// connect-jc
import { toast } from '@/hooks/useToast';
import { ToastProvider } from '@/components/ui/Toast';

// @jcdecor/connect-ui — mesma API (toast.success/error/info/dismiss)
import { toast, ToastProvider } from '@jcdecor/connect-ui';`;

export default function ToastPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="Toast"
      source="connect"
      sourcePath="packages/connect-ui/src/components/Toast"
      description="Avisos rápidos no canto inferior direito após uma ação: sucesso, erro ou informação. API imperativa (toast.success…) com store próprio, sem dependências extras."
      importCode={`import { toast, ToastProvider } from '@jcdecor/connect-ui';`}
    >
      <Section title="Configuração">
        <P>
          Coloque o <code>ToastProvider</code> uma vez, dentro do <code>ConnectProvider</code>. Ele renderiza os filhos e a viewport
          (em Portal). Depois, chame <code>toast</code> de qualquer lugar — inclusive fora de componentes.
        </P>
        <CodeBlock code={setupCode} language="tsx" />
        <CodeBlock code={usageCode} language="tsx" />
      </Section>

      <Section title="Tons">
        <P>
          <code>success</code> (verde, ícone de check), <code>error</code> (coral, ícone ×, anunciado como alerta) e <code>info</code>{' '}
          (azul). No máximo 3 ficam visíveis; os demais esperam na fila e entram quando um sai.
        </P>
        <Demo id="cn-toast/basic" />
        <Demo id="cn-toast/tones" description="ToastCard: o cartão isolado, útil para mostrar o visual sem o store." />
      </Section>

      <Section title="Duração e fechamento">
        <P>
          O segundo argumento é a duração em ms (padrão 5s; erros 7s). <code>0</code> mantém o aviso até o usuário fechar.
          Cada chamada devolve o id, usado em <code>toast.dismiss(id)</code>; <code>toast.clear()</code> remove todos.
        </P>
        <Demo id="cn-toast/duration" />
      </Section>

      <Section title="API">
        <PropsTable
          rows={[
            { name: 'toast.success(message, duration?)', type: '=> string', default: '5000', description: 'Aviso verde. Devolve o id.' },
            { name: 'toast.error(message, duration?)', type: '=> string', default: '7000', description: 'Aviso coral com role="alert".' },
            { name: 'toast.info(message, duration?)', type: '=> string', default: '5000', description: 'Aviso azul.' },
            { name: 'toast.dismiss(id)', type: '=> void', description: 'Fecha um aviso (visível ou na fila).' },
            { name: 'toast.clear()', type: '=> void', description: 'Fecha todos e esvazia a fila.' },
            { name: 'useToasts()', type: '=> ToastItem[]', description: 'Lista reativa dos avisos visíveis (para viewports próprias).' },
            { name: 'subscribeToasts(listener)', type: '=> () => void', description: 'Assinatura sem React.' },
          ]}
        />
      </Section>

      <Section title="Componentes">
        <PropsTable
          rows={[
            { name: '<ToastProvider>', type: 'children, withinPortal?, className?, style?', description: 'Filhos + ToastViewport.' },
            { name: '<ToastViewport>', type: 'withinPortal? (true), className?, style?', description: 'Pilha fixa no canto inferior direito (24px; 16px no mobile).' },
            { name: '<ToastCard>', type: "tone, children, onDismiss?", description: 'Cartão de um aviso; sem onDismiss não mostra o ×.' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          A API é a mesma do <code>hooks/useToast</code>: troque os imports. <code>message</code> agora aceita ReactNode e há{' '}
          <code>toast.clear()</code>. O estilo de <code>toast.css</code> vem do componente e acompanha o tema escuro.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
