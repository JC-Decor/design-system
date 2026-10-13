import type { ReactNode } from 'react';
import { Button, Modal, type ModalRootProps } from '@mantine/core';
import clsx from 'clsx';
import classes from './ConfirmDialog.module.css';

export type ConfirmTone = 'primary' | 'danger' | 'warning';

export interface ConfirmDialogProps
  extends Omit<ModalRootProps, 'opened' | 'onClose' | 'title' | 'children'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  /** Conteúdo extra entre a descrição e os botões */
  children?: ReactNode;
  /** @default 'Confirmar' */
  confirmLabel?: string;
  /** @default 'Cancelar' */
  cancelLabel?: string;
  onConfirm: () => void;
  /** `primary` navy · `danger` coral (exclusões) · `warning` âmbar (ações reversíveis com impacto) @default 'primary' */
  tone?: ConfirmTone;
  /** Desabilita a confirmação e troca o rótulo por "Aguarde…" */
  loading?: boolean;
}

const confirmProps: Record<ConfirmTone, { variant: string; color?: string }> = {
  primary: { variant: 'filled' },
  danger: { variant: 'danger' },
  warning: { variant: 'filled', color: 'yellow' },
};

/**
 * Diálogo de confirmação (AlertDialog do Connect) sobre o `Modal` do Mantine.
 * Fica acima de outros modais (`zIndex` 300), prende o foco e fecha com Esc.
 */
export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  tone = 'primary',
  loading = false,
  className,
  size = 440,
  zIndex = 300,
  ...others
}: ConfirmDialogProps) {
  return (
    <Modal.Root
      opened={open}
      onClose={() => onOpenChange(false)}
      size={size}
      zIndex={zIndex}
      centered
      closeOnClickOutside={!loading}
      closeOnEscape={!loading}
      classNames={{ content: clsx(classes.content, className) }}
      {...others}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Body className={classes.body}>
          <Modal.Title className={classes.title}>{title}</Modal.Title>
          {description && <div className={classes.desc}>{description}</div>}
          {children}
          <div className={classes.footer}>
            <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading} data-autofocus>
              {cancelLabel}
            </Button>
            <Button {...confirmProps[tone]} onClick={onConfirm} disabled={loading}>
              {loading ? 'Aguarde…' : confirmLabel}
            </Button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
ConfirmDialog.displayName = '@jcdecor/connect-ui/ConfirmDialog';
