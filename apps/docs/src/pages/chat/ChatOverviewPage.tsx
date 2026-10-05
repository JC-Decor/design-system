import { Code, Table } from '@mantine/core';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';
import { toVueImport, useFramework } from '../../kit/framework';

const typesCode = `import type { ChatMessageData, ChatUser, Conversation } from '@jcdecor/ui/chat';

const ana: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento JC Decor',
  avatar: 'https://i.pravatar.cc/80?img=47', // opcional: sem avatar, usa iniciais
};

const message: ChatMessageData = {
  id: 'm1',
  authorId: 'ana',                 // casa com ChatUser.id
  text: 'Seu pedido #48213 saiu para entrega!',
  createdAt: new Date(),           // Date | string ISO | timestamp
  status: 'read',                  // 'sending' | 'sent' | 'delivered' | 'read' | 'error'
  attachments: [{ name: 'nota-fiscal.pdf', type: 'file', size: 182_000, url: '/nf.pdf' }],
};

const conversation: Conversation = {
  id: 'carlos',
  name: 'Carlos Pereira',
  lastMessage: 'Qual o prazo de entrega?',
  lastMessageAt: new Date(),
  unread: 2,
  online: true,
  tag: 'Pedido #48213',
};`;

const pieces: [string, string, string][] = [
  [
    'ChatLayout',
    '',
    'Grade responsiva: sidebar + cabeçalho + mensagens + composer. Controla a altura total.',
  ],
  ['ConversationList', 'sidebar', 'Lista de conversas com busca, não lidas, presença e etiqueta.'],
  ['ChatHeader', 'header', 'Avatar com presença, nome, subtítulo, ações e botão voltar no mobile.'],
  [
    'ChatThread',
    'children',
    'Mensagens roláveis com separadores de data, agrupamento, digitação e auto-scroll.',
  ],
  [
    'ChatComposer',
    'composer',
    'Campo de envio: Enter envia, Shift+Enter quebra linha, anexos opcionais.',
  ],
  ['ChatMessage', '', 'A bolha. Usada pelo ChatThread, mas pode ser usada sozinha.'],
  [
    'TypingIndicator',
    '',
    'Pontinhos animados de “digitando…”. Já incluído no ChatThread via typing.',
  ],
];

export default function ChatOverviewPage() {
  const vue = useFramework().framework === 'vue';
  return (
    <DocPage
      kicker="Chat"
      title="Visão geral"
      source="chat"
      sourcePath="packages/ui/src/chat"
      description="Peças para montar atendimento e mensagens em tempo real: lista de conversas, cabeçalho, mensagens agrupadas com status de leitura e campo de envio com anexos."
      importCode={`import { ChatLayout, ConversationList, ChatHeader, ChatThread, ChatComposer } from '@jcdecor/ui/chat';`}
    >
      <Section title="Exemplo completo">
        <P>
          Inbox de atendimento funcionando: selecione uma conversa, envie uma mensagem (ela passa de{' '}
          <em>enviando</em> para <em>lida</em>) e aguarde a resposta do cliente com o indicador de
          digitação. Em telas pequenas o layout mostra a lista ou a conversa, com botão voltar no
          cabeçalho.
        </P>
        <Demo id="chat/full" />
      </Section>

      <Section title="As peças">
        <Table.ScrollContainer minWidth={560} my="md">
          <Table withTableBorder verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Componente</Table.Th>
                <Table.Th>{vue ? 'Slot do ChatLayout' : 'Slot no ChatLayout'}</Table.Th>
                <Table.Th>Função</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {pieces.map(([name, slot, text]) => (
                <Table.Tr key={name}>
                  <Table.Td>
                    <Code fw={600}>{name}</Code>
                  </Table.Td>
                  <Table.Td>
                    {slot ? <Code>{vue ? `#${slot === 'children' ? 'default' : slot}` : slot}</Code> : '—'}
                  </Table.Td>
                  <Table.Td fz="sm">{text}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
        <P>
          Nenhuma peça busca dados: você mantém o estado (mensagens, conversa ativa, quem está
          digitando) e o conecta ao seu backend ou websocket.
        </P>
      </Section>

      <Section title="Chat único">
        <P>
          Sem <code>sidebar</code>, o <code>ChatLayout</code> vira um chat de uma coluna — ideal
          para o widget de atendimento no site.
        </P>
        <Demo id="chat/single" />
      </Section>

      <Section title="Tipos de dados">
        <P>
          Mensagens são dados simples (<code>ChatMessageData</code>) ligados aos autores (
          <code>ChatUser</code>) por <code>authorId</code>. O<code> ChatThread</code> decide sozinho
          o lado de cada bolha comparando <code>authorId</code> com <code>currentUserId</code>.
        </P>
        <CodeBlock code={vue ? toVueImport(typesCode) : typesCode} language="ts" />
        <PropsTable
          rows={[
            {
              name: 'ChatUser',
              type: '{ id; name; avatar?; color? }',
              description:
                'Autor. Sem avatar, mostra as iniciais; color define a cor das iniciais.',
            },
            {
              name: 'ChatMessageData',
              type: '{ id; authorId; text?; createdAt; status?; attachments?; system? }',
              description: 'Mensagem. system = aviso centralizado sem bolha.',
            },
            {
              name: 'ChatAttachment',
              type: "{ name; url?; type?: 'image' | 'file'; size? }",
              description:
                'Anexo. image exibe miniatura; file exibe chip com nome e tamanho (bytes).',
            },
            {
              name: 'ChatMessageStatus',
              type: "'sending' | 'sent' | 'delivered' | 'read' | 'error'",
              description: 'Status de envio, exibido só nas mensagens próprias.',
            },
            {
              name: 'Conversation',
              type: '{ id; name; avatar?; color?; lastMessage?; lastMessageAt?; unread?; online?; tag? }',
              description: 'Item da ConversationList.',
            },
          ]}
        />
      </Section>

      <Section title="Props do ChatLayout">
        <PropsTable
          rows={[
            {
              name: 'children',
              type: 'ReactNode',
              vueName: '#default',
              vueType: 'slot',
              required: true,
              description: 'Área das mensagens — normalmente um <ChatThread />.',
            },
            {
              name: 'sidebar',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #sidebar',
              description: 'Coluna esquerda (ConversationList). Omita para um chat único.',
            },
            {
              name: 'header',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #header',
              description: 'Normalmente um <ChatHeader />.',
            },
            {
              name: 'composer',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #composer',
              description: 'Normalmente um <ChatComposer />.',
            },
            {
              name: 'height',
              type: 'number | string',
              default: '600',
              description: 'Altura total do layout.',
            },
            {
              name: 'sidebarWidth',
              type: 'number | string',
              default: '320',
              description: 'Largura da coluna da lista.',
            },
            {
              name: 'mobileView',
              type: "'list' | 'thread'",
              default: "'thread'",
              description: 'Em telas pequenas (até 48em) mostra só a lista ou só a conversa.',
            },
          ]}
        />
        <P>
          Aceita também props de <code>Box</code>.
        </P>
      </Section>

      <Section title="Utilitários">
        <P>
          Também exportados: <code>buildThread(messages, groupWindowMs)</code> (agrupa e insere
          separadores — o mesmo usado pelo ChatThread), <code>dayLabel(date)</code> (“Hoje”,
          “Ontem”, “segunda-feira”…), <code>shortTimeLabel(date)</code> e{' '}
          <code>formatBytes(bytes)</code>.
        </P>
      </Section>
    </DocPage>
  );
}
