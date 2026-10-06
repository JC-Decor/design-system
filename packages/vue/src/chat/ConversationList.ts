import { computed, defineComponent, h, ref, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { Avatar, Badge, Box, Indicator, ScrollArea, TextInput, resolveNode, type BoxProps, type MantineNode } from '@mantine-vue/core';
import { IconSearch } from '@tabler/icons-vue';
import { initialsName, shortTimeLabel } from './utils';
import type { Conversation } from './types';
import { nodeProp } from './node';
import classes from './Chat.module.css';

export interface ConversationListProps extends BoxProps {
  conversations: Conversation[];
  activeId?: string | null;
  /** Exibe campo de busca @default true */
  searchable?: boolean;
  searchPlaceholder?: string;
  /** Conteúdo quando a lista (ou a busca) fica vazia. O slot `#empty` tem prioridade. */
  empty?: MantineNode;
}

export type ConversationListEmits = {
  /** Clique em uma conversa */
  select: (conversation: Conversation) => void;
}

export interface ConversationListSlots {
  /** Conteúdo quando a lista (ou a busca) fica vazia */
  empty?: () => VNodeChild;
  /** Ícone no lugar do avatar com iniciais (ex.: conversas com um assistente) */
  icon?: (props: { conversation: Conversation }) => VNodeChild;
  /** Ações por conversa (ex.: menu renomear/excluir), à direita do item */
  actions?: (props: { conversation: Conversation }) => VNodeChild;
}

/** Lista de conversas com busca, não lidas, presença e última mensagem. */
export const ConversationList = defineComponent({
  name: 'ConversationList',
  props: {
    conversations: { type: Array as PropType<Conversation[]>, required: true },
    activeId: { type: String as PropType<string | null>, default: undefined },
    searchable: { type: Boolean, default: true },
    searchPlaceholder: { type: String, default: 'Buscar conversas' },
    empty: nodeProp,
  },
  emits: {
    select: (_conversation: Conversation) => true,
  },
  setup(props, { emit, slots }) {
    const query = ref('');
    const filtered = computed(() => {
      const q = query.value.trim().toLocaleLowerCase('pt-BR');
      if (!q) return props.conversations;
      return props.conversations.filter(
        (c) => c.name.toLocaleLowerCase('pt-BR').includes(q) || c.lastMessage?.toLocaleLowerCase('pt-BR').includes(q),
      );
    });

    const renderItem = (c: Conversation) => {
      const unread = c.unread ?? 0;
      const active = c.id === props.activeId;
      const button = h(
        'button',
        {
          type: 'button',
          class: classes.conversation,
          'aria-current': active ? 'true' : undefined,
          onClick: () => emit('select', c),
        },
        [
          h(
            Indicator as any,
            { color: 'evergreen', position: 'bottom-end', offset: 5, size: 10, withBorder: true, disabled: !c.online },
            () =>
              slots.icon
                ? h('span', { class: classes.conversationIcon }, slots.icon({ conversation: c }))
                : h(Avatar as any, { src: c.avatar, name: initialsName(c.name), color: c.color ?? 'initials', size: 40 }),
          ),
          h('div', { class: classes.conversationBody }, [
            h('div', { class: classes.conversationTop }, [
              h('span', { class: classes.conversationName }, c.name),
              c.lastMessageAt !== undefined
                ? h('span', { class: classes.conversationTime }, shortTimeLabel(c.lastMessageAt))
                : null,
            ]),
            h('div', { class: classes.conversationBottom }, [
              h('span', { class: classes.conversationPreview }, c.lastMessage),
              unread > 0
                ? h(
                    Badge as any,
                    { size: 'sm', variant: 'filled', circle: unread < 10, 'aria-label': `${c.unread} não lidas` },
                    () => (unread > 99 ? '99+' : String(unread)),
                  )
                : null,
            ]),
            c.tag ? h(Badge as any, { size: 'xs', color: 'obsidian', mt: 6 }, () => c.tag) : null,
          ]),
        ],
      );
      return h(
        'div',
        {
          key: c.id,
          role: 'listitem',
          class: classes.conversationItem,
          'data-active': active || undefined,
          'data-unread': unread > 0 || undefined,
        },
        [button, slots.actions ? h('div', { class: classes.conversationActions }, slots.actions({ conversation: c })) : null],
      );
    };

    return () =>
      h(Box as any, { class: classes.conversations }, () => [
        props.searchable
          ? h('div', { class: classes.conversationSearch }, [
              h(
                TextInput as any,
                {
                  size: 'sm',
                  placeholder: props.searchPlaceholder,
                  modelValue: query.value,
                  'onUpdate:modelValue': (value: string) => (query.value = value),
                  'aria-label': props.searchPlaceholder,
                },
                { leftSection: () => h(IconSearch, { size: 16 }) },
              ),
            ])
          : null,
        h(ScrollArea as any, { style: { flex: 1 }, type: 'auto' }, () =>
          h('div', { role: 'list' }, [
            filtered.value.length === 0
              ? h(Box as any, { p: 'lg', ta: 'center', c: 'var(--ds-text-3)', fz: 'sm' }, () =>
                  slots.empty || props.empty != null ? resolveNode(props.empty, slots.empty) : 'Nenhuma conversa encontrada',
                )
              : null,
            ...filtered.value.map(renderItem),
          ]),
        ),
      ]);
  },
}) as unknown as DefineSetupFnComponent<ConversationListProps, ConversationListEmits, SlotsType<ConversationListSlots>>;
