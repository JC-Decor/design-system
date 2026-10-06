import { useMemo, useState } from 'react';
import { Avatar, Badge, Box, Indicator, ScrollArea, TextInput, type BoxProps } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { initialsName, shortTimeLabel } from './utils';
import type { Conversation } from './types';
import classes from './Chat.module.css';

export interface ConversationListProps extends Omit<BoxProps, 'onSelect'> {
  conversations: Conversation[];
  activeId?: string | null;
  onSelect?: (conversation: Conversation) => void;
  /** Exibe campo de busca @default true */
  searchable?: boolean;
  searchPlaceholder?: string;
  empty?: React.ReactNode;
  /** Ícone no lugar do avatar com iniciais (ex.: conversas com um assistente) */
  renderIcon?: (conversation: Conversation) => React.ReactNode;
  /** Ações por conversa (ex.: menu renomear/excluir), à direita do item */
  renderActions?: (conversation: Conversation) => React.ReactNode;
}

/** Lista de conversas com busca, não lidas, presença e última mensagem. */
export function ConversationList({
  conversations,
  activeId,
  onSelect,
  searchable = true,
  searchPlaceholder = 'Buscar conversas',
  empty,
  renderIcon,
  renderActions,
  ...others
}: ConversationListProps) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('pt-BR');
    if (!q) return conversations;
    return conversations.filter(
      (c) => c.name.toLocaleLowerCase('pt-BR').includes(q) || c.lastMessage?.toLocaleLowerCase('pt-BR').includes(q),
    );
  }, [conversations, query]);

  return (
    <Box className={classes.conversations} {...others}>
      {searchable && (
        <div className={classes.conversationSearch}>
          <TextInput
            size="sm"
            placeholder={searchPlaceholder}
            leftSection={<IconSearch size={16} />}
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            aria-label={searchPlaceholder}
          />
        </div>
      )}
      <ScrollArea style={{ flex: 1 }} type="auto">
        <div role="list">
          {filtered.length === 0 && (
            <Box p="lg" ta="center" c="var(--ds-text-3)" fz="sm">
              {empty ?? 'Nenhuma conversa encontrada'}
            </Box>
          )}
          {filtered.map((c) => (
            <div
              key={c.id}
              role="listitem"
              className={classes.conversationItem}
              data-active={c.id === activeId || undefined}
              data-unread={(c.unread ?? 0) > 0 || undefined}
            >
              <button
                type="button"
                className={classes.conversation}
                aria-current={c.id === activeId ? 'true' : undefined}
                onClick={() => onSelect?.(c)}
              >
                <Indicator color="evergreen" position="bottom-end" offset={5} size={10} withBorder disabled={!c.online}>
                  {renderIcon ? (
                    <span className={classes.conversationIcon}>{renderIcon(c)}</span>
                  ) : (
                    <Avatar src={c.avatar} name={initialsName(c.name)} color={c.color ?? 'initials'} size={40} />
                  )}
                </Indicator>
                <div className={classes.conversationBody}>
                  <div className={classes.conversationTop}>
                    <span className={classes.conversationName}>{c.name}</span>
                    {c.lastMessageAt !== undefined && <span className={classes.conversationTime}>{shortTimeLabel(c.lastMessageAt)}</span>}
                  </div>
                  <div className={classes.conversationBottom}>
                    <span className={classes.conversationPreview}>{c.lastMessage}</span>
                    {(c.unread ?? 0) > 0 && (
                      <Badge size="sm" variant="filled" circle={(c.unread ?? 0) < 10} aria-label={`${c.unread} não lidas`}>
                        {c.unread! > 99 ? '99+' : c.unread}
                      </Badge>
                    )}
                  </div>
                  {c.tag && (
                    <Badge size="xs" color="obsidian" mt={6}>
                      {c.tag}
                    </Badge>
                  )}
                </div>
              </button>
              {renderActions && <div className={classes.conversationActions}>{renderActions(c)}</div>}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Box>
  );
}
ConversationList.displayName = '@jcdecor/ui/ConversationList';
