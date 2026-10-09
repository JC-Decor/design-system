import { defineComponent, h, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { ActionIcon, Avatar, Box, Indicator, resolveNode, type BoxProps, type MantineNode } from '@mantine-vue/core';
import { IconArrowLeft } from '@tabler/icons-vue';
import { initialsName } from './utils';
import { hasContent, nodeProp } from './node';
import classes from './Chat.module.css';

export interface ChatHeaderProps extends BoxProps {
  /** Nome da conversa. O slot `#title` tem prioridade. */
  title?: MantineNode;
  /** Status/descrição abaixo do título. O slot `#subtitle` tem prioridade. */
  subtitle?: MantineNode;
  avatar?: string;
  /** Nome para iniciais do avatar */
  avatarName?: string;
  online?: boolean;
  /** Ações à direita (botões, menu). O slot `#actions` tem prioridade. */
  actions?: MantineNode;
}

export type ChatHeaderEmits = {
  /** Clique no botão voltar. O botão (mobile) só aparece quando há um listener `@back`. */
  back: () => void;
}

export interface ChatHeaderSlots {
  title?: () => VNodeChild;
  subtitle?: () => VNodeChild;
  actions?: () => VNodeChild;
}

/**
 * Cabeçalho da conversa: avatar, nome, status e ações.
 *
 * O botão voltar aparece só com `@back` (equivalente à presença de `onBack` no @jcdecor/ui):
 * `onBack` é declarado como prop — padrão do Vue para detectar se o pai escutou o evento.
 */
export const ChatHeader = defineComponent({
  name: 'ChatHeader',
  props: {
    title: nodeProp,
    subtitle: nodeProp,
    avatar: { type: String, default: undefined },
    avatarName: { type: String, default: undefined },
    online: { type: Boolean, default: false },
    actions: nodeProp,
    onBack: { type: [Function, Array] as PropType<(() => void) | Array<() => void>>, default: undefined },
  },
  setup(props, { slots }) {
    const back = () => {
      const handlers = props.onBack;
      if (Array.isArray(handlers)) handlers.forEach((fn) => fn());
      else handlers?.();
    };

    return () => {
      const subtitle = resolveNode(props.subtitle, slots.subtitle);
      return h(Box as any, { class: classes.header }, () => [
        props.onBack
          ? h(ActionIcon as any, { class: classes.backButton, variant: 'subtle', onClick: back, 'aria-label': 'Voltar' }, () =>
              h(IconArrowLeft, { size: 20 }),
            )
          : null,
        props.avatar || props.avatarName
          ? h(
              Indicator as any,
              { color: 'evergreen', position: 'bottom-end', offset: 5, size: 10, withBorder: true, disabled: !props.online },
              () =>
                h(Avatar as any, {
                  src: props.avatar,
                  name: props.avatarName ? initialsName(props.avatarName) : undefined,
                  color: 'initials',
                  size: 40,
                }),
            )
          : null,
        h('div', { class: classes.headerBody }, [
          h('div', { class: classes.headerTitle }, [resolveNode(props.title, slots.title)]),
          hasContent(subtitle) ? h('div', { class: classes.headerSubtitle }, [subtitle]) : null,
        ]),
        resolveNode(props.actions, slots.actions),
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<ChatHeaderProps, ChatHeaderEmits, SlotsType<ChatHeaderSlots>>;

export interface ChatLayoutProps extends BoxProps {
  /** Lista de conversas (coluna esquerda) — omita para um chat único. O slot `#sidebar` tem prioridade. */
  sidebar?: MantineNode;
  /** Normalmente um <ChatHeader />. O slot `#header` tem prioridade. */
  header?: MantineNode;
  /** Normalmente um <ChatComposer />. O slot `#composer` tem prioridade. */
  composer?: MantineNode;
  /** Altura total @default 600 */
  height?: number | string;
  /** @default 320 */
  sidebarWidth?: number | string;
  /** Em telas pequenas mostra só a lista ou só a conversa @default 'thread' */
  mobileView?: 'list' | 'thread';
}

export interface ChatLayoutSlots {
  /** Normalmente um <ChatThread /> */
  default?: () => VNodeChild;
  sidebar?: () => VNodeChild;
  header?: () => VNodeChild;
  composer?: () => VNodeChild;
}

const toCss = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);

/** Layout de chat: conversas + cabeçalho + mensagens + composer (responsivo). */
export const ChatLayout = defineComponent({
  name: 'ChatLayout',
  props: {
    sidebar: nodeProp,
    header: nodeProp,
    composer: nodeProp,
    height: { type: [Number, String], default: 600 },
    sidebarWidth: { type: [Number, String], default: 320 },
    mobileView: { type: String as PropType<'list' | 'thread'>, default: 'thread' },
  },
  setup(props, { slots }) {
    return () => {
      const sidebar = resolveNode(props.sidebar, slots.sidebar);
      const withSidebar = hasContent(sidebar);
      // O wrapper é o contêiner das container queries: o layout se adapta ao espaço disponível, não à tela.
      // Estilos do usuário (`style` em atributos) são mesclados depois destas variáveis.
      return h(
        Box as any,
        {
          class: classes.layoutContainer,
          style: { '--chat-height': toCss(props.height), '--chat-sidebar-width': toCss(props.sidebarWidth) },
        },
        () =>
          h(
            'div',
            {
              class: classes.layout,
              'data-mobile-view': withSidebar ? props.mobileView : undefined,
              'data-single': withSidebar ? undefined : true,
            },
            [
              withSidebar ? h('aside', { class: classes.layoutSidebar }, [sidebar]) : null,
              h('section', { class: classes.layoutMain }, [
                resolveNode(props.header, slots.header),
                h('div', { class: classes.layoutMessages }, slots.default?.()),
                resolveNode(props.composer, slots.composer),
              ]),
            ],
          ),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<ChatLayoutProps, {}, SlotsType<ChatLayoutSlots>>;
