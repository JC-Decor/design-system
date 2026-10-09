import { ActionIcon, Avatar, Box, Indicator, type BoxProps } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { initialsName } from './utils';
import classes from './Chat.module.css';

export interface ChatHeaderProps extends BoxProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  avatar?: string;
  /** Nome para iniciais do avatar */
  avatarName?: string;
  online?: boolean;
  actions?: React.ReactNode;
  /** Exibe botão voltar (mobile) */
  onBack?: () => void;
}

/** Cabeçalho da conversa: avatar, nome, status e ações. */
export function ChatHeader({ title, subtitle, avatar, avatarName, online, actions, onBack, ...others }: ChatHeaderProps) {
  return (
    <Box className={classes.header} {...others}>
      {onBack && (
        <ActionIcon className={classes.backButton} variant="subtle" onClick={onBack} aria-label="Voltar">
          <IconArrowLeft size={20} />
        </ActionIcon>
      )}
      {(avatar || avatarName) && (
        <Indicator color="evergreen" position="bottom-end" offset={5} size={10} withBorder disabled={!online}>
          <Avatar src={avatar} name={avatarName ? initialsName(avatarName) : undefined} color="initials" size={40} />
        </Indicator>
      )}
      <div className={classes.headerBody}>
        <div className={classes.headerTitle}>{title}</div>
        {subtitle && <div className={classes.headerSubtitle}>{subtitle}</div>}
      </div>
      {actions}
    </Box>
  );
}
ChatHeader.displayName = '@jcdecor/ui/ChatHeader';

export interface ChatLayoutProps extends BoxProps {
  /** Lista de conversas (coluna esquerda) — omita para um chat único */
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  /** Normalmente um <ChatThread /> */
  children: React.ReactNode;
  /** Normalmente um <ChatComposer /> */
  composer?: React.ReactNode;
  /** Altura total @default 600 */
  height?: number | string;
  sidebarWidth?: number | string;
  /** Em telas pequenas mostra só a lista ou só a conversa @default 'thread' */
  mobileView?: 'list' | 'thread';
}

/** Layout de chat: conversas + cabeçalho + mensagens + composer (responsivo). */
export function ChatLayout({
  sidebar,
  header,
  children,
  composer,
  height = 600,
  sidebarWidth = 320,
  mobileView = 'thread',
  style,
  ...others
}: ChatLayoutProps) {
  const toCss = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);
  // O wrapper é o contêiner das container queries: o layout se adapta ao espaço disponível, não à tela.
  return (
    <Box
      className={classes.layoutContainer}
      style={[
        {
          ['--chat-height' as string]: toCss(height),
          ['--chat-sidebar-width' as string]: toCss(sidebarWidth),
        },
        style,
      ]}
      {...others}
    >
      <div
        className={classes.layout}
        data-mobile-view={sidebar ? mobileView : undefined}
        data-single={sidebar ? undefined : true}
      >
        {sidebar && <aside className={classes.layoutSidebar}>{sidebar}</aside>}
        <section className={classes.layoutMain}>
          {header}
          <div className={classes.layoutMessages}>{children}</div>
          {composer}
        </section>
      </div>
    </Box>
  );
}
ChatLayout.displayName = '@jcdecor/ui/ChatLayout';
