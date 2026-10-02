import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function ChatMessagePage() {
  return (
    <DocPage
      kicker="Chat"
      title="ChatMessage"
      source="chat"
      sourcePath="packages/ui/src/chat/ChatMessage.tsx"
      description="Bolha de mensagem: própria (azul, à direita) ou de outra pessoa, com horário, status de leitura, anexos e mensagens de sistema."
      importCode={`import { ChatMessage } from '@jcdecor/ui/chat';`}
    >
      <Section title="Própria vs. outra pessoa">
        <P>
          <code>own</code> alinha à direita com a cor primária. Mensagens de outras pessoas mostram
          o avatar do <code>author</code> (foto ou iniciais). Normalmente você não usa{' '}
          <code>ChatMessage</code> direto — o <code>ChatThread</code> monta tudo a partir dos dados.
        </P>
        <Demo id="chat-message/usage" />
      </Section>

      <Section title="Agrupamento">
        <P>
          <code>position</code> (<code>first</code> · <code>middle</code> · <code>last</code> ·{' '}
          <code>single</code>) ajusta os cantos da bolha para mensagens consecutivas do mesmo autor.
          Avatar e horário aparecem só na última do grupo.
        </P>
        <Demo id="chat-message/grouping" />
      </Section>

      <Section title="Status">
        <P>
          Exibido só em mensagens próprias. Passe o mouse sobre o ícone para ver o rótulo.{' '}
          <code>error</code> pinta a bolha de vermelho.
        </P>
        <Demo id="chat-message/statuses" />
      </Section>

      <Section title="Anexos">
        <P>
          <code>type: 'image'</code> com <code>url</code> mostra a miniatura (abre em nova aba);{' '}
          <code>type: 'file'</code> mostra um chip com nome e tamanho formatado em pt-BR.
        </P>
        <Demo id="chat-message/attachments" />
      </Section>

      <Section title="Mensagem de sistema">
        <P>
          Avisos centralizados, sem bolha: entrada de atendente, transferência, pedido despachado…
        </P>
        <Demo id="chat-message/system" />
      </Section>

      <Section title="Nome do autor">
        <P>
          <code>showAuthor</code> mostra o nome acima da primeira bolha do grupo — útil em conversas
          com várias pessoas.
        </P>
        <Demo id="chat-message/show-author" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'children',
              type: 'ReactNode',
              description: 'Conteúdo da bolha. Vazio = só anexos.',
            },
            {
              name: 'own',
              type: 'boolean',
              default: 'false',
              description: 'Mensagem do usuário atual (direita, bolha azul).',
            },
            { name: 'author', type: 'ChatUser', description: 'Autor: avatar e nome.' },
            {
              name: 'showAuthor',
              type: 'boolean',
              default: 'false',
              description:
                'Mostra o nome do autor no início do grupo (só para mensagens de outros).',
            },
            {
              name: 'showAvatar',
              type: 'boolean',
              default: 'true',
              description: 'Mostra o avatar (só na última mensagem do grupo).',
            },
            {
              name: 'createdAt',
              type: 'Date | string | number',
              description: 'Horário exibido como “14:32”.',
            },
            {
              name: 'status',
              type: "'sending' | 'sent' | 'delivered' | 'read' | 'error'",
              description: 'Status de envio (apenas own).',
            },
            {
              name: 'attachments',
              type: 'ChatAttachment[]',
              description: 'Imagens e arquivos acima da bolha.',
            },
            {
              name: 'position',
              type: "'single' | 'first' | 'middle' | 'last'",
              default: "'single'",
              description: 'Posição dentro de um grupo de mensagens consecutivas.',
            },
            {
              name: 'system',
              type: 'boolean',
              default: 'false',
              description: 'Mensagem de sistema centralizada.',
            },
          ]}
        />
        <P>
          Aceita também props de <code>Box</code> e atributos de <code>div</code>.
        </P>
      </Section>
    </DocPage>
  );
}
