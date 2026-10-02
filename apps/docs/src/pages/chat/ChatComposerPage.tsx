import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function ChatComposerPage() {
  return (
    <DocPage
      kicker="Chat"
      title="ChatComposer"
      source="chat"
      sourcePath="packages/ui/src/chat/ChatComposer.tsx"
      description="Campo de envio de mensagens: cresce até 5 linhas, Enter envia, Shift+Enter quebra linha e anexos são opcionais."
      importCode={`import { ChatComposer } from '@jcdecor/ui/chat';`}
    >
      <Section title="Uso">
        <P>
          <code>onSend</code> recebe <code>{'{ text, files }'}</code> com o texto já sem espaços nas
          pontas; o campo é limpo em seguida.
        </P>
        <Demo id="chat-composer/usage" />
      </Section>

      <Section title="Anexos">
        <P>
          <code>allowAttachments</code> mostra o clipe; os arquivos escolhidos aparecem como pílulas
          removíveis acima do campo. <code>accept</code> segue o atributo HTML.
        </P>
        <Demo id="chat-composer/attachments" />
      </Section>

      <Section title="Controlado">
        <P>
          Use <code>value</code> + <code>onChange</code> para limitar caracteres, salvar rascunhos
          ou inserir textos prontos.
        </P>
        <Demo id="chat-composer/controlled" />
      </Section>

      <Section title="Respostas rápidas">
        <P>
          <code>leftSection</code> recebe elementos extras à esquerda do campo — aqui um menu de
          respostas rápidas, combinado com atalhos acima.
        </P>
        <Demo id="chat-composer/quick-replies" />
      </Section>

      <Section title="Desabilitado">
        <Demo id="chat-composer/disabled" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'onSend',
              type: '(payload: { text: string; files: File[] }) => void',
              required: true,
              description: 'Chamado ao enviar (Enter ou botão).',
            },
            { name: 'value', type: 'string', description: 'Valor controlado.' },
            {
              name: 'defaultValue',
              type: 'string',
              description: 'Valor inicial (não controlado).',
            },
            {
              name: 'onChange',
              type: '(value: string) => void',
              description: 'Chamado a cada alteração.',
            },
            {
              name: 'placeholder',
              type: 'string',
              default: "'Digite uma mensagem…'",
              description: 'Placeholder (também usado como aria-label).',
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Desabilita campo, anexos e envio.',
            },
            {
              name: 'allowAttachments',
              type: 'boolean',
              default: 'false',
              description: 'Habilita o botão de anexos.',
            },
            { name: 'accept', type: 'string', description: 'Tipos aceitos (ex.: "image/*,.pdf").' },
            {
              name: 'maxRows',
              type: 'number',
              default: '5',
              description: 'Máximo de linhas antes de rolar.',
            },
            {
              name: 'leftSection',
              type: 'ReactNode',
              description: 'Elementos à esquerda (respostas rápidas, emojis…).',
            },
            {
              name: 'sendLabel',
              type: 'string',
              default: "'Enviar'",
              description: 'aria-label do botão de envio.',
            },
          ]}
        />
      </Section>
    </DocPage>
  );
}
