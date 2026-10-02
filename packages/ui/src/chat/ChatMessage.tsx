import { Avatar, Box, Loader, Tooltip, type BoxProps } from '@mantine/core';
import { IconAlertCircle, IconCheck, IconChecks, IconFile } from '@tabler/icons-react';
import { formatBytes, initialsName, toDate, type GroupPosition } from './utils';
import type { ChatAttachment, ChatMessageStatus, ChatUser } from './types';
import classes from './Chat.module.css';

export interface ChatMessageProps extends BoxProps, Omit<React.ComponentProps<'div'>, keyof BoxProps> {
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
  children?: React.ReactNode;
}

const statusLabel: Record<ChatMessageStatus, string> = {
  sending: 'Enviando…',
  sent: 'Enviada',
  delivered: 'Entregue',
  read: 'Lida',
  error: 'Falha no envio',
};

function StatusIcon({ status }: { status: ChatMessageStatus }) {
  if (status === 'sending') return <Loader size={10} color="gray" />;
  if (status === 'sent') return <IconCheck size={14} />;
  if (status === 'error') return <IconAlertCircle size={14} color="var(--ds-error)" />;
  return <IconChecks size={14} />;
}

/** Bolha de mensagem de chat. */
export function ChatMessage({
  own,
  author,
  showAuthor,
  showAvatar = true,
  createdAt,
  status,
  attachments,
  position = 'single',
  system,
  children,
  ...others
}: ChatMessageProps) {
  if (system) {
    return (
      <Box className={classes.system} role="status" {...others}>
        {children}
      </Box>
    );
  }

  const isLast = position === 'single' || position === 'last';
  const isFirst = position === 'single' || position === 'first';
  const time = createdAt
    ? new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(toDate(createdAt))
    : null;

  return (
    <Box className={classes.message} mod={{ own, position, status }} {...others}>
      {!own && (
        <div className={classes.avatarSlot}>
          {showAvatar && isLast && author && (
            <Avatar src={author.avatar} name={initialsName(author.name)} color={author.color ?? 'initials'} size={32} alt={author.name} />
          )}
        </div>
      )}
      <div className={classes.bubbleColumn}>
        {showAuthor && isFirst && author && !own && <div className={classes.author}>{author.name}</div>}
        {attachments && attachments.length > 0 && (
          <div className={classes.attachments}>
            {attachments.map((file, index) =>
              file.type === 'image' && file.url ? (
                <a key={index} href={file.url} target="_blank" rel="noreferrer">
                  <img className={classes.imageAttachment} src={file.url} alt={file.name} />
                </a>
              ) : (
                <a key={index} className={classes.fileAttachment} href={file.url} target="_blank" rel="noreferrer" download={file.name}>
                  <IconFile size={18} />
                  <span className={classes.fileName}>{file.name}</span>
                  {file.size !== undefined && <span className={classes.fileSize}>{formatBytes(file.size)}</span>}
                </a>
              ),
            )}
          </div>
        )}
        {children !== undefined && children !== null && children !== '' && <div className={classes.bubble}>{children}</div>}
        {isLast && (time || (own && status)) && (
          <div className={classes.meta} data-read={status === 'read' || undefined}>
            {time && createdAt && <time dateTime={toDate(createdAt).toISOString()}>{time}</time>}
            {own && status && (
              <Tooltip label={statusLabel[status]} withArrow>
                <span className={classes.status} aria-label={statusLabel[status]} style={{ display: 'inline-flex' }}>
                  <StatusIcon status={status} />
                </span>
              </Tooltip>
            )}
          </div>
        )}
      </div>
    </Box>
  );
}
ChatMessage.displayName = '@jcdecor/ui/ChatMessage';
