<script lang="ts">
export const meta = { background: 'page' };
</script>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  GridCol,
  Group,
  SegmentedControl,
  Stack,
  Text,
  Timeline,
  TimelineItem,
  formatCurrency,
} from '@jcdecor/vue';
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
import { IconCheck, IconMail, IconMapPin, IconPackage, IconPhone, IconTruck } from '@tabler/icons-vue';

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);
const uid = () => Math.random().toString(36).slice(2);

const agent: ChatUser = {
  id: 'ana',
  name: 'Ana · Atendimento JC Decor',
  avatar: 'https://i.pravatar.cc/80?img=47',
};

interface Customer extends ChatUser {
  email: string;
  phone: string;
  city: string;
  online?: boolean;
  order?: { id: string; total: number; items: string; step: number };
}

const customers: Customer[] = [
  {
    id: 'carlos',
    name: 'Carlos Pereira',
    online: true,
    email: 'carlos.pereira@email.com',
    phone: '(19) 99812-4410',
    city: 'Campinas, SP',
    order: {
      id: '48213',
      total: 1618.2,
      items: '18 m² de piso vinílico Carvalho Natural',
      step: 2,
    },
  },
  {
    id: 'marina',
    name: 'Marina Souza',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: true,
    email: 'marina.souza@email.com',
    phone: '(11) 98455-1022',
    city: 'São Paulo, SP',
  },
  {
    id: 'juliana',
    name: 'Juliana Lima',
    avatar: 'https://i.pravatar.cc/80?img=45',
    email: 'ju.lima@email.com',
    phone: '(21) 97701-3398',
    city: 'Niterói, RJ',
    order: { id: '48190', total: 659.8, items: '2 cortinas blackout Cinza', step: 1 },
  },
  {
    id: 'roberto',
    name: 'Roberto Alves',
    email: 'roberto.alves@email.com',
    phone: '(31) 99620-7781',
    city: 'Belo Horizonte, MG',
    order: { id: '47955', total: 2995.5, items: '50 m² de grama sintética 25 mm', step: 3 },
  },
];

const initialMessages: Record<string, ChatMessageData[]> = {
  carlos: [
    {
      id: 'c1',
      authorId: 'carlos',
      text: 'Bom dia! Qual o prazo de entrega do pedido #48213?',
      createdAt: minutesAgo(9),
    },
    {
      id: 'c2',
      authorId: 'carlos',
      text: 'Preciso receber até sexta, o instalador já está agendado.',
      createdAt: minutesAgo(8),
    },
  ],
  marina: [
    {
      id: 'm1',
      authorId: 'marina',
      text: 'Oi! Queria um orçamento de piso vinílico para a sala de 18 m².',
      createdAt: minutesAgo(40),
    },
    {
      id: 'm2',
      authorId: 'ana',
      text: 'Olá, Marina! Em régua ou em manta?',
      createdAt: minutesAgo(36),
      status: 'read',
    },
    { id: 'm3', authorId: 'marina', text: 'Em régua, madeira clara.', createdAt: minutesAgo(30) },
  ],
  juliana: [
    {
      id: 'j1',
      authorId: 'juliana',
      text: 'As cortinas do pedido #48190 vêm com trilho?',
      createdAt: minutesAgo(130),
    },
    {
      id: 'j2',
      authorId: 'ana',
      text: 'Vêm sim, Juliana! Trilho suíço de 2,80 m incluso.',
      createdAt: minutesAgo(125),
      status: 'read',
    },
  ],
  roberto: [
    {
      id: 'r1',
      authorId: 'roberto',
      text: 'Grama instalada, ficou ótima. Obrigado!',
      createdAt: minutesAgo(60 * 27),
    },
    {
      id: 'r2',
      authorId: 'ana',
      text: 'Que bom, Roberto! Conta com a gente.',
      createdAt: minutesAgo(60 * 27 - 4),
      status: 'read',
    },
  ],
};

const steps = ['Pedido confirmado', 'Em separação', 'Em transporte', 'Entregue'];
const stepIcons = [IconCheck, IconCheck, IconTruck, IconPackage];

const filter = ref('todas');
const activeId = ref('carlos');
const messages = ref(initialMessages);
const unread = ref<Record<string, number>>({ carlos: 2, marina: 1 });
const typing = ref(false);
const mobileView = ref<'list' | 'thread'>('list');

const timers: number[] = [];
onBeforeUnmount(() => timers.forEach(clearTimeout));

const customer = computed(() => customers.find((c) => c.id === activeId.value)!);
const firstName = computed(() => customer.value.name.split(' ')[0]);

const conversations = computed<Conversation[]>(() =>
  customers
    .filter((c) =>
      filter.value === 'nao-lidas' ? (unread.value[c.id] ?? 0) > 0 : filter.value === 'pedidos' ? !!c.order : true,
    )
    .map((c) => {
      const thread = messages.value[c.id];
      const last = thread[thread.length - 1];
      return {
        id: c.id,
        name: c.name,
        avatar: c.avatar,
        online: c.online,
        unread: unread.value[c.id],
        tag: c.order ? `Pedido #${c.order.id}` : 'Orçamento',
        lastMessage: last.authorId === agent.id ? `Você: ${last.text}` : last.text,
        lastMessageAt: last.createdAt,
      };
    }),
);

