import { useEffect, useState, type ReactNode } from 'react';
import { Button, Modal, TextInput, type ModalRootProps } from '@mantine/core';
import clsx from 'clsx';
import classes from '../ConfirmDialog/ConfirmDialog.module.css';

export interface PromptDialogProps
  extends Omit<ModalRootProps, 'opened' | 'onClose' | 'title' | 'children'> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  /** Rótulo do campo */
  label: string;
  /** Valor inicial (reaplicado a cada abertura) */
  defaultValue?: string;
  placeholder?: string;
  /** @default 'Confirmar' */
  confirmLabel?: string;
  /** @default 'Cancelar' */
  cancelLabel?: string;
  /** Recebe o valor já sem espaços nas pontas; não é chamado com valor vazio */
  onConfirm: (value: string) => void | Promise<void>;
  loading?: boolean;
  /** Mensagem de erro exibida sob o campo */
  error?: ReactNode;
}

/** Diálogo com um campo de texto (renomear, justificar, dar nome a algo). Enter confirma. */
export function PromptDialog({
  open,
  onOpenChange,
  title,
  description,
  label,
  defaultValue = '',
  placeholder,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  loading = false,
  error,
  className,
  size = 440,
  ...others
}: PromptDialogProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (open) setValue(defaultValue);
  }, [open, defaultValue]);

  async function handleConfirm() {
    const trimmed = value.trim();
    if (!trimmed || loading) return;
    await onConfirm(trimmed);
  }

  return (
    <Modal.Root opened={open} onClose={() => onOpenChange(false)} size={size} centered {...others}>
      <Modal.Overlay />
      <Modal.Content className={clsx(classes.content, className)}>
        <Modal.Body className={classes.body}>
          <Modal.Title className={classes.title}>{title}</Modal.Title>
          {description && <p className={classes.desc}>{description}</p>}
          <TextInput
            label={label}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder={placeholder}
            error={error}
            data-autofocus
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                void handleConfirm();
              }
            }}
          />
          <div className={classes.footer}>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              {cancelLabel}
            </Button>
            <Button onClick={() => void handleConfirm()} disabled={loading || !value.trim()}>
              {loading ? 'Aguarde…' : confirmLabel}
            </Button>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
PromptDialog.displayName = '@jcdecor/connect-ui/PromptDialog';
