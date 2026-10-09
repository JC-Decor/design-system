import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

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
          <OnlyFor framework="react">
            <code>renderContent</code> controla o conteúdo de cada bolha — aqui números de pedido
            viram links.
          </OnlyFor>
          <OnlyFor framework="vue">
            O slot <code>#content="{'{ message }'}"</code> controla o conteúdo de cada bolha — aqui
            números de pedido viram links. Também existe a prop <code>renderContent</code> (função
            que devolve VNodes); o slot tem prioridade.
          </OnlyFor>
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
              vueType: 'MantineNode | slot #empty',
              description: 'Conteúdo exibido quando não há mensagens.',
            },
            {
              name: 'renderContent',
              type: '(message: ChatMessageData) => ReactNode',
              vueType: '(message: ChatMessageData) => VNodeChild',
              description: 'Renderização customizada do conteúdo da bolha.',
              vueDescription: 'Renderização customizada do conteúdo da bolha (prefira o slot #content).',
            },
            {
              name: '#content',
              type: 'slot',
              only: 'vue',
              description: 'Conteúdo customizado de cada bolha; recebe { message }. Tem prioridade sobre renderContent.',
            },
            {
              name: 'renderAvatar',
              type: '(message: ChatMessageData) => ReactNode',
              only: 'react',
              description: 'Avatar customizado por mensagem (ex.: ícone do assistente).',
            },
            {
              name: '#avatar',
              type: 'slot',
              only: 'vue',
              description: 'Avatar customizado por mensagem; recebe { message }.',
            },
            {
              name: 'footer',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #footer',
              description: 'Conteúdo ao fim da conversa, antes do "digitando" (ex.: status de uma resposta em andamento).',
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
          Demais props são repassadas ao <code>ScrollArea</code> do Mantine. Use <code>variant: 'plain'</code> em uma
          mensagem (<code>ChatMessageData</code>) para exibi-la sem bolha e em largura total — o formato indicado para
          respostas de assistente com markdown, tabelas e código.
        </P>
      </Section>
    </DocPage>
  );
}
