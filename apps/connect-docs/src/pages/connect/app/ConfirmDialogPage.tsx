import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc (Radix AlertDialog) → @jcdecor/connect-ui (Mantine Modal), mesma API
import { ConfirmDialog } from '@jcdecor/connect-ui';

<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  tone="danger"
  title="Excluir documento?"
  description="Esta ação não pode ser desfeita."
  confirmLabel="Excluir"
  loading={removendo}
  onConfirm={remover}
/>`;

export default function ConfirmDialogPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="ConfirmDialog"
      source="connect"
      sourcePath="packages/connect-ui/src/components/ConfirmDialog"
      description="Confirmação de ações com impacto: publicar, aprovar, excluir. Painel central (.dialog-panel) com título, descrição e rodapé Cancelar + ação principal."
      importCode={`import { ConfirmDialog } from '@jcdecor/connect-ui';`}
    >
      <Section title="Tons">
        <P>
          <code>tone="primary"</code> (padrão) usa o botão navy; <code>danger</code>, o botão coral para ações destrutivas;{' '}
          <code>warning</code>, um botão âmbar para ações reversíveis que ainda merecem atenção. O foco começa em "Cancelar",
          o diálogo fica acima de outros modais (<code>zIndex</code> 300) e fecha com Esc ou clique fora.
        </P>
        <Demo id="cn-confirm-dialog/tones" />
      </Section>

      <Section title="Carregando">
        <P>
          Com <code>loading</code>, os botões ficam desabilitados, a ação mostra "Aguarde…" e Esc/clique fora deixam de fechar —
          feche o diálogo você mesmo quando a requisição terminar.
        </P>
        <Demo id="cn-confirm-dialog/loading" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'open', type: 'boolean', required: true, description: 'Controla a abertura.' },
            { name: 'onOpenChange', type: '(open: boolean) => void', required: true, description: 'Chamado com false ao cancelar/fechar.' },
            { name: 'title', type: 'ReactNode', required: true, description: 'Título (18/700) — também nomeia o diálogo para leitores de tela.' },
            { name: 'description', type: 'ReactNode', description: 'Texto explicativo em cinza.' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo extra entre a descrição e os botões.' },
            { name: 'onConfirm', type: '() => void', required: true, description: 'Ação principal. O diálogo não fecha sozinho.' },
            { name: 'tone', type: "'primary' | 'danger' | 'warning'", default: "'primary'", description: 'Cor do botão de confirmação.' },
            { name: 'confirmLabel', type: 'string', default: "'Confirmar'", description: 'Rótulo da ação.' },
            { name: 'cancelLabel', type: 'string', default: "'Cancelar'", description: 'Rótulo do cancelamento.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Desabilita os botões e mostra "Aguarde…".' },
            { name: 'size', type: 'number | MantineSize', default: '440', description: 'Largura do painel.' },
            { name: '...ModalRootProps', type: 'ModalRootProps', description: 'Demais props do Modal.Root (zIndex, returnFocus…).' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API: troque o import. As classes <code>.dialog-overlay</code>/<code>.dialog-panel</code> não são mais necessárias.
          Diferença: <code>tone="warning"</code> agora tem botão âmbar (antes era igual ao primário).
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
