import type { CSSProperties, FormEvent, ReactNode } from 'react';
import { ActionIcon, Modal, type ModalRootProps } from '@mantine/core';
import clsx from 'clsx';
import { formGridClassName } from '../FormGrid/FormGrid';
import { Icon } from '../Icon';
import classes from './FormModal.module.css';

export interface FormModalProps extends Omit<ModalRootProps, 'opened' | 'onClose' | 'title' | 'children' | 'size' | 'onSubmit'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  /** Subtítulo abaixo do título (vira a descrição acessível do diálogo) */
  description?: ReactNode;
  children?: ReactNode;
  /** Rodapé fixo, tingido (ações) */
  footer?: ReactNode;
  /**
   * `overlay` = quase tela cheia (--cn-overlay-w × --cn-overlay-h, como o `.scl-modal` do Connect);
   * número/string = largura, com altura pelo conteúdo @default 'overlay'
   */
  size?: 'overlay' | number | (string & {});
  /** `grid` = campos simples em colunas automáticas, textareas e demais blocos na linha inteira · `stack` = um abaixo do outro @default 'grid' */
  layout?: 'grid' | 'stack';
  /** Largura mínima das colunas no layout `grid` @default 260 */
  minColWidth?: number;
  /** Envolve corpo e rodapé num `<form>` (botões `type="submit"` no rodapé enviam) */
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  /** @default true */
  withCloseButton?: boolean;
  /** aria-label do botão de fechar @default 'Fechar' */
  closeLabel?: string;
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;
  style?: CSSProperties;
}

/**
 * Modal de formulário do Connect: cabeçalho fixo (título + subtítulo + fechar), corpo rolável em grade
 * de campos e rodapé fixo com as ações. Esc e clique fora fecham; o foco fica preso no diálogo.
 */
export function FormModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  size = 'overlay',
  layout = 'grid',
  minColWidth = 260,
  onSubmit,
  withCloseButton = true,
  closeLabel = 'Fechar',
  className,
  bodyClassName,
  footerClassName,
  style,
  ...others
}: FormModalProps) {
  const overlay = size === 'overlay';
  const body = (
    <>
      <div
        className={clsx(classes.body, layout === 'grid' && formGridClassName, bodyClassName)}
        data-layout={layout}
        style={layout === 'grid' ? ({ '--fg-min': `${minColWidth}px`, '--fg-gap': '14px' } as CSSProperties) : undefined}
      >
        {children}
      </div>
      {footer && <footer className={clsx(classes.footer, footerClassName)}>{footer}</footer>}
    </>
  );
  return (
    <Modal.Root
      opened={open}
      onClose={() => onOpenChange(false)}
      centered
      classNames={{ content: clsx(classes.content, className) }}
      styles={style ? { content: style } : undefined}
      vars={() => ({
        root: overlay
          ? { '--modal-size': 'var(--cn-overlay-w)', '--modal-y-offset': 'var(--cn-overlay-gap)', '--modal-x-offset': 'var(--cn-overlay-gap)' }
          : { '--modal-size': typeof size === 'number' ? `${size}px` : size },
      })}
      {...others}
    >
      <Modal.Overlay />
      <Modal.Content data-size={overlay ? 'overlay' : 'custom'}>
        <header className={classes.header}>
          <div className={classes.heading}>
            <Modal.Title className={classes.title}>{title}</Modal.Title>
            {description && <Modal.Body className={classes.description}>{description}</Modal.Body>}
          </div>
          {withCloseButton && (
            <ActionIcon size={34} className={classes.close} aria-label={closeLabel} onClick={() => onOpenChange(false)}>
              <Icon name="x" size={16} />
            </ActionIcon>
          )}
        </header>
        {onSubmit ? (
          <form className={classes.form} onSubmit={onSubmit} noValidate>
            {body}
          </form>
        ) : (
          body
        )}
      </Modal.Content>
    </Modal.Root>
  );
}
FormModal.displayName = '@jcdecor/connect-ui/FormModal';
