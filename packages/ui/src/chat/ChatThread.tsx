import { useEffect, useMemo, useRef } from 'react';
import { Box, ScrollArea, type ScrollAreaProps } from '@mantine/core';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { buildThread } from './utils';
import type { ChatMessageData, ChatUser } from './types';
import classes from './Chat.module.css';

export interface ChatThreadProps extends Omit<ScrollAreaProps, 'children'> {
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
  /** Conteúdo exibido quando não há mensagens */
  empty?: React.ReactNode;
  /** Renderização customizada do conteúdo da bolha */
  renderContent?: (message: ChatMessageData) => React.ReactNode;
  /** Avatar customizado por mensagem (ex.: ícone do assistente) */
  renderAvatar?: (message: ChatMessageData) => React.ReactNode;
  /** Conteúdo ao fim da conversa, antes do "digitando" (ex.: status de uma resposta em andamento) */
  footer?: React.ReactNode;
}

/** Lista rolável de mensagens com separadores de data, agrupamento e auto-scroll. */
export function ChatThread({
  messages,
  currentUserId,
  users = [],
  typing,
  showAuthors,
  autoScroll = true,
  groupWindow,
  empty,
  renderContent,
  renderAvatar,
  footer,
  h = '100%',
  ...others
}: ChatThreadProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const nearBottom = useRef(true);
  const mounted = useRef(false);

  const userMap = useMemo<Record<string, ChatUser>>(
    () => (Array.isArray(users) ? Object.fromEntries(users.map((u) => [u.id, u])) : users),
    [users],
  );
  const items = useMemo(() => buildThread(messages, groupWindow), [messages, groupWindow]);

  const lastMessage = messages[messages.length - 1];
  useEffect(() => {
    const el = viewport.current;
    if (!el || !autoScroll) return;
    if (nearBottom.current || lastMessage?.authorId === currentUserId) {
      // Primeira renderização: pula direto para o fim; depois, rolagem suave.
      el.scrollTo({ top: el.scrollHeight, behavior: mounted.current ? 'smooth' : 'auto' });
    }
    mounted.current = true;
  }, [messages.length, lastMessage?.id, typing?.length, autoScroll, currentUserId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Conteúdo que cresce depois (imagens, fontes) mantém o fim visível se o usuário já estava lá.
  useEffect(() => {
    const el = viewport.current;
    const inner = content.current;
    if (!el || !inner || !autoScroll || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => {
      if (nearBottom.current) el.scrollTo({ top: el.scrollHeight });
    });
    observer.observe(inner);
    return () => observer.disconnect();
  }, [autoScroll]);

  return (
    <ScrollArea
      h={h}
      viewportRef={viewport}
      onScrollPositionChange={({ y }) => {
        const el = viewport.current;
        if (el) nearBottom.current = el.scrollHeight - el.clientHeight - y < 80;
      }}
      {...others}
    >
      <Box ref={content} className={classes.thread} role="log" aria-live="polite" aria-relevant="additions">
        {messages.length === 0 && empty}
        {items.map((item) => {
          if (item.type === 'separator') {
            return (
              <div key={item.key} className={classes.separator} role="separator">
                {item.label}
              </div>
            );
          }
          const { message, position } = item;
          const own = message.authorId === currentUserId;
          return (
            <ChatMessage
              key={item.key}
              own={own}
              system={message.system}
              variant={message.variant}
              avatar={renderAvatar?.(message)}
              author={userMap[message.authorId]}
              showAuthor={showAuthors}
              createdAt={message.createdAt}
              status={own ? message.status : undefined}
              attachments={message.attachments}
              position={position}
              data-group-start={position === 'single' || position === 'first' ? true : undefined}
            >
              {renderContent ? renderContent(message) : message.text}
            </ChatMessage>
          );
        })}
        {footer}
        {typing && typing.length > 0 && <TypingIndicator names={typing} mt="sm" ml={40} />}
      </Box>
    </ScrollArea>
  );
}
ChatThread.displayName = '@jcdecor/ui/ChatThread';