function select(conversation: Conversation) {
  activeId.value = conversation.id;
  unread.value[conversation.id] = 0;
  typing.value = false;
  mobileView.value = 'thread';
}

function handleSend({ text }: ChatComposerSendPayload) {
  const conversationId = activeId.value;
  const thread = messages.value[conversationId];
  const id = uid();
  thread.push({ id, authorId: agent.id, text, createdAt: new Date(), status: 'sending' });
  timers.push(
    window.setTimeout(() => {
      const message = thread.find((m) => m.id === id);
      if (message) message.status = 'read';
    }, 900),
    window.setTimeout(() => (typing.value = true), 1200),
    window.setTimeout(() => {
      typing.value = false;
      thread.push({
        id: uid(),
        authorId: conversationId,
        text: 'Perfeito, muito obrigado pela ajuda!',
        createdAt: new Date(),
      });
    }, 3000),
  );
}
</script>

<template>
  <Grid type="container" :breakpoints="{ xs: '480px', sm: '640px', md: '860px', lg: '1080px', xl: '1280px' }" gap="md">
    <GridCol :span="{ base: 12, lg: 8.5 }">
      <ChatLayout :height="640" :sidebar-width="300" :mobile-view="mobileView">
        <template #sidebar>
          <Box h="100%" style="display: flex; flex-direction: column">
            <Box p="sm" :pb="0">
              <SegmentedControl
                v-model="filter"
                full-width
                size="xs"
                :data="[
                  { value: 'todas', label: 'Todas' },
                  { value: 'nao-lidas', label: 'Não lidas' },
                  { value: 'pedidos', label: 'Pedidos' },
                ]"
              />
            </Box>
            <Box style="flex: 1; min-height: 0">
              <ConversationList
                :conversations="conversations"
                :active-id="activeId"
                empty="Nenhuma conversa neste filtro"
                @select="select"
              />
            </Box>
          </Box>
        </template>

        <template #header>
          <ChatHeader
            :title="customer.name"
            :subtitle="typing ? 'digitando…' : customer.online ? 'Online agora' : 'Offline'"
            :avatar="customer.avatar"
            :avatar-name="customer.name"
            :online="customer.online"
            @back="mobileView = 'list'"
          >
            <template #actions>
              <Button size="xs" variant="light">
                <template #leftSection><IconCheck :size="14" /></template>
                Resolver
              </Button>
            </template>
          </ChatHeader>
        </template>

        <ChatThread
          :key="activeId"
          :messages="messages[activeId]"
          :current-user-id="agent.id"
          :users="[agent, ...customers]"
          :typing="typing ? [firstName] : []"
        />

        <template #composer>
          <ChatComposer allow-attachments :placeholder="`Responder ${firstName}…`" @send="handleSend" />
        </template>
      </ChatLayout>
    </GridCol>

    <GridCol :span="{ base: 12, sm: 6, lg: 3.5 }">
      <Card h="100%">
        <Stack align="center" :gap="6">
          <Avatar :src="customer.avatar" :name="customer.name" color="initials" :size="64" />
          <Text :fw="600">{{ customer.name }}</Text>
          <Badge variant="light" :color="customer.order ? 'horizon' : 'evergreen'">
            {{ customer.order ? 'Cliente' : 'Lead' }}
          </Badge>
        </Stack>
        <Stack :gap="8" mt="md" fz="sm">
          <Group gap="xs" wrap="nowrap">
            <IconMail :size="16" />
            <Text fz="sm" truncate>{{ customer.email }}</Text>
          </Group>
          <Group gap="xs">
            <IconPhone :size="16" />
            <Text fz="sm">{{ customer.phone }}</Text>
          </Group>
          <Group gap="xs">
            <IconMapPin :size="16" />
            <Text fz="sm">{{ customer.city }}</Text>
          </Group>
        </Stack>
        <Divider my="md" />
        <template v-if="customer.order">
          <Group justify="space-between" :mb="4">
            <Text :fw="600" fz="sm">Pedido #{{ customer.order.id }}</Text>
            <Text :fw="600" fz="sm">{{ formatCurrency(customer.order.total) }}</Text>
          </Group>
          <Text fz="xs" c="var(--ds-text-3)" mb="md">{{ customer.order.items }}</Text>
          <Timeline :active="customer.order.step" :bullet-size="20" :line-width="2">
            <TimelineItem v-for="(step, index) in steps" :key="step">
              <template #bullet><component :is="stepIcons[index]" :size="12" /></template>
              <template #title><Text fz="sm">{{ step }}</Text></template>
            </TimelineItem>
          </Timeline>
          <Button full-width variant="default" mt="md" size="xs">Ver pedido</Button>
        </template>
        <Text v-else fz="sm" c="var(--ds-text-2)">
          Sem pedidos. Envie um orçamento para converter este lead.
        </Text>
      </Card>
    </GridCol>
  </Grid>
</template>
