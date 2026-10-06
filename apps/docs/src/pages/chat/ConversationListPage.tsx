import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function ConversationListPage() {
  return (
    <DocPage
      kicker="Chat"
      title="ConversationList"
      source="chat"
      sourcePath="packages/ui/src/chat/ConversationList.tsx"
      description="Lista de conversas da inbox: busca, contador de não lidas, presença online, horário da última mensagem e etiqueta."
      importCode={`import { ConversationList } from '@jcdecor/ui/chat';`}
    >
      <Section title="Uso">
        <P>
          Clique para selecionar — a conversa ativa recebe destaque e as não lidas são zeradas. A
          busca filtra por nome e última mensagem. Horários seguem o padrão pt-BR: “14:32” hoje,
          “Ontem” e “12/09” para datas antigas. A lista ocupa 100% da altura do pai.
        </P>
        <Demo id="conversation-list/usage" />
      </Section>

      <Section title="Sem busca e vazia">
        <Demo id="conversation-list/empty" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            {
              name: 'conversations',
              type: 'Conversation[]',
              required: true,
              description: 'Itens da lista.',
            },
            { name: 'activeId', type: 'string | null', description: 'Id da conversa selecionada.' },
            {
              name: 'onSelect',
              type: '(conversation: Conversation) => void',
              vueName: '@select',
              description: 'Chamado ao clicar em uma conversa.',
              vueDescription: 'Emitido ao clicar em uma conversa.',
            },
            {
              name: 'searchable',
              type: 'boolean',
              default: 'true',
              description: 'Exibe o campo de busca.',
            },
            {
              name: 'searchPlaceholder',
              type: 'string',
              default: "'Buscar conversas'",
              description: 'Placeholder da busca.',
            },
            {
              name: 'empty',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #empty',
              default: "'Nenhuma conversa encontrada'",
              description: 'Conteúdo quando a lista (ou a busca) está vazia.',
            },
            {
              name: 'renderIcon',
              type: '(conversation: Conversation) => ReactNode',
              vueType: 'slot #icon="{ conversation }"',
              description: 'Ícone no lugar do avatar com iniciais (ex.: conversas com um assistente).',
            },
            {
              name: 'renderActions',
              type: '(conversation: Conversation) => ReactNode',
              vueType: 'slot #actions="{ conversation }"',
              description: 'Ações por conversa (ex.: menu renomear/excluir), à direita do item; clicar nelas não seleciona a conversa.',
            },
          ]}
        />
        <P>
          Cada <code>Conversation</code>: <code>id</code>, <code>name</code>, <code>avatar?</code>,{' '}
          <code>color?</code>, <code>lastMessage?</code>, <code>lastMessageAt?</code>,{' '}
          <code>unread?</code> (99+ acima de 99), <code>online?</code> e <code>tag?</code>.
        </P>
      </Section>
    </DocPage>
  );
}
