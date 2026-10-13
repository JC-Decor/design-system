import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { Portal } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { subscribeToasts, toast, type ToastItem, type ToastTone } from './toastStore';
import classes from './Toast.module.css';

const TONE_ICON: Record<ToastTone, string> = { success: 'check', error: 'x', info: 'help' };

export interface ToastCardProps {
  tone: ToastTone;
  children: ReactNode;
  /** Exibe o botão de fechar */
  onDismiss?: () => void;
  className?: string;
  style?: CSSProperties;
}

/** Cartão de toast isolado (o mesmo usado pela viewport) — útil para exibir o visual sem o store. */
export function ToastCard({ tone, children, onDismiss, className, style }: ToastCardProps) {
  const isError = tone === 'error';
  return (
    <div
      className={clsx(classes.toast, className)}
      data-tone={tone}
      style={style}
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
    >
      <span className={classes.icon} aria-hidden="true">
        <Icon name={TONE_ICON[tone]} size={18} />
      </span>
      <div className={classes.message}>{children}</div>
      {onDismiss && (
        <button type="button" className={classes.dismiss} onClick={onDismiss} aria-label="Fechar notificação">
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  );
}
ToastCard.displayName = '@jcdecor/connect-ui/ToastCard';

/** Lista reativa dos toasts visíveis. */
export function useToasts() {
  const [items, setItems] = useState<ToastItem[]>([]);
  useEffect(() => subscribeToasts(setItems), []);
  return items;
}

export interface ToastViewportProps {
  /** Renderiza dentro de um Portal (document.body) @default true */
  withinPortal?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Pilha de toasts no canto inferior direito. */
export function ToastViewport({ withinPortal = true, className, style }: ToastViewportProps) {
  const items = useToasts();
  if (items.length === 0) return null;
  const viewport = (
    <section className={clsx(classes.viewport, className)} style={style} aria-label="Notificações">
      {items.map((item) => (
        <ToastCard key={item.id} tone={item.tone} onDismiss={() => toast.dismiss(item.id)}>
          {item.message}
        </ToastCard>
      ))}
    </section>
  );
  return withinPortal ? <Portal>{viewport}</Portal> : viewport;
}
ToastViewport.displayName = '@jcdecor/connect-ui/ToastViewport';

export interface ToastProviderProps extends ToastViewportProps {
  children?: ReactNode;
}

/** Renderiza os filhos + a viewport de toasts. Coloque uma vez, dentro do `ConnectProvider`. */
export function ToastProvider({ children, ...others }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastViewport {...others} />
    </>
  );
}
ToastProvider.displayName = '@jcdecor/connect-ui/ToastProvider';
