import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  SegmentedControl,
  Stack,
  Text,
  Timeline,
  formatCurrency,
} from '@jcdecor/ui';
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
} from '@jcdecor/ui/chat';
import {
  IconCheck,
  IconMail,
  IconMapPin,
  IconPackage,
  IconPhone,
  IconTruck,
} from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

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

export default function Demo() {
  const [filter, setFilter] = useState('todas');
  const [activeId, setActiveId] = useState('carlos');
  const [messages, setMessages] = useState(initialMessages);
  const [unread, setUnread] = useState<Record<string, number>>({ carlos: 2, marina: 1 });
  const [typing, setTyping] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'thread'>('list');
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const customer = customers.find((c) => c.id === activeId)!;

  const conversations: Conversation[] = customers
    .filter((c) =>
      filter === 'nao-lidas' ? (unread[c.id] ?? 0) > 0 : filter === 'pedidos' ? !!c.order : true,
    )
    .map((c) => {
      const last = messages[c.id][messages[c.id].length - 1];
      return {
        id: c.id,
        name: c.name,
        avatar: c.avatar,
        online: c.online,
        unread: unread[c.id],
        tag: c.order ? `Pedido #${c.order.id}` : 'Orçamento',
        lastMessage: last.authorId === agent.id ? `Você: ${last.text}` : last.text,
        lastMessageAt: last.createdAt,
      };
    });

  const update = (conversationId: string, fn: (list: ChatMessageData[]) => ChatMessageData[]) =>
    setMessages((all) => ({ ...all, [conversationId]: fn(all[conversationId]) }));

  const handleSend = ({ text }: ChatComposerSendPayload) => {
    const conversationId = activeId;
    const id = uid();
    update(conversationId, (list) => [
      ...list,
      { id, authorId: agent.id, text, createdAt: new Date(), status: 'sending' },
    ]);
    timers.current.push(
      window.setTimeout(
        () =>
          update(conversationId, (list) =>
            list.map((m) => (m.id === id ? { ...m, status: 'read' } : m)),
          ),
        900,
      ),
      window.setTimeout(() => setTyping(true), 1200),
      window.setTimeout(() => {
        setTyping(false);
        update(conversationId, (list) => [
          ...list,
          {
            id: uid(),
            authorId: conversationId,
            text: 'Perfeito, muito obrigado pela ajuda!',
            createdAt: new Date(),
          },
        ]);
      }, 3000),
    );
  };

  return (
    <Grid
      type="container"
      breakpoints={{ xs: '480px', sm: '640px', md: '860px', lg: '1080px', xl: '1280px' }}
      gap="md"
    >
      <Grid.Col span={{ base: 12, lg: 8.5 }}>
        <ChatLayout
          height={640}
          sidebarWidth={300}
          mobileView={mobileView}
          sidebar={
            <Box h="100%" style={{ display: 'flex', flexDirection: 'column' }}>
              <Box p="sm" pb={0}>
                <SegmentedControl
                  fullWidth
                  size="xs"
                  value={filter}
                  onChange={setFilter}
                  data={[
                    { value: 'todas', label: 'Todas' },
                    { value: 'nao-lidas', label: 'Não lidas' },
                    { value: 'pedidos', label: 'Pedidos' },
                  ]}
                />
              </Box>
              <Box style={{ flex: 1, minHeight: 0 }}>
                <ConversationList
                  conversations={conversations}
                  activeId={activeId}
                  empty="Nenhuma conversa neste filtro"
                  onSelect={(c) => {
                    setActiveId(c.id);
                    setUnread((u) => ({ ...u, [c.id]: 0 }));
                    setTyping(false);
                    setMobileView('thread');
                  }}
                />
              </Box>
            </Box>
          }
          header={
            <ChatHeader
              title={customer.name}
              subtitle={typing ? 'digitando…' : customer.online ? 'Online agora' : 'Offline'}
              avatar={customer.avatar}
              avatarName={customer.name}
              online={customer.online}
              onBack={() => setMobileView('list')}
              actions={
                <Button size="xs" variant="light" leftSection={<IconCheck size={14} />}>
                  Resolver
                </Button>
              }
            />
          }
          composer={
            <ChatComposer
              allowAttachments
              onSend={handleSend}
              placeholder={`Responder ${customer.name.split(' ')[0]}…`}
            />
          }
        >
          <ChatThread
            key={activeId}
            messages={messages[activeId]}
            currentUserId={agent.id}
            users={[agent, ...customers]}
            typing={typing ? [customer.name.split(' ')[0]] : []}
          />
        </ChatLayout>
      </Grid.Col>

      <Grid.Col span={{ base: 12, sm: 6, lg: 3.5 }}>
        <Card h="100%">
          <Stack align="center" gap={6}>
            <Avatar src={customer.avatar} name={customer.name} color="initials" size={64} />
            <Text fw={600}>{customer.name}</Text>
            <Badge variant="light" color={customer.order ? 'horizon' : 'evergreen'}>
              {customer.order ? 'Cliente' : 'Lead'}
            </Badge>
          </Stack>
          <Stack gap={8} mt="md" fz="sm">
            <Group gap="xs" wrap="nowrap">
              <IconMail size={16} />
              <Text fz="sm" truncate>
                {customer.email}
              </Text>
            </Group>
            <Group gap="xs">
              <IconPhone size={16} />
              <Text fz="sm">{customer.phone}</Text>
            </Group>
            <Group gap="xs">
              <IconMapPin size={16} />
              <Text fz="sm">{customer.city}</Text>
            </Group>
          </Stack>
          <Divider my="md" />
          {customer.order ? (
            <>
              <Group justify="space-between" mb={4}>
                <Text fw={600} fz="sm">
                  Pedido #{customer.order.id}
                </Text>
                <Text fw={600} fz="sm">
                  {formatCurrency(customer.order.total)}
                </Text>
              </Group>
              <Text fz="xs" c="var(--ds-text-3)" mb="md">
                {customer.order.items}
              </Text>
              <Timeline active={customer.order.step} bulletSize={20} lineWidth={2}>
                {steps.map((step, index) => (
                  <Timeline.Item
                    key={step}
                    bullet={
                      index === 2 ? (
                        <IconTruck size={12} />
                      ) : index === 3 ? (
                        <IconPackage size={12} />
                      ) : (
                        <IconCheck size={12} />
                      )
                    }
                    title={<Text fz="sm">{step}</Text>}
                  />
                ))}
              </Timeline>
              <Button fullWidth variant="default" mt="md" size="xs">
                Ver pedido
              </Button>
            </>
          ) : (
            <Text fz="sm" c="var(--ds-text-2)">
              Sem pedidos. Envie um orçamento para converter este lead.
            </Text>
          )}
        </Card>
      </Grid.Col>
    </Grid>
  );
}
