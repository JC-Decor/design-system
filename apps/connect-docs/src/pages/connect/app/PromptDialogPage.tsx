import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc → @jcdecor/connect-ui: mesma API
import { PromptDialog } from '@jcdecor/connect-ui';

<PromptDialog
  open={open}
  onOpenChange={setOpen}
  title="Renomear pasta"
  label="Nome da pasta"
  defaultValue={pasta.nome}
  onConfirm={async (nome) => { await renomear(nome); setOpen(false); }}
/>`;

export default function PromptDialogPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="PromptDialog"
      source="connect"
      sourcePath="packages/connect-ui/src/components/PromptDialog"
      description="Diálogo com um único campo de texto: renomear, dar nome a algo, justificar uma recusa. Enter confirma; o valor chega aparado e nunca vazio."
      importCode={`import { PromptDialog } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          O campo começa com <code>defaultValue</code> (reaplicado a cada abertura) e recebe o foco. "Confirmar" fica desabilitado
          enquanto o campo estiver vazio.
        </P>
        <Demo id="cn-prompt-dialog/basic" />
      </Section>

      <Section title="Validação e carregamento">
        <P>
          Valide em <code>onConfirm</code> e devolva a mensagem em <code>error</code> (aparece sob o campo, que fica marcado como
          inválido). <code>loading</code> desabilita a confirmação e mostra "Aguarde…".
        </P>
        <Demo id="cn-prompt-dialog/validation" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'open', type: 'boolean', required: true, description: 'Controla a abertura.' },
            { name: 'onOpenChange', type: '(open: boolean) => void', required: true, description: 'Chamado com false ao cancelar/fechar.' },
            { name: 'title', type: 'ReactNode', required: true, description: 'Título do diálogo.' },
            { name: 'description', type: 'ReactNode', description: 'Texto explicativo.' },
            { name: 'label', type: 'string', required: true, description: 'Rótulo do campo.' },
            { name: 'defaultValue', type: 'string', default: "''", description: 'Valor inicial a cada abertura.' },
            { name: 'placeholder', type: 'string', description: 'Placeholder do campo.' },
            { name: 'onConfirm', type: '(value: string) => void | Promise<void>', required: true, description: 'Recebe o valor aparado (sem espaços nas pontas).' },
            { name: 'error', type: 'ReactNode', description: 'Mensagem de erro sob o campo.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Desabilita a confirmação e mostra "Aguarde…".' },
            { name: 'confirmLabel / cancelLabel', type: 'string', default: "'Confirmar' / 'Cancelar'", description: 'Rótulos dos botões.' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API. O campo agora é um <code>TextInput</code> do tema (a classe <code>.wf-form-stack</code> sai) e o erro é exibido
          pelo próprio campo, com <code>aria-invalid</code>.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
