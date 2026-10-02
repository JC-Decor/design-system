import type { ChatMessageData } from './types';

const DAY = 24 * 60 * 60 * 1000;

export function toDate(value: Date | string | number) {
  return value instanceof Date ? value : new Date(value);
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

/** "Hoje", "Ontem", "segunda-feira" (últimos 7 dias) ou "12 de set. de 2026". */
export function dayLabel(value: Date | string | number, now = new Date()) {
  const date = toDate(value);
  const diff = Math.round((startOfDay(now) - startOfDay(date)) / DAY);
  if (diff === 0) return 'Hoje';
  if (diff === 1) return 'Ontem';
  if (diff > 1 && diff < 7) return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date);
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}

/** Horário curto para listas: "14:32" hoje, "Ontem", ou "12/09". */
export function shortTimeLabel(value: Date | string | number, now = new Date()) {
  const date = toDate(value);
  const diff = Math.round((startOfDay(now) - startOfDay(date)) / DAY);
  if (diff === 0) return new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(date);
  if (diff === 1) return 'Ontem';
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(date);
}

export type GroupPosition = 'single' | 'first' | 'middle' | 'last';

export type ThreadItem =
  | { type: 'separator'; key: string; label: string }
  | { type: 'message'; key: string; message: ChatMessageData; position: GroupPosition };

/**
 * Agrupa mensagens consecutivas do mesmo autor (janela de `groupWindowMs`)
 * e insere separadores de data.
 */
export function buildThread(messages: ChatMessageData[], groupWindowMs = 5 * 60 * 1000, now = new Date()): ThreadItem[] {
  const items: ThreadItem[] = [];
  let lastDay: number | null = null;

  messages.forEach((message, index) => {
    const date = toDate(message.createdAt);
    const day = startOfDay(date);
    if (day !== lastDay) {
      items.push({ type: 'separator', key: `sep-${day}`, label: dayLabel(date, now) });
      lastDay = day;
    }

    const prev = messages[index - 1];
    const next = messages[index + 1];
    const joinsPrev =
      !!prev && !prev.system && !message.system && prev.authorId === message.authorId &&
      startOfDay(toDate(prev.createdAt)) === day &&
      date.getTime() - toDate(prev.createdAt).getTime() <= groupWindowMs;
    const joinsNext =
      !!next && !next.system && !message.system && next.authorId === message.authorId &&
      startOfDay(toDate(next.createdAt)) === day &&
      toDate(next.createdAt).getTime() - date.getTime() <= groupWindowMs;

    const position: GroupPosition = joinsPrev && joinsNext ? 'middle' : joinsPrev ? 'last' : joinsNext ? 'first' : 'single';
    items.push({ type: 'message', key: message.id, message, position });
  });

  return items;
}

/** Remove símbolos/separadores para as iniciais do Avatar: "Bruno · Instalação" → "Bruno Instalação" (BI). */
export function initialsName(name: string) {
  return name.replace(/[^\p{L}\s]/gu, ' ').replace(/\s+/g, ' ').trim() || name;
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} KB`;
  return `${(bytes / 1024 / 1024).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} MB`;
}
