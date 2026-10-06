import { defineComponent, h, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { Avatar, Box, Loader, type BoxProps } from '@mantine-vue/core';
import { Tooltip } from '../theme/themeDefaults';
import { IconAlertCircle, IconCheck, IconChecks, IconFile } from '@tabler/icons-vue';
import { formatBytes, initialsName, toDate, type GroupPosition } from './utils';
import type { ChatAttachment, ChatMessageStatus, ChatUser } from './types';
import { hasContent } from './node';
import classes from './Chat.module.css';

export interface ChatMessageProps extends BoxProps {
  /** Mensagem do usuário atual (alinhada à direita, bolha azul) */
  own?: boolean;
  author?: ChatUser;
  /** Exibe o nome do autor acima da bolha (útil em grupos) */
  showAuthor?: boolean;
  /** Exibe avatar ao lado da bolha (só na última mensagem do grupo) @default true */
  showAvatar?: boolean;
  createdAt?: Date | string | number;
  status?: ChatMessageStatus;
  attachments?: ChatAttachment[];
  /** Posição dentro de um grupo de mensagens consecutivas @default 'single' */
  position?: GroupPosition;
  /** Mensagem de sistema (centralizada) */
  system?: boolean;
  /** `plain` = sem bolha e em largura total (respostas de assistente com markdown/tabelas) @default 'bubble' */
  variant?: 'bubble' | 'plain';
}

export interface ChatMessageSlots {
  /** Conteúdo da bolha (texto, links, cards…). Sem conteúdo, a bolha não é renderizada. */
  default?: () => VNodeChild;
  /** Avatar customizado (ex.: ícone do assistente); substitui o avatar do `author` */
  avatar?: () => VNodeChild;
}

const statusLabel: Record<ChatMessageStatus, string> = {
  sending: 'Enviando…',
  sent: 'Enviada',
  delivered: 'Entregue',
  read: 'Lida',
  error: 'Falha no envio',
};

function statusIcon(status: ChatMessageStatus) {
  if (status === 'sending') return h(Loader as any, { size: 10, color: 'gray' });
  if (status === 'sent') return h(IconCheck, { size: 14 });
  if (status === 'error') return h(IconAlertCircle, { size: 14, color: 'var(--ds-error)' });
  return h(IconChecks, { size: 14 });
}

const timeFormat = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' });

/** Bolha de mensagem de chat. O slot padrão é o conteúdo da bolha; atributos vão para o Box raiz. */
export const ChatMessage = defineComponent({
  name: 'ChatMessage',
  props: {
    own: { type: Boolean, default: false },
    author: { type: Object as PropType<ChatUser>, default: undefined },
    showAuthor: { type: Boolean, default: false },
    showAvatar: { type: Boolean, default: true },
    createdAt: { type: [Date, String, Number] as PropType<Date | string | number>, default: undefined },
    status: { type: String as PropType<ChatMessageStatus>, default: undefined },
    attachments: { type: Array as PropType<ChatAttachment[]>, default: undefined },
    position: { type: String as PropType<GroupPosition>, default: 'single' },
    system: { type: Boolean, default: false },
    variant: { type: String as PropType<'bubble' | 'plain'>, default: 'bubble' },
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.();

      if (props.system) {
        return h(Box as any, { class: classes.system, role: 'status' }, () => children);
      }

      const { own, author, status, position, createdAt, attachments } = props;
      const isLast = position === 'single' || position === 'last';
      const isFirst = position === 'single' || position === 'first';
      const time = createdAt ? timeFormat.format(toDate(createdAt)) : null;

      const avatarSlot = !own
        ? h(
            'div',
            { class: classes.avatarSlot },
            props.showAvatar && (props.variant === 'plain' ? isFirst : isLast) && slots.avatar
              ? slots.avatar()
              : props.showAvatar && (props.variant === 'plain' ? isFirst : isLast) && author
              ? [
                  h(Avatar as any, {
                    src: author.avatar,
                    name: initialsName(author.name),
                    color: author.color ?? 'initials',
                    size: 32,
                    alt: author.name,
                  }),
                ]
              : undefined,
          )
        : null;

      const attachmentList =
        attachments && attachments.length > 0
          ? h(
              'div',
              { class: classes.attachments },
              attachments.map((file, index) =>
                file.type === 'image' && file.url
                  ? h('a', { key: index, href: file.url, target: '_blank', rel: 'noreferrer' }, [
                      h('img', { class: classes.imageAttachment, src: file.url, alt: file.name }),
                    ])
                  : h(
                      'a',
                      {
                        key: index,
                        class: classes.fileAttachment,
                        href: file.url,
                        target: '_blank',
                        rel: 'noreferrer',
                        download: file.name,
                      },
                      [
                        h(IconFile, { size: 18 }),
                        h('span', { class: classes.fileName }, file.name),
                        file.size !== undefined ? h('span', { class: classes.fileSize }, formatBytes(file.size)) : null,
                      ],
                    ),
              ),
            )
          : null;

      const meta =
        isLast && (time || (own && status))
          ? h('div', { class: classes.meta, 'data-read': status === 'read' || undefined }, [
              time && createdAt
                ? h('time', { datetime: toDate(createdAt).toISOString() }, time)
                : null,
              own && status
                ? h(
                    Tooltip as any,
                    { label: statusLabel[status], withArrow: true },
                    () =>
                      h(
                        'span',
                        { class: classes.status, 'aria-label': statusLabel[status], style: { display: 'inline-flex' } },
                        [statusIcon(status)],
                      ),
                  )
                : null,
            ])
          : null;

      return h(Box as any, { class: classes.message, mod: { own, position, status }, 'data-variant': props.variant === 'plain' ? 'plain' : undefined }, () => [
        avatarSlot,
        h('div', { class: classes.bubbleColumn }, [
          props.showAuthor && isFirst && author && !own ? h('div', { class: classes.author }, author.name) : null,
          attachmentList,
          hasContent(children) ? h('div', { class: classes.bubble }, children) : null,
          meta,
        ]),
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<ChatMessageProps, {}, SlotsType<ChatMessageSlots>>;
