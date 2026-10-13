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
  /**
   * `sm` = até 360px (confirmações); `md`/`lg`/`xl` = largura expandida (--cn-overlay-w).
   * Número (px) ou string CSS = largura fixa, limitada à área útil (ex.: `460`) @default 'md'
   */
  size?: ContextualDrawerSize | number | (string & {});
  /** @default 'right' */
  side?: ContextualDrawerSide;
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;
  /** Padding do corpo (px ou CSS); `0` remove @default '20px 22px' */
  bodyPadding?: number | string;
  style?: CSSProperties;
  /** aria-label do botão de fechar @default 'Fechar painel' */
  closeLabel?: string;
  /**
   * Mostra o botão de fechar. Com `header` próprio ele flutua no canto superior direito.
   * @default true sem `header`, false com `header`
   */
  withCloseButton?: boolean;
}

const NAMED_SIZES: readonly string[] = ['sm', 'md', 'lg', 'xl'];

function drawerWidth(size: ContextualDrawerProps['size']) {
  if (size === 'sm') return 'min(var(--cn-overlay-w), 360px)';
  if (size === undefined || NAMED_SIZES.includes(size as string)) return 'var(--cn-overlay-w)';
  const value = typeof size === 'number' ? `${size}px` : size;
  return `min(var(--cn-overlay-w), ${value})`;
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
  footerClassName,
  bodyPadding,
  style,
  closeLabel = 'Fechar painel',
  withCloseButton = !header,
  ...others
}: ContextualDrawerProps) {
  const width = drawerWidth(size);
  const closeButton = (
    <ActionIcon size={34} className={classes.close} aria-label={closeLabel} onClick={() => onOpenChange(false)}>
      <Icon name="x" size={16} />
    </ActionIcon>
  );
  return (
    <Drawer.Root
      opened={open}
      onClose={() => onOpenChange(false)}
      position={side}
      vars={() => ({ root: { '--drawer-size': width, '--drawer-offset': 'var(--cn-overlay-gap)' } })}
      transitionProps={{ duration: 320, timingFunction: 'cubic-bezier(.16,1,.3,1)' }}
      classNames={{ content: clsx(classes.content, className) }}
      styles={style ? { content: style } : undefined}
      data-size={typeof size === 'string' && NAMED_SIZES.includes(size) ? size : 'custom'}
      {...others}
    >
      <Drawer.Overlay />
      <Drawer.Content
        aria-label={header && typeof title === 'string' ? title : undefined}
      >
        {header ? (
          <>
            {header}
            {withCloseButton && <div className={classes.floatingClose}>{closeButton}</div>}
          </>
        ) : (
          <header className={classes.header}>
            <div>
              <Drawer.Title className={classes.title}>{title}</Drawer.Title>
              {description && <p className={classes.description}>{description}</p>}
            </div>
            {withCloseButton && closeButton}
          </header>
        )}
        <div
          className={clsx(classes.body, bodyClassName)}
          style={bodyPadding === undefined ? undefined : { padding: typeof bodyPadding === 'number' ? `${bodyPadding}px` : bodyPadding }}
        >
          {children}
        </div>
        {footer && <footer className={clsx(classes.footer, footerClassName)}>{footer}</footer>}
      </Drawer.Content>
    </Drawer.Root>
  );
}
ContextualDrawer.displayName = '@jcdecor/connect-ui/ContextualDrawer';
