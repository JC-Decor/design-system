import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function ChatThreadPage() {
  return (
    <DocPage
      kicker="Chat"
      title="ChatThread"
      source="chat"
      sourcePath="packages/ui/src/chat/ChatThread.tsx"
      description="Lista rolável de mensagens: separadores de data, agrupamento automático, indicador de digitação e rolagem para a última mensagem."
      importCode={`import { ChatThread } from '@jcdecor/ui/chat';`}
    >
      <Section title="Uso">
        <P>
          Passe as mensagens, o <code>currentUserId</code> e os <code>users</code> (array ou mapa
          por id). Separadores “Ontem”/“Hoje” são inseridos automaticamente e mensagens do mesmo
          autor em até 5 minutos são agrupadas. O thread ocupa 100% da altura do pai.
        </P>
        <Demo id="chat-thread/usage" />
      </Section>

      <Section title="Digitando">
        <P>
          <code>typing</code> recebe os nomes de quem está digitando. Se o usuário estiver perto do
          fim, o thread rola automaticamente quando chegam mensagens ou o indicador aparece;
          mensagens próprias sempre rolam.
        </P>
        <Demo id="chat-thread/typing" />
      </Section>

      <Section title="Conversa em grupo">
        <P>
          <code>showAuthors</code> exibe o nome no início de cada grupo de mensagens — use em
          conversas com mais de duas pessoas.
        </P>
        <Demo id="chat-thread/group" />
      </Section>

      <Section title="Vazio">
        <Demo id="chat-thread/empty" />
      </Section>

      <Section title="Conteúdo customizado">
        <P>
          <code>renderContent</code> controla o conteúdo de cada bolha — aqui números de pedido
          viram links.
        </P>
        <Demo id="chat-thread/render-content" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'messages',
              type: 'ChatMessageData[]',
              required: true,
              description: 'Mensagens em ordem cronológica.',
            },
            {
              name: 'currentUserId',
              type: 'string',
              required: true,
              description: 'Id do usuário atual — suas mensagens ficam à direita.',
            },
            {
              name: 'users',
              type: 'ChatUser[] | Record<string, ChatUser>',
              default: '[]',
              description: 'Autores, ligados por authorId.',
            },
            {
              name: 'typing',
              type: 'string[]',
              description: 'Nomes de quem está digitando agora.',
            },
            {
              name: 'showAuthors',
              type: 'boolean',
              default: 'false',
              description: 'Nome do autor no início de cada grupo.',
            },
            {
              name: 'autoScroll',
              type: 'boolean',
              default: 'true',
              description: 'Rola para a última mensagem quando chegam novas (se perto do fim).',
            },
            {
              name: 'groupWindow',
              type: 'number',
              default: '300000',
              description: 'Janela (ms) para agrupar mensagens consecutivas do mesmo autor.',
            },
            {
              name: 'empty',
              type: 'ReactNode',
              description: 'Conteúdo exibido quando não há mensagens.',
            },
            {
              name: 'renderContent',
              type: '(message: ChatMessageData) => ReactNode',
              description: 'Renderização customizada do conteúdo da bolha.',
            },
            {
              name: 'h',
              type: 'MantineStyleProp',
              default: "'100%'",
              description: 'Altura da área rolável.',
            },
          ]}
        />
        <P>
          Demais props são repassadas ao <code>ScrollArea</code> do Mantine.
        </P>
      </Section>
    </DocPage>
  );
}
