import type { ReactNode } from 'react';

export type ToastTone = 'success' | 'error' | 'info';

export interface ToastItem {
  id: string;
  tone: ToastTone;
  message: ReactNode;
  duration: number;
}

type ToastListener = (toasts: ToastItem[]) => void;

/** No máximo 3 visíveis; os demais esperam na fila. */
const MAX_VISIBLE = 3;
const DEFAULT_DURATION = 5000;
const ERROR_DURATION = 7000;

let toasts: ToastItem[] = [];
let queue: ToastItem[] = [];
let seq = 0;
const listeners = new Set<ToastListener>();
const timers = new Map<string, ReturnType<typeof setTimeout>>();

function notify() {
  const snapshot = [...toasts];
  listeners.forEach((fn) => fn(snapshot));
}

function scheduleDismiss(id: string, duration: number) {
  const existing = timers.get(id);
  if (existing) clearTimeout(existing);
  if (duration <= 0 || !Number.isFinite(duration)) return;
  timers.set(id, setTimeout(() => dismiss(id), duration));
}

function promoteFromQueue() {
  while (toasts.length < MAX_VISIBLE && queue.length > 0) {
    const next = queue.shift()!;
    toasts = [...toasts, next];
    scheduleDismiss(next.id, next.duration);
  }
}

function addToast(tone: ToastTone, message: ReactNode, duration = DEFAULT_DURATION) {
  seq += 1;
  const item: ToastItem = { id: `toast-${seq}-${Date.now().toString(36)}`, tone, message, duration };
  if (toasts.length < MAX_VISIBLE) {
    toasts = [...toasts, item];
    scheduleDismiss(item.id, duration);
  } else {
    queue = [...queue, item];
  }
  notify();
  return item.id;
}

/** Remove um toast (visível ou na fila). */
export function dismissToast(id: string) {
  dismiss(id);
}

function dismiss(id: string) {
  const timer = timers.get(id);
  if (timer) {
    clearTimeout(timer);
    timers.delete(id);
  }
  toasts = toasts.filter((t) => t.id !== id);
  queue = queue.filter((t) => t.id !== id);
  promoteFromQueue();
  notify();
}

/** Remove todos os toasts e esvazia a fila. */
function clear() {
  timers.forEach((timer) => clearTimeout(timer));
  timers.clear();
  toasts = [];
  queue = [];
  notify();
}

/** Assina a lista de toasts visíveis; devolve a função de cancelamento. */
export function subscribeToasts(listener: ToastListener) {
  listeners.add(listener);
  listener([...toasts]);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * API imperativa (mesma do `hooks/useToast` do connect-jc). Duração em ms; `0` = não fecha sozinho.
 * Erros ficam 7s por padrão.
 *
 * ```ts
 * toast.success('Férias aprovadas.');
 * toast.error('Não foi possível enviar o comunicado.');
 * ```
 */
export const toast = {
  success: (message: ReactNode, duration?: number) => addToast('success', message, duration),
  error: (message: ReactNode, duration?: number) => addToast('error', message, duration ?? ERROR_DURATION),
  info: (message: ReactNode, duration?: number) => addToast('info', message, duration),
  dismiss,
  clear,
};
