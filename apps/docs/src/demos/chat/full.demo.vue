<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import { ActionIcon, Group, Tooltip } from '@jcdecor/vue';
import {
  ChatComposer,
  ChatHeader,
  ChatLayout,
  ChatThread,
  ConversationList,
  type ChatComposerSendPayload,
  type ChatMessageData,
  type ChatUser,
  type Conversation,
} from '@jcdecor/vue/chat';
import { IconDotsVertical, IconPhone } from '@tabler/icons-vue';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);
const uid = () => Math.random().toString(36).slice(2);

const me: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento JC Decor',
  avatar: 'https://i.pravatar.cc/80?img=47',
};

const customers: (ChatUser & { online?: boolean; tag?: string })[] = [
  {
    id: 'marina',
    name: 'Marina Souza',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: true,
    tag: 'Orçamento',
  },
  { id: 'carlos', name: 'Carlos Pereira', online: true, tag: 'Pedido #48213' },
  { id: 'juliana', name: 'Juliana Lima', avatar: 'https://i.pravatar.cc/80?img=45' },
  { id: 'roberto', name: 'Roberto Alves' },
];

const initialMessages: Record<string, ChatMessageData[]> = {
  marina: [
    {
      id: 'm1',
      authorId: 'marina',
      text: 'Oi! Queria um orçamento de piso vinílico para a sala.',
      createdAt: minutesAgo(42),
    },
    {
      id: 'm2',
      authorId: 'marina',
      text: 'São uns 18 m², mais ou menos.',
      createdAt: minutesAgo(41),
    },
    {
      id: 'm3',
      authorId: 'ana',
      text: 'Olá, Marina! Claro. Você prefere o vinílico em régua ou em manta?',
      createdAt: minutesAgo(38),
      status: 'read',
    },
    {
      id: 'm4',
      authorId: 'marina',
      text: 'Em régua, num tom de madeira clara.',
      createdAt: minutesAgo(35),
    },
    {
      id: 'm5',
      authorId: 'marina',
      createdAt: minutesAgo(34),
      attachments: [
        { name: 'sala.jpg', type: 'image', url: 'https://picsum.photos/seed/sala/600/400' },
      ],
    },
  ],
  carlos: [
    {
      id: 'c1',
      authorId: 'carlos',
      text: 'Bom dia, qual o prazo de entrega do pedido #48213?',
      createdAt: minutesAgo(15),
    },
    { id: 'c2', authorId: 'carlos', text: 'Moro em Campinas.', createdAt: minutesAgo(14) },
  ],
  juliana: [
    {
      id: 'j1',
      authorId: 'juliana',
      text: 'Vocês fazem cortina sob medida?',
      createdAt: minutesAgo(60 * 3),
    },
    {
      id: 'j2',
      authorId: 'ana',
      text: 'Fazemos sim! Me passa a largura e a altura da janela?',
      createdAt: minutesAgo(60 * 3 - 5),
      status: 'read',
    },
    {
      id: 'j3',
      authorId: 'juliana',
      text: 'Largura 2,40 m e altura 2,60 m.',
      createdAt: minutesAgo(60 * 2),
    },
  ],
  roberto: [
    {
      id: 'r1',
      authorId: 'roberto',
      text: 'Obrigado pela ajuda com a grama sintética!',
      createdAt: minutesAgo(60 * 26),
    },
    {
      id: 'r2',
      authorId: 'ana',
      text: 'Imagina, Roberto! Qualquer coisa é só chamar.',
      createdAt: minutesAgo(60 * 26 - 3),
      status: 'read',
    },
  ],
};

const replies = [
  'Perfeito, obrigada!',
  'E vocês fazem a instalação também?',
  'Consigo pagar no Pix com desconto?',
  'Ótimo, fico no aguardo.',
];

const activeId = ref('marina');
const messages = ref(initialMessages);
const unread = ref<Record<string, number>>({ carlos: 2, juliana: 1 });
const typingIn = ref<string | null>(null);
const mobileView = ref<'list' | 'thread'>('list');
let replyIndex = 0;

const timers: number[] = [];
const later = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
onBeforeUnmount(() => timers.forEach(clearTimeout));

const customer = computed(() => customers.find((c) => c.id === activeId.value)!);
const firstName = computed(() => customer.value.name.split(' ')[0]);

const conversations = computed<Conversation[]>(() =>
  customers.map((c) => {
    const thread = messages.value[c.id];
    const last = thread[thread.length - 1];
    const preview = last.text ?? 'Imagem';
    return {
      id: c.id,
      name: c.name,
      avatar: c.avatar,
      online: c.online,
      tag: c.tag,
      unread: unread.value[c.id],
      lastMessage:
        typingIn.value === c.id ? 'digitando…' : last.authorId === me.id ? `Você: ${preview}` : preview,
      lastMessageAt: last.createdAt,
    };
  }),
);

function select(conversation: Conversation) {
  activeId.value = conversation.id;
  unread.value[conversation.id] = 0;
  mobileView.value = 'thread';
}

function handleSend({ text, files }: ChatComposerSendPayload) {
  const conversationId = activeId.value;
  const thread = messages.value[conversationId];
  const id = uid();
  thread.push({
    id,
    authorId: me.id,
    text,
    createdAt: new Date(),
    status: 'sending',
    attachments: files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type.startsWith('image/') ? 'image' : 'file',
      url: URL.createObjectURL(file),
    })),
  });

  later(900, () => {
    const message = thread.find((m) => m.id === id);
    if (message) message.status = 'read';
  });
  later(1300, () => (typingIn.value = conversationId));
  later(3200, () => {
    typingIn.value = null;
    thread.push({
      id: uid(),
      authorId: conversationId,
      text: replies[replyIndex++ % replies.length],
      createdAt: new Date(),
    });
    if (activeId.value !== conversationId) {
      unread.value[conversationId] = (unread.value[conversationId] ?? 0) + 1;
    }
  });
}
</script>

<template>
  <ChatLayout :height="600" :mobile-view="mobileView">
    <template #sidebar>
      <ConversationList :conversations="conversations" :active-id="activeId" @select="select" />
    </template>

    <template #header>
      <ChatHeader
        :title="customer.name"
        :subtitle="typingIn === activeId ? 'digitando…' : customer.online ? 'Online agora' : 'Visto por último hoje'"
        :avatar="customer.avatar"
        :avatar-name="customer.name"
        :online="customer.online"
        @back="mobileView = 'list'"
      >
        <template #actions>
          <Group :gap="4">
            <Tooltip label="Ligar">
              <ActionIcon variant="subtle" size="lg" aria-label="Ligar">
                <IconPhone :size="20" />
              </ActionIcon>
            </Tooltip>
            <ActionIcon variant="subtle" size="lg" aria-label="Mais opções">
              <IconDotsVertical :size="20" />
            </ActionIcon>
          </Group>
        </template>
      </ChatHeader>
    </template>

    <ChatThread
      :key="activeId"
      :messages="messages[activeId]"
      :current-user-id="me.id"
      :users="[me, ...customers]"
      :typing="typingIn === activeId ? [firstName] : []"
    />

    <template #composer>
      <ChatComposer
        allow-attachments
        accept="image/*,.pdf"
        :placeholder="`Responder ${firstName}…`"
        @send="handleSend"
      />
    </template>
  </ChatLayout>
</template>
