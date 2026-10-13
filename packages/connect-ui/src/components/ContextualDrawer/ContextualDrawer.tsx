import type { CSSProperties, ReactNode } from 'react';
import { ActionIcon, Drawer, type DrawerRootProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './ContextualDrawer.module.css';

export type ContextualDrawerSize = 'sm' | 'md' | 'lg' | 'xl';
export type ContextualDrawerSide = 'right' | 'left';

export interface ContextualDrawerProps
  extends Omit<DrawerRootProps, 'opened' | 'onClose' | 'title' | 'children' | 'size' | 'position'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  /** Substitui o cabeçalho padrão (título + descrição + fechar) */
  header?: ReactNode;
  children: ReactNode;
  /** Rodapé fixo (ações). Em telas estreitas os botões empilham em largura total. */
  footer?: ReactNode;
  /** `sm` = até 360px (confirmações); `md`/`lg`/`xl` = largura expandida (--cn-overlay-w) @default 'md' */
  size?: ContextualDrawerSize;
  /** @default 'right' */
  side?: ContextualDrawerSide;
  className?: string;
  bodyClassName?: string;
  style?: CSSProperties;
  /** aria-label do botão de fechar @default 'Fechar painel' */
  closeLabel?: string;
}

/**
 * Painel lateral contextual do Connect (criação/edição/detalhes) sobre o `Drawer` do Mantine:
 * flutua com folga em volta, cabeçalho e rodapé fixos e corpo rolável. Esc e clique fora fecham.
 */
export function ContextualDrawer({
  open,
  onOpenChange,
  title,
  description,
  header,
  children,
  footer,
  size = 'md',
  side = 'right',
  className,
  bodyClassName,
  style,
  closeLabel = 'Fechar painel',
  ...others
}: ContextualDrawerProps) {
  const width = size === 'sm' ? 'min(var(--cn-overlay-w), 360px)' : 'var(--cn-overlay-w)';
  return (
    <Drawer.Root
      opened={open}
      onClose={() => onOpenChange(false)}
      position={side}
      className={classes.root}
      vars={() => ({ root: { '--drawer-size': width, '--drawer-offset': 'var(--cn-overlay-gap)' } })}
      transitionProps={{ duration: 320, timingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      data-size={size}
      {...others}
    >
      <Drawer.Overlay />
      <Drawer.Content
        className={clsx(classes.content, className)}
        style={style}
        aria-label={header && typeof title === 'string' ? title : undefined}
      >
        {header ?? (
          <header className={classes.header}>
            <div>
              <Drawer.Title className={classes.title}>{title}</Drawer.Title>
              {description && <p className={classes.description}>{description}</p>}
            </div>
            <ActionIcon size={34} className={classes.close} aria-label={closeLabel} onClick={() => onOpenChange(false)}>
              <Icon name="x" size={16} />
            </ActionIcon>
          </header>
        )}
        <div className={clsx(classes.body, bodyClassName)}>{children}</div>
        {footer && <footer className={classes.footer}>{footer}</footer>}
      </Drawer.Content>
    </Drawer.Root>
  );
}
ContextualDrawer.displayName = '@jcdecor/connect-ui/ContextualDrawer';
