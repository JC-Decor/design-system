import {
  computed,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  watch,
  type DefineSetupFnComponent,
  type PropType,
  type SlotsType,
  type VNodeChild,
} from 'vue';
import { Box, ScrollArea, type MantineNode, type ScrollAreaProps } from '@mantine-vue/core';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { buildThread } from './utils';
import type { ChatMessageData, ChatUser } from './types';
import { nodeProp } from './node';
import classes from './Chat.module.css';

export interface ChatThreadProps extends ScrollAreaProps {
  messages: ChatMessageData[];
  /** Id do usuário atual — suas mensagens ficam à direita */
  currentUserId: string;
  users?: ChatUser[] | Record<string, ChatUser>;
  /** Nomes de quem está digitando agora */
  typing?: string[];
  /** Mostra nome do autor no início de cada grupo (conversas em grupo) */
  showAuthors?: boolean;
  /** Rola para a última mensagem quando chegam novas (se o usuário estiver perto do fim) @default true */
  autoScroll?: boolean;
  /** Janela (ms) para agrupar mensagens consecutivas do mesmo autor @default 300000 */
  groupWindow?: number;
  /** Conteúdo exibido quando não há mensagens. O slot `#empty` tem prioridade. */
  empty?: MantineNode;
  /** Renderização customizada do conteúdo da bolha. O slot `#content="{ message }"` tem prioridade. */
  renderContent?: (message: ChatMessageData) => VNodeChild;
  /** Altura da área rolável @default '100%' */
  h?: ScrollAreaProps['h'];
}

export interface ChatThreadSlots {
  /** Conteúdo exibido quando não há mensagens */
  empty?: () => VNodeChild;
  /** Conteúdo customizado da bolha de cada mensagem */
  content?: (props: { message: ChatMessageData }) => VNodeChild;
}

/** Distância (px) do fim abaixo da qual o usuário é considerado "no fim" da conversa. */
const NEAR_BOTTOM = 80;

/**
 * Lista rolável de mensagens com separadores de data, agrupamento e auto-scroll.
 * Atributos e props do ScrollArea (`type`, `scrollbarSize`…) vão para o ScrollArea raiz.
 */
export const ChatThread = defineComponent({
  name: 'ChatThread',
  props: {
    messages: { type: Array as PropType<ChatMessageData[]>, required: true },
    currentUserId: { type: String, required: true },
    users: { type: [Array, Object] as PropType<ChatUser[] | Record<string, ChatUser>>, default: () => [] },
    typing: { type: Array as PropType<string[]>, default: undefined },
    showAuthors: { type: Boolean, default: false },
    autoScroll: { type: Boolean, default: true },
    groupWindow: { type: Number, default: undefined },
    empty: nodeProp,
    renderContent: { type: Function as PropType<(message: ChatMessageData) => VNodeChild>, default: undefined },
    h: { type: [String, Number] as PropType<ScrollAreaProps['h']>, default: '100%' },
  },
  setup(props, { slots }) {
    let viewport: HTMLDivElement | null = null;
    let content: HTMLElement | null = null;
    let nearBottom = true;
    let mounted = false;
    let observer: ResizeObserver | null = null;

    const userMap = computed<Record<string, ChatUser>>(() =>
      Array.isArray(props.users) ? Object.fromEntries(props.users.map((u) => [u.id, u])) : props.users,
    );
    const items = computed(() => buildThread(props.messages, props.groupWindow));

    function scrollToEnd() {
      const el = viewport;
      if (!el || !props.autoScroll) return;
      const lastMessage = props.messages[props.messages.length - 1];
      if (nearBottom || lastMessage?.authorId === props.currentUserId) {
        // Primeira renderização: pula direto para o fim; depois, rolagem suave.
        el.scrollTo({ top: el.scrollHeight, behavior: mounted ? 'smooth' : 'auto' });
      }
      mounted = true;
    }

    // Conteúdo que cresce depois (imagens, fontes) mantém o fim visível se o usuário já estava lá.
    function observeContent() {
      observer?.disconnect();
      observer = null;
      const el = viewport;
      if (!el || !content || !props.autoScroll || typeof ResizeObserver === 'undefined') return;
      observer = new ResizeObserver(() => {
        if (nearBottom) el.scrollTo({ top: el.scrollHeight });
      });
      observer.observe(content);
    }

    onMounted(() => {
      scrollToEnd();
      observeContent();
    });

    watch(
      () => [
        props.messages.length,
        props.messages[props.messages.length - 1]?.id,
        props.typing?.length,
        props.autoScroll,
        props.currentUserId,
      ],
      scrollToEnd,
      { flush: 'post' },
    );
    watch(() => props.autoScroll, observeContent, { flush: 'post' });

    onBeforeUnmount(() => observer?.disconnect());

    // O ScrollArea do Mantine Vue não tem `viewportRef`: o elemento chega via `viewportProps.rootRef`.
    const viewportProps = {
      rootRef: (node: Element | null) => {
        viewport = node as HTMLDivElement | null;
      },
    };
    const setContent = (node: Element | null) => {
      content = node as HTMLElement | null;
    };
    const onScrollPositionChange = ({ y }: { x: number; y: number }) => {
      const el = viewport;
      if (el) nearBottom = el.scrollHeight - el.clientHeight - y < NEAR_BOTTOM;
    };

    return () => {
      const renderBubble = (message: ChatMessageData): VNodeChild =>
        slots.content
          ? slots.content({ message })
          : props.renderContent
            ? props.renderContent(message)
            : message.text;

      const emptyNode =
        props.messages.length === 0
          ? slots.empty
            ? slots.empty()
            : typeof props.empty === 'function'
              ? props.empty()
              : props.empty
          : null;

      const children = items.value.map((item) => {
        if (item.type === 'separator') {
          return h('div', { key: item.key, class: classes.separator, role: 'separator' }, item.label);
        }
        const { message, position } = item;
        const own = message.authorId === props.currentUserId;
        const bubble = renderBubble(message);
        return h(
          ChatMessage as any,
          {
            key: item.key,
            own,
            system: message.system,
            author: userMap.value[message.authorId],
            showAuthor: props.showAuthors,
            createdAt: message.createdAt,
            status: own ? message.status : undefined,
            attachments: message.attachments,
            position,
            'data-group-start': position === 'single' || position === 'first' ? true : undefined,
          },
          { default: () => bubble },
        );
      });

      return h(
        ScrollArea as any,
        { h: props.h, viewportProps, onScrollPositionChange },
        () =>
          h(
            Box as any,
            {
              rootRef: setContent,
              class: classes.thread,
              role: 'log',
              'aria-live': 'polite',
              'aria-relevant': 'additions',
            },
            () => [
              emptyNode,
              ...children,
              props.typing && props.typing.length > 0
                ? h(TypingIndicator as any, { names: props.typing, mt: 'sm', ml: 40 })
                : null,
            ],
          ),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<ChatThreadProps, {}, SlotsType<ChatThreadSlots>>;
